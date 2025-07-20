import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled'
      })),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({eventCoalescing: true})
  ]
};
