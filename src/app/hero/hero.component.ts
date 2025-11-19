import { Component, inject } from '@angular/core';
import { ScreenService } from '../services/screen/screen.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isInHoverd: boolean = false;
  isGitHoverd: boolean = false;
  screen = inject(ScreenService);
  marqueeText: string[] = [
    'Based in Berlin',
    'Frontend Developer',
    'Open to work',
    'Available for remote work',
  ];

  marqueenLoop: string[] = [
    ...this.marqueeText,
    ...this.marqueeText,
    ...this.marqueeText,
  ];
}
