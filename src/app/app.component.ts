import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './services/translate/translation.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /**
   * Reference to the cursor shadow element that follows the cursor.
   */
  @ViewChild('shadow', { static: true }) shadowEle!: ElementRef<HTMLDivElement>;

  /**
   * Tracks the mouse position and moves a shadow element to follow the cursor.
   * This creates a dynamic shadow effect around the element.
   *
   * @param event MouseEvent containing the current cursor coordinates
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.shadowEle.nativeElement.style.top = event.clientY + `px`;
    this.shadowEle.nativeElement.style.left = event.clientX + `px`;
  }
  constructor(private translateService: TranslationService) {}

  ngOnInit(): void {
    this.translateService.initLanguage();
  }
}
