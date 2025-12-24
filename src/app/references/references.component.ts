import { Component, computed, effect, OnInit, signal } from '@angular/core';
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
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferencComponent, TranslateModule],
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
      name: 'REFERENZES.REF_1.NAME',
      text: 'REFERENZES.REF_1.TEXT',
    },
    {
      name: 'REFERENZES.REF_2.NAME',
      text: 'REFERENZES.REF_2.TEXT',
    },
    {
      name: 'REFERENZES.REF_3.NAME',
      text: 'REFERENZES.REF_3.TEXT',
    },
  ]);

  doubleRefArr = computed(() => [
    ...this.referenceArray(),
    ...this.referenceArray(),
  ]);

  slide(change: number) {
    this.menuState = change < 0 ? 'right' : 'left';
    setTimeout(() => {
      this.arrayUpdate(change);
    }, 1000);
    this.currentIndex = (this.currentIndex + change) % 3;
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
