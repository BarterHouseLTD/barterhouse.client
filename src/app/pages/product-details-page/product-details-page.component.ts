import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Location} from "@angular/common";
import {appRoutes} from '@barterhouse/constants';

@Component({
  selector: 'bh-product-details-page',
  imports: [
    RouterLink
  ],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  private location: Location = inject(Location);

  protected onBack(): void {
    this.location.back();
  }

  protected getFile(): void {

  }

  protected readonly appRoutes = appRoutes;
}
