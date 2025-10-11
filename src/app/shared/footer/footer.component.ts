import { Component } from '@angular/core';
import { LetterNameComponent } from '../letter-name/letter-name.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LetterNameComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
