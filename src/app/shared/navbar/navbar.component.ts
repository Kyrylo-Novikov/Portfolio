import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
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
  /**
   * Reactive signal holding the currently selected language.
   * Provided by the parent component.
   */
  @Input() currentLang!: Signal<string>;

  /**
   * Indicates which section is currently active
   * Used to applay the active styling to the matching link
   */
  @Input() activeSection!: string;

  /**
   * Emits the selected language to the parent component
   * when a radio button is clicked
   */
  @Output() langChange = new EventEmitter<string>();

  /**
   * Emits the selected section to the parent component
   * when a link is clicked
   */
  @Output() sectionChange = new EventEmitter<string>();
}
