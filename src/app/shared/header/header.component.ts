import { Component } from '@angular/core';
import { LetterNameComponent } from '../letter-name/letter-name.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LetterNameComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  aktivSection: string = '';

  setAktiv(section: string) {
    this.aktivSection = section;
  }
}
