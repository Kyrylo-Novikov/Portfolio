import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  currentLang = signal(localStorage.getItem('lang') || 'en');

  constructor(private translate: TranslateService) {}

  /**
   * Initializes the app language for internationalization (i18n).
   * Loads the currently selected language from localStorage,
   * or defaults to 'en' if none is set,
   * and sets it for the app.
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
