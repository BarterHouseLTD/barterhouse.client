import {Subscription} from 'rxjs';
import {RouterLink} from '@angular/router';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';

import {appRoutes} from '@barterhouse/constants';
import {Culture} from '@barterhouse/enumerations';
import {CultureService} from '@barterhouse/services/common';

@Component({
  selector: 'bh-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
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

  private createCultureSubscription(): void {
    const subscription: Subscription = this.cultureService.getCulture().subscribe({
      next: culture => {
        this.selectedCulture = culture;
      }
    });
    this.subs.add(subscription);
  }
}
