import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightPipe } from '../shared/pipes/highlight.pipe';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule, HighlightPipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  legalWords = ['Portfolios', 'Portfolio', 'Developer Akademie', 'GmbH'];
}
