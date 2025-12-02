import { Component, effect, OnInit, signal } from '@angular/core';
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
import { ScreenService } from './/../services/screen/screen.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferencComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',

  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(-{{animationDist}})' }), {
        params: { animationDist: '32%' },
      }),
      state('right', style({ transform: 'translateX({{animationDist}})' }), {
        params: { animationDist: '32%' },
      }),
      transition('* => left, * => right', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class ReferencesComponent {
  protected menuState: 'left' | 'right' | null = null;
  currentIndex: number = 0;
  activIndex = signal(0);
  isHoveredLeft: boolean = false;
  isHoveredRight: boolean = false;
  animationDist: string = '32%';

  constructor(private screen: ScreenService) {
    effect(() => {
      if (screen.windowW() >= 1024) {
        this.animationDist = '32%';
      } else if (screen.windowW() < 1024 && screen.windowW() > 800) {
        this.animationDist = '24%';
      } else if (screen.windowW() < 800 && screen.windowW() > 500) {
        this.animationDist = '18%';
      } else if (screen.windowW() < 500) {
        this.animationDist = '16.8%';
      }
    });
  }

  referenceArray = signal<{ name: string; text: string }[]>([
    {
      name: 'A.Zelmer - Team Partner (Join & Kochwelt)',
      text: 'Mit Kyrylo habe ich an mehreren Projekten zusammengearbeitet. Beim Projekt „Join“ hat er den Bereich zur Erstellung von Aufgaben übernommen und zuverlässig geliefert. Technisch sehr kompetent und menschlich absolut unkompliziert – genau so jemanden wünscht man sich im Team.',
    },
    {
      name: 'Z.Alacovic - Team Partner (Join)',
      text: 'Kyrylo übernahm die Verantwortung für die Eingabelogik und sorgte dafür, dass neue Tasks fehlerfrei an die API übertragen wurden. Seine präzise und stabile Implementierung bildete eine verlässliche Grundlage für das störungsfreie Speichern und Weiterverarbeiten der Daten im gesamten System.',
    },
    {
      name: 'S.Krischan - Team Partner (Join)',
      text: 'Die Zusammenarbeit mit Kyrylo war sowohl entspannt als auch sehr produktiv. Besonders hervorzuheben sind seine klare Kommunikation und seine zuverlässige Einhaltung von Deadlines – man weiß bei ihm immer genau, woran man ist. Eine durchweg professionelle Arbeitsweise.',
    },
    {
      name: 'A.Zelmer - Team Partner (Join & Kochwelt)',
      text: 'Mit Kyrylo habe ich an mehreren Projekten zusammengearbeitet. Beim Projekt „Join“ hat er den Bereich zur Erstellung von Aufgaben übernommen und zuverlässig geliefert. Technisch sehr kompetent und menschlich absolut unkompliziert – genau so jemanden wünscht man sich im Team.',
    },
    {
      name: 'Z.Alacovic - Team Partner (Join)',
      text: 'Kyrylo übernahm die Verantwortung für die Eingabelogik und sorgte dafür, dass neue Tasks fehlerfrei an die API übertragen wurden. Seine präzise und stabile Implementierung bildete eine verlässliche Grundlage für das störungsfreie Speichern und Weiterverarbeiten der Daten im gesamten System.',
    },
    {
      name: 'S.Krischan - Team Partner (Join)',
      text: 'Die Zusammenarbeit mit Kyrylo war sowohl entspannt als auch sehr produktiv. Besonders hervorzuheben sind seine klare Kommunikation und seine zuverlässige Einhaltung von Deadlines – man weiß bei ihm immer genau, woran man ist. Eine durchweg professionelle Arbeitsweise.',
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
