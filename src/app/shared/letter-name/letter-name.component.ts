import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letter-name',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './letter-name.component.html',
  styleUrl: './letter-name.component.scss',
})
export class LetterNameComponent {
  @Input() hideNameOnMobile = true;
}
