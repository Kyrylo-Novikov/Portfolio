import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  /**
   * List of "About Me" objects displayed in the About Me section.
   *
   * Each object consists of:
   * - `src`: Path to the images used as visual markers next to the text
   * - `text`: i18n translation key prefixed with `ABOUT_ME.`
   *
   * This list is iterated and rendered directly in the template using `@for`.
   */
  aboutMeArray: { src: string; text: string }[] = [
    {
      src: '../../assets/imgs/icon-interactiv/location.png',
      text: 'ABOUT_ME.LOCATION',
    },
    {
      src: '../../assets/imgs/icon-interactiv/cognition.png',
      text: 'ABOUT_ME.MINDSET',
    },
    {
      src: '../../assets/imgs/icon-interactiv/new_releases.png',
      text: 'ABOUT_ME.PROBLEM_SOLVING',
    },
  ];
}
