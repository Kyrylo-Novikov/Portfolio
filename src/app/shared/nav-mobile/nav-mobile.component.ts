import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
  @Input() isActive!: (lang: string) => boolean;
  @Output() langChange = new EventEmitter<string>();
  aktivSection: string = '';
  isOpen: boolean = false;

  setAktiv(section: string) {
    this.aktivSection = section;
    this.isOpen = false;
  }

  toggelNav() {
    this.isOpen = !this.isOpen;
  }
}
