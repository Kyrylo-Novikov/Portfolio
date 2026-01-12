import { Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';
import { FeedbackData } from '../../models/feedback-data';
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  /**
   * List of all projects for the navigation in the overlay
   * */
  projects: Project[] = [];

  /**
   *  Holds the current project for the overlay
   * */
  activeProject = signal<Project | null>(null);

  /**
   *  Holds feedback data for the feedback overlay.
   * */
  feedbackSignal = signal<FeedbackData | null>(null);

  constructor() {}

  /**
   * Sets the activ project and opens the project overlay.
   * @param project Project to show.
   */
  open(project: Project) {
    this.activeProject.set(project);
    this.disableScroll();
  }

  /**
   * Closes the project overlay.
   */
  close() {
    this.activeProject.set(null);
    this.enableScroll();
  }

  /**
   * Select the next project and update the active project
   * Used for navigating through the project overlay.
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
   * Shows the feedback overlay with the given data.
   * @param data Feedback object.
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
   * Closes the feedback overlay.
   */
  closeFeedback(): void {
    this.feedbackSignal.set(null);
    this.enableScroll();
  }
}
