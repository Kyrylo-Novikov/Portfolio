import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referenc',
  standalone: true,
  imports: [],
  templateUrl: './referenc-item.component.html',
  styleUrl: './referenc-item.component.scss',
})
export class ReferencComponent {
  @Input() referenc!: { name: string; text: string };
  @Input() active = false;
}
