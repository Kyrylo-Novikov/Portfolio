import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-name',
  standalone: true,
  imports: [],
  templateUrl: './letter-name.component.html',
  styleUrl: './letter-name.component.scss',
})
export class LetterNameComponent {
  @Input() hideNameOnMobile = true;
}
