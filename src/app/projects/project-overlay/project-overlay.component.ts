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
  private overlay = inject(OverlayService);
  project = computed(() => this.overlay.activeProject());

  close() {
    this.overlay.close();
  }

  next() {
    this.overlay.next();
  }
}
