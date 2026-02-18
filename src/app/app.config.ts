import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {ICON_CONFIG} from './core/config/icon.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    //Custom providers can be added here
    {
      provide: ICON_CONFIG,
      useValue: {
        spritePublicPath: 'icons/sprite/sprite.svg',
        symbolPrefix: 'icon-'
      }
    }

  ]
};


