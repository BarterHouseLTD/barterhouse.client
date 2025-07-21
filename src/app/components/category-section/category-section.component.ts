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
    this.downloadTextFile('example.txt', 'MSDC файла.');
  }

  downloadTextFile(filename: string, content: string): void {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url); // почисти обекта след сваляне
  }
}
