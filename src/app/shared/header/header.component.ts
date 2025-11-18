import { Component } from '@angular/core';
import { LetterNameComponent } from '../letter-name/letter-name.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LetterNameComponent, NavbarComponent, NavMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
