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
  isInHoverd: boolean = false;
  isGitHoverd: boolean = false;
  screen = inject(ScreenService);
  marqueeText: string[] = [
    'HERO.MARQUEE.LOCATION',
    'HERO.MARQUEE.POSITION',
    'HERO.MARQUEE.OPEN_TO_WORK',
    'HERO.MARQUEE.REMOTE_AVAILABLE',
  ];

  marqueenLoop: string[] = [
    ...this.marqueeText,
    ...this.marqueeText,
    ...this.marqueeText,
  ];
}
