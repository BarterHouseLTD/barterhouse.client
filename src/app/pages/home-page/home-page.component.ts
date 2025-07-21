import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import {appRoutes} from '@barterhouse/constants';
import {CultureService} from '@barterhouse/services/common';
import {Culture} from '@barterhouse/enumerations';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bh-home-page',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {
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
