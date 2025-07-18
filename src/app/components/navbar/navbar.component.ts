import {filter, Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router, RouterLink, RouterLinkActive} from '@angular/router';

import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

import {appRoutes} from '@barterhouse/constants';
import {Culture} from '@barterhouse/enumerations';
import {CultureService} from '@barterhouse/services/common';

@Component({
  selector: 'bh-navbar',
  imports: [
    RouterLink,
    NgTemplateOutlet,
    RouterLinkActive,
    NgbCollapse,
    FormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private cultureService: CultureService = inject(CultureService);

  private subs: Subscription = new Subscription();

  protected searchValue?: string;
  protected isCollapsed: boolean = true;
  protected selectedCulture: Culture = Culture.BG;
  protected readonly Culture = Culture;
  protected readonly appRoutes = appRoutes;

  public ngOnInit(): void {
    this.createCultureSubscription();
    this.createRouterSubscription();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  protected onSelectCulture(culture: Culture): void {
    this.cultureService.setCulture(culture);
  }

  protected isProductRoutesActive(): boolean {
    const activeRoutes: string[] = [
      `/${appRoutes.productList}`,
      `/${appRoutes.productDetail}`
    ];

    return activeRoutes.some(route => this.router.url.startsWith(route));
  }

  private createCultureSubscription(): void {
    const subscription: Subscription = this.cultureService.getCulture().subscribe({
      next: culture => {
        this.selectedCulture = culture;
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
      });
    this.subs.add(subscription);
  }
}
