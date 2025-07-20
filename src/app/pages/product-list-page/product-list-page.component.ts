import {filter, Subscription} from 'rxjs';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';

import {Culture} from '@barterhouse/enumerations';
import {CultureService} from '@barterhouse/services/common';
import {CategorySectionComponent} from '@barterhouse/components';
import {CategoryResponse} from '@barterhouse/services-models/core';
import {CategoryApiService, CategoryStateService} from '@barterhouse/services/core';

export interface Category {
  categoryId: number;
  categoryName: string;
  products: { productId: number; productName: string }[];
}

@Component({
  selector: 'bh-product-list-page',
  imports: [
    CategorySectionComponent
  ],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private cultureService: CultureService = inject(CultureService);
  private categoryApiService: CategoryApiService = inject(CategoryApiService);
  private categoryStateService: CategoryStateService = inject(CategoryStateService);

  private subs: Subscription = new Subscription();

  protected searchValue?: string;
  protected loading: boolean = true;
  protected selectedCulture: Culture = Culture.BG;
  protected categories: CategoryResponse[] = [];
  protected filteredCategories: Category[] = [];
  protected readonly Culture = Culture;

  public ngOnInit(): void {
    const queryParams: Params = this.activatedRoute.snapshot.queryParams;
    this.searchValue = queryParams['searchValue'];
    this.getAllCategories();
    this.createRouterSubscription();
    this.createCultureSubscription();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getAllCategories(): void {
    const subscription: Subscription = this.categoryStateService.getAllCategories().subscribe({
      next: categories => {
        if (!!categories) {
          this.loading = false;
          this.categories = categories;
          this.filterCategories();
        } else {
          this.categoryApiService.getAllCategories().subscribe({
            next: response => {
              this.categoryStateService.setAllCategories(response);
            }
          });
        }
      }
    });
    this.subs.add(subscription);
  }

  private createCultureSubscription(): void {
    const subscription: Subscription = this.cultureService.getCulture().subscribe({
      next: culture => {
        this.selectedCulture = culture;
        this.filterCategories();
      }
    });
    this.subs.add(subscription);
  }

  private createRouterSubscription(): void {
    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const queryParams: Params = this.activatedRoute.snapshot.queryParams;
        if (!!queryParams['searchValue']) {
          this.searchValue = queryParams['searchValue'];
        } else {
          this.searchValue = undefined;
        }
        this.filterCategories();
      });
    this.subs.add(subscription);
  }

  private filterCategories(): void {
    if (!this.categories) {
      return;
    }
    this.filteredCategories = [];
    this.categories.forEach(category => {
      const filteredCategory: Category = {
        categoryId: category.categoryId,
        categoryName: this.selectedCulture === Culture.BG ? category.categoryNameBG : category.categoryNameEN,
        products: []
      };
      category.products.forEach(product => {
        if (!!this.searchValue) {
          if (this.selectedCulture === Culture.BG && product.productNameBG.toUpperCase().includes(this.searchValue.toUpperCase())) {
            filteredCategory.products.push({
              productId: product.productId,
              productName: product.productNameBG,
            });
          } else if (this.selectedCulture === Culture.EN && product.productNameEN.toUpperCase().includes(this.searchValue.toUpperCase())) {
            filteredCategory.products.push({
              productId: product.productId,
              productName: product.productNameEN,
            });
          }
        } else {
          filteredCategory.products.push({
            productId: product.productId,
            productName: this.selectedCulture === Culture.BG ? product.productNameBG : product.productNameEN,
          });
        }
      });

      if (filteredCategory.products.length > 0) {
        this.filteredCategories.push(filteredCategory);
      }
    });
  }
}
