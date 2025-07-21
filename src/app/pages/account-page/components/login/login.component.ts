import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {appRoutes} from '@barterhouse/constants';
import {Culture} from '@barterhouse/enumerations';
import {CultureService} from '@barterhouse/services/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bh-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
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
