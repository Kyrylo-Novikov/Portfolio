import { Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';
import { FeedbackData } from '../../models/feedback-data';
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  /** Liste aller Projekte für die Navigation */
  projects: Project[] = [];

  /** Signal für das aktuell ausgewählte Projekt im Overlay */
  activeProject = signal<Project | null>(null);

  /** Signal für Feedback-Meldungen (z.B. nach Formularversand) */
  feedbackSignal = signal<FeedbackData | null>(null);

  constructor() {}

  /**
   * Öffnet das Projekt-Detail-Overlay.
   * @param project Das anzuzeigende Projekt-Objekt.
   */
  open(project: Project) {
    this.activeProject.set(project);
    this.disableScroll();
  }

  /**
   * Schließt das Projekt-Detail-Overlay.
   */
  close() {
    this.activeProject.set(null);
    this.enableScroll();
  }

  /**
   * Schaltet zum nächsten Projekt in der Liste.
   */
  next() {
    let current = this.activeProject();
    if (!current) return;
    let currentIndex = this.projects.findIndex(
      (currentProject) => currentProject.id === current?.id
    );
    let nextIndex = (currentIndex + 1) % this.projects.length;
    this.activeProject.set(this.projects[nextIndex]);
  }

  /**
   * Öffnet ein Feedback-Overlay (Erfolg oder Fehler).
   * @param data Ein Objekt vom Typ FeedbackData.
   */
  showFeedback(data: FeedbackData) {
    this.feedbackSignal.set(data);
    this.disableScroll();
  }

  enableScroll() {
    if (!this.activeProject() && !this.feedbackSignal()) {
      document.body.style.overflow = '';
    }
  }
  disableScroll() {
    if (this.activeProject() || this.feedbackSignal()) {
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Schließt das Feedback-Overlay.
   */
  closeFeedback(): void {
    this.feedbackSignal.set(null);
    this.enableScroll();
  }
}
