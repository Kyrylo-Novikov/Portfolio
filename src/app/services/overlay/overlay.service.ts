import { Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  projects: Project[] = [];
  activeProject = signal<Project | null>(null);
  constructor() {}

  open(project: Project) {
    this.activeProject.set(project);
  }

  close() {
    this.activeProject.set(null);
  }

  next() {
    let list = this.projects;
    let current = this.activeProject();
    if (current) {
      let currentIndex = list.findIndex(
        (currentProject) => currentProject.name === current?.name
      );
      let nextIndex = currentIndex + 1;
      if (nextIndex === list.length) {
        nextIndex = 0;
      }

      let nextProject = list[nextIndex];
      this.activeProject.set(nextProject);
    }
  }
}
