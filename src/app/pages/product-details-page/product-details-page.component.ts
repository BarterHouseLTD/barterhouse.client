import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router, RouterLink} from '@angular/router';
import {Location} from "@angular/common";
import {appRoutes} from '@barterhouse/constants';
import {ProductApiService} from '@barterhouse/services/core';
import {ProductDetailsResponse} from '@barterhouse/services-models/core';
import {filter, Subscription} from 'rxjs';
import {CultureService} from '@barterhouse/services/common';
import {Culture} from '@barterhouse/enumerations';

export interface ProductDetails {
  productId: number,
  productName: string,
  productDescription: string,
  categoryName: string,
  similarProducts: SimilarProduct[];
}

export interface SimilarProduct {
  productId: number,
  productName: string,
}

@Component({
  selector: 'bh-product-details-page',
  imports: [
    RouterLink
  ],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productApiService: ProductApiService = inject(ProductApiService);
  private cultureService: CultureService = inject(CultureService);
  private location: Location = inject(Location);

  private subs: Subscription = new Subscription();

  protected productId!: number;
  protected loading: boolean = true;
  protected selectedCulture: Culture = Culture.BG;
  protected productDetails!: ProductDetails;
  protected productDetailsResponse?: ProductDetailsResponse;

  protected readonly appRoutes = appRoutes;
  protected readonly Culture = Culture;

  public ngOnInit(): void {
    const productId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (!!productId) {
      this.productId = +productId;
      this.getProductDetails();
    }
    this.createCultureSubscription();
    this.createRouterSubscription();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  protected onBack(): void {
    this.location.back();
  }

  protected getFile(): void {

  }

  private getProductDetails(): void {
    this.loading = true;
    this.productApiService.getProductDetails(this.productId).subscribe({
      next: response => {
        this.productDetailsResponse = response;
        this.initializeProductDetails();
      }
    });
  }

  private createCultureSubscription(): void {
    const subscription: Subscription = this.cultureService.getCulture().subscribe({
      next: culture => {
        this.selectedCulture = culture;
        this.initializeProductDetails();
      }
    });
    this.subs.add(subscription);
  }

  private initializeProductDetails(): void {
    if (!this.productDetailsResponse) {
      return;
    }
    this.productDetails = {
      productId: this.productDetailsResponse.productId,
      categoryName: this.selectedCulture === Culture.BG ? this.productDetailsResponse.categoryNameBG : this.productDetailsResponse.categoryNameEN,
      productName: this.selectedCulture === Culture.BG ? this.productDetailsResponse.productNameBG : this.productDetailsResponse.productNameEN,
      productDescription: this.selectedCulture === Culture.BG ? this.productDetailsResponse.productDescriptionBG : this.productDetailsResponse.productDescriptionEN,
      similarProducts: this.productDetailsResponse.similarProducts.map(product => {
        return {
          productId: product.productId,
          productName: this.selectedCulture === Culture.BG ? product.productNameBG : product.productNameEN
        }
      })
    };
    this.loading = false;
  }

  private createRouterSubscription(): void {
    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const productIdString: string | null = this.activatedRoute.snapshot.paramMap.get('id');
        if (!!productIdString) {
          const productId: number = Number.parseInt(productIdString);
          if (productId !== this.productId) {
            this.productId = productId;
            this.getProductDetails();
          }
        }
      });
    this.subs.add(subscription);
  }
}
