import { Component, OnInit, signal } from '@angular/core';
import { ReferencComponent } from './referenc-item/referenc-item.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  group,
  animateChild,
} from '@angular/animations';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferencComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',

  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(-32%)' })),
      state('right', style({ transform: 'translateX(32%)' })),
      transition('* => left', [animate('1s ease-in-out')]),
      transition('* => right', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class ReferencesComponent {
  protected menuState: 'left' | 'right' | null = null;
  currentIndex: number = 0;
  activIndex = signal(0);
  isHoveredLeft: boolean = false;
  isHoveredRight: boolean = false;

  referenceArray = signal<{ name: string; text: string }[]>([
    {
      name: 'Andrè Zelmer - Team Partner',
      text: 'Kyrylo has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
    },
    {
      name: 'Zeljako Alacovic - Team Partner',
      text: 'Kyrylo hat unsere Website komplett neu aufgebaut – modern, schnell und intuitiv. Besonders beeindruckt hat mich, wie klar und verständlich die Kommunikation während des Projekts war. Jede Idee wurde ernst genommen und technisch perfekt umgesetzt.',
    },
    {
      name: 'Stefan Krischan - Team Partner',
      text: 'Kyrylo I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He super knowledgeable, easy to work with, and Id happily work with him again given the chance.',
    },
    {
      name: 'Andrè Zelmer - Team Partner',
      text: 'Kyrylo has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
    },
    {
      name: 'Zeljako Alacovic - Team Partner',
      text: 'Kyrylo hat unsere Website komplett neu aufgebaut – modern, schnell und intuitiv. Besonders beeindruckt hat mich, wie klar und verständlich die Kommunikation während des Projekts war. Jede Idee wurde ernst genommen und technisch perfekt umgesetzt.',
    },
    {
      name: 'Stefan Krischan - Team Partner',
      text: 'Kyrylo I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He super knowledgeable, easy to work with, and Id happily work with him again given the chance.',
    },
  ]);

  slide(change: number) {
    this.menuState = change < 0 ? 'right' : 'left';
    setTimeout(() => {
      this.arrayUpdate(change);
    }, 1000);
    this.currentIndex = (this.currentIndex + change + 3) % 3;
  }

  arrayUpdate(change: number) {
    this.referenceArray.update((arr) =>
      change < 0
        ? [arr[arr.length - 1], ...arr.slice(0, -1)]
        : [...arr.slice(1), arr[0]]
    );
    this.menuState = null;
  }
}
