import { Component, Input, computed, inject } from '@angular/core';
import { OverlayService } from '../../services/overlay/overlay.service';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss',
})
export class ProjectOverlayComponent {
  private overlay = inject(OverlayService);
  project = computed(() => this.overlay.activeProject());

  close() {
    this.overlay.close();
    document.body.style.overflow = '';
  }

  next() {
    this.overlay.next();
  }
}
