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
