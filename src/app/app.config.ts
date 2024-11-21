import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { THEME, Theme, ThemeService } from './services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      const themeService = inject(ThemeService);
      const theme = inject(THEME);
      themeService.setTheme(theme);
    }),
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        disabled: true,
        animation: {
          enterDuration: 0,
          exitDuration: 0,
        }
      }
    },
    {
      provide: THEME,
      useValue: Theme.Volvo
    }
  ]
};
