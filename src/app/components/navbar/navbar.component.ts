import {Subscription} from 'rxjs';
import {RouterLink} from '@angular/router';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';

import {appRoutes} from '@barterhouse/constants';
import {Culture} from '@barterhouse/enumerations';
import {CultureService} from '@barterhouse/services/common';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'bh-navbar',
  imports: [
    RouterLink,
    NgTemplateOutlet
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private cultureService: CultureService = inject(CultureService);

  private subs: Subscription = new Subscription();

  protected selectedCulture: Culture = Culture.BG;
  protected readonly Culture = Culture;
  protected readonly appRoutes = appRoutes;

  public ngOnInit(): void {
    this.createCultureSubscription();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  protected onSelectCulture(culture: Culture): void {
    this.cultureService.setCulture(culture);
  }

  private createCultureSubscription(): void {
    const subscription: Subscription = this.cultureService.getCulture().subscribe({
      next: culture => {
        this.selectedCulture = culture;
      }
    });
    this.subs.add(subscription);
  }
}
