import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initLanguage(): void {
    const currentLang = localStorage.getItem('lang');
    if (currentLang) {
      this.translate.use(currentLang);
    } else {
      this.translate.use('en');
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  isCurrentLang(lang: string): boolean {
    const isMatch = this.translate.currentLang === lang;
    return isMatch;
  }
}
