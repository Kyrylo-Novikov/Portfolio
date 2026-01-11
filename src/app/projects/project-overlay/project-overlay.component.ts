import { Component, Input, computed, inject } from '@angular/core';
import { OverlayService } from '../../services/overlay/overlay.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss',
})
export class ProjectOverlayComponent {
  /**
   * Injects OverlayService to controle
   * the current aktive project
   */
  private overlay = inject(OverlayService);
  project = computed(() => this.overlay.activeProject());

  /**
   * Closes the overlay.
   */
  close() {
    this.overlay.close();
  }

  /**
   * Opens the overlay for the next project.
   */
  next() {
    this.overlay.next();
  }
}
