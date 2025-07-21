import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Culture} from '@barterhouse/enumerations';
import {appRoutes} from '@barterhouse/constants';
import {Subscription} from 'rxjs';
import {CultureService} from '@barterhouse/services/common';

@Component({
  selector: 'bh-contact-us-page',
  imports: [],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent implements OnInit, OnDestroy {
  protected selectedCulture: Culture = Culture.BG;
  protected readonly Culture = Culture;
  protected readonly appRoutes = appRoutes;
  private cultureService: CultureService = inject(CultureService);

  private subs: Subscription = new Subscription();

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
