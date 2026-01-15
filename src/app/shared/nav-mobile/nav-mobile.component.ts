import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
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
  isOpen: boolean = false;

  /**
   * Emits the selected section to the parent component
   * and closes the mobile navigation menu
   * @param section Selected section
   */
  onSelectSection(section: string) {
    this.sectionChange.emit(section);
    this.isOpen = false;
  }

  toggelNav() {
    this.isOpen = !this.isOpen;
  }
}
