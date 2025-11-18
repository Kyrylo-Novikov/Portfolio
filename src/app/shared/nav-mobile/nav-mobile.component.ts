import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
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
