import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './../../services/translate/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
  aktivSection: string = '';
  isOpen: boolean = false;

  constructor(private translateService: TranslationService) {
    // translateService.initLanguage();
  }

  changeLanguage(lang: string) {
    this.translateService.switchLanguage(lang);
  }

  setAktiv(section: string) {
    this.aktivSection = section;
    this.isOpen = false;
  }

  toggelNav() {
    this.isOpen = !this.isOpen;
  }

  isCurrentLang(lang: string): boolean {
    const isMatch = this.translateService.isCurrentLang(lang);
    return isMatch;
  }
}
