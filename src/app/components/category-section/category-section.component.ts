import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

import {appRoutes} from '@barterhouse/constants';
import {HighlightPipe} from '@barterhouse/pipes';

export interface Product {
  productId: number;
  productName: string;
}

@Component({
  selector: 'bh-category-section',
  imports: [
    NgbCollapse,
    HighlightPipe,
    RouterLink
  ],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {
  @Input() categoryId!: number;
  @Input() categoryName!: string;
  @Input() products: Product[] = [];
  @Input() searchValue?: string;

  protected isCollapsed: boolean = false;
  protected readonly appRoutes = appRoutes;

  protected getFile(productId: number): void {
    console.log('TODO...');
  }
}
