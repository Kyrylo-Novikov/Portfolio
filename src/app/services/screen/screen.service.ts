import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  /**
   * Holds the current window width
   */
  width = signal(window.innerWidth);

  constructor() {
    /**
     * Updates the `width` signal whenever the window is resized
     */
    window.addEventListener('resize', () => this.width.set(window.innerWidth));
  }

  /**
   * Indicates if the current screen width is considered mobile.
   * @returns `true` if the window width is 800px or less, otherwise `false`.
   */
  get isMobile() {
    return this.width() <= 800;
  }

  get windowW() {
    return this.width;
  }
}
