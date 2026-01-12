import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Reference } from '../../models/reference';

@Component({
  selector: 'app-referenc',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './referenc-item.component.html',
  styleUrl: './referenc-item.component.scss',
})
export class ReferencComponent {
  /**
   * Reference object passed from the parent reference component
   * to the reference item.
   */
  @Input() referenc!: Reference;

  /**
   * Sets if the item is active.
   * - `true`: Item is bigger.
   * - `false`: Item stays normal size.
   */
  @Input() active = false;
}
