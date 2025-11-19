import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  width = signal(window.innerWidth);

  constructor() {
    window.addEventListener('resize', () => this.width.set(window.innerWidth));
    console.log(this.width());
  }

  get isMobile() {
    return this.width() <= 800;
  }
}
