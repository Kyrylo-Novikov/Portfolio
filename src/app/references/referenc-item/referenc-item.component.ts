import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-referenc',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './referenc-item.component.html',
  styleUrl: './referenc-item.component.scss',
})
export class ReferencComponent {
  @Input() referenc!: { name: string; text: string };
  @Input() active = false;
}
