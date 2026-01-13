import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isActive!: (lang: string) => boolean;
  @Output() langChange = new EventEmitter<string>();
  aktivSection: string = '';

  setAktiv(section: string) {
    this.aktivSection = section;
  }
}
