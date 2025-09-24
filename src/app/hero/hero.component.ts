import { Component } from '@angular/core';

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

  marqueeText: string[] = [
    'Based in Berlin',
    'Frontend Developer',
    'Open to work',
    'Available for remote work',
  ];

  marqueenLoop: string[] = [...this.marqueeText, ...this.marqueeText];
}
