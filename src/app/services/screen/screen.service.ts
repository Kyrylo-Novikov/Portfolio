import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  width = signal(window.innerWidth);

  constructor() {
    window.addEventListener('resize', () => this.width.set(window.innerWidth));
  }

  get isMobile() {
    return this.width() <= 800;
  }

  get windowW() {
    return this.width;
  }
}
