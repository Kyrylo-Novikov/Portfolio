import { Component } from '@angular/core';
import { LetterNameComponent } from '../letter-name/letter-name.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';
import { TranslationService } from './../../services/translate/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LetterNameComponent, NavbarComponent, NavMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translateService: TranslationService) {}

  changeLanguage(lang: string) {
    this.translateService.switchLanguage(lang);
  }

  /**
   * Compares the currently loaded language with the language bound to the radio button.
   * Used to keep the navbar and mobile navbar in sync.
   *
   * @param lang Language that bound to the radio button
   * @returns 'true' if both languages match.
   */
  checkedCurrentLang(lang: string): boolean {
    const isMatch = this.translateService.isCurrentLang(lang);
    return isMatch;
  }
}
