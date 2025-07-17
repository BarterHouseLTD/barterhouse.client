import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, NavbarComponent } from '@barterhouse/components';

@Component({
  selector: 'bh-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
