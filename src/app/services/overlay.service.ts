import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  activeProject = signal<Project | null>(null);
  constructor() {}

  open(project: Project) {
    this.activeProject.set(project);
  }

  close() {
    this.activeProject.set(null);
  }
}
