import { Component } from '@angular/core';
import { HighlightDirective } from './../shared/direktive/highlight.directive';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}
