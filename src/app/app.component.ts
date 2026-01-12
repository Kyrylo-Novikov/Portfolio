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
  title = 'portfolio';
  @ViewChild('shadow', { static: true }) shadowEle!: ElementRef<HTMLDivElement>;

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
