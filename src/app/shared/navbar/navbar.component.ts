import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './../../services/translate/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private translateService: TranslationService) {
    // translateService.initLanguage();
  }

  changeLanguage(lang: string) {
    this.translateService.switchLanguage(lang);
  }

  aktivSection: string = '';

  setAktiv(section: string) {
    this.aktivSection = section;
  }

  isCurrentLang(lang: string): boolean {
    const isMatch = this.translateService.isCurrentLang(lang);
    return isMatch;
  }
}
