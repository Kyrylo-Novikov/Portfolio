import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

/**
 * Loader factory für ngx-translate
 * load translation files from ./assets/i18n/
 *
 * @param http - Anfular HttpClient
 * @returns TranslateHttpLoader Instanz
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * Main configuration of the applicatin
 *
 * Configures:
 * - HTTP client for API request
 * - Internalisation (i18n) with ngx-translate
 *    - Default language: English
 *    - Translation files: ./assets/i18n/
 * - Routing with scroll behavior
 *    - Anchor scrolling enabled for fragments
 *    - Scroll position restort on navigation
 * -Browser animations
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
