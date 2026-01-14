import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  /**
   * Reactive signal holding the currently selected language.
   * Initialized from localStorage.
   */
  readonly currentLang = signal<string>(localStorage.getItem('lang') || 'en');

  constructor(private translate: TranslateService) {}

  /**
   * Initializes the app language for internationalization (i18n).
   * Loads the currently selected language from currentLang,
   * */
  initLanguage(): void {
    this.translate.use(this.currentLang());
  }

  /**
   * Changes the app language and saves the selection in localStorage.
   * @param lang The language to switch to
   */
  switchLanguage(lang: string) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  /**
   * Checks if the given language matches the current app language
   * @param lang language to check
   * @returns 'true' if the given language is currently active
   */
  isCurrentLang(lang: string) {
    return this.currentLang() === lang;
  }
}
