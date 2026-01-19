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
import { Reference } from '../models/reference';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferencComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',

  /**
   * Slide animation for horizontal movement
   *
   * Moves the element left or right depending on states
   * Uses a configurable distance via animation parameters
   *
   * States:
   * - 'left'  → slides element to the left
   * - 'right' → slides element to the right
   */
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(-{{animationDist}})' }), {
        params: { animationDist: 'animationDist' },
      }),
      state('right', style({ transform: 'translateX({{animationDist}})' }), {
        params: { animationDist: 'animationDist' },
      }),
      transition('* => left, * => right', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class ReferencesComponent {
  /**
   * Menu animation trigger state
   * Default : null (no animation on init)
   */
  protected menuState: 'left' | 'right' | null = null;

  currentIndex: number = 0;
  /**
   * Controls whether the image source is changed.
   */
  leftArrowIsHovered: boolean = false;
  rightArrowIsHovered: boolean = false;

  /**
   * Default distance the element moves during the slide animation.
   */
  animationDist: string = '14.45%';

  /**
   * Changes animationDist depending on the width of the display.
   * For smooth animation on every screen width.
   */
  constructor(private screen: ScreenService) {
    // effect(() => {
    // this.animationDist = '14.5%';
    // const width = this.screen.windowW();
    // if (width >= 800) {
    //   this.animationDist = '14.5%';
    // } else if (width < 1024 && width > 800) {
    //     this.animationDist = '30%';
    // } else if (
    //   width < 800
    //  && width > 500
    // ) {
    // this.animationDist = '10%';
    //   } else if (width < 500) {
    //     this.animationDist = '16.8%';
    // }
    // });
  }

  /**
   * Reactive list of references using i18n keys.
   */
  referenceArray = signal<Reference[]>([
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

  /**
   * Doubles the references to ensure enough items for a smooth slide animation.
   */
  doubleRefArr = computed(() => [
    ...this.referenceArray(),
    ...this.referenceArray(),
  ]);

  /**
   * Starts the slide animation and updates the active index.
   * @param change Direction of the slide
   * - negative value: slide to the previous item 'right'
   * - positive value: slide to the next item 'left'.
   */
  slide(change: number) {
    this.menuState = change < 0 ? 'right' : 'left';
    setTimeout(() => {
      this.arrayUpdate(change);
    }, 1000);
    this.currentIndex = (this.currentIndex + change + 3) % 3;
  }

  /**
   * Update the reference array for the slideing animation.
   * Moves the references to create continuos sliding effect.
   * Resets the menuState on default after rearranging.
   * @param change Slide direction, passed from `slide()` function
   */
  arrayUpdate(change: number) {
    this.referenceArray.update((arr) =>
      change < 0
        ? [arr[arr.length - 1], ...arr.slice(0, -1)]
        : [...arr.slice(1), arr[0]],
    );
    this.menuState = null;
  }
}
