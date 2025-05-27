import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { provideHttpClient } from '@angular/common/http'
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser'
import { routes } from './app.routes'
import { AuthService } from './services/auth.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideAppInitializer(() => inject(AuthService).initializeAuthStore()),
  ],
}
