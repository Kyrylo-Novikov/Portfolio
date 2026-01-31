import { Component, inject } from '@angular/core';
import { ScreenService } from '../services/screen/screen.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /**
   * Tracks if the LinkedIn element is hovered.
   */
  isInHoverd: boolean = false;

  /**
   * Tracks if the Git element is hovered.
   */
  isGitHoverd: boolean = false;

  /**
   * Tracks if the mail element is hovered.
   */
  isMailHoverd: boolean = false;

  /**
   * Inject screenService for monitoring of the screen width
   */
  screen = inject(ScreenService);

  /**
   * Array with information about me
   * Uses i18n keys with the prefix 'HERO.MARQUEE'.
   * Iterated with '@for' in the template
   */
  marqueeText: string[] = [
    'HERO.MARQUEE.LOCATION',
    'HERO.MARQUEE.POSITION',
    'HERO.MARQUEE.OPEN_TO_WORK',
    'HERO.MARQUEE.REMOTE_AVAILABLE',
  ];

  /**
   * Expands the array three times using the spread operator (`...`).
   * so that the text scrolls continuosly in the template.
   */
  marqueenLoop: string[] = [
    ...this.marqueeText,
    ...this.marqueeText,
    ...this.marqueeText,
  ];
}
