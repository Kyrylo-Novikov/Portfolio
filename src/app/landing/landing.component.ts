import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  @ViewChild('shadow', { static: true }) shadowEle!: ElementRef<HTMLDivElement>;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.shadowEle.nativeElement.style.top = event.clientY + `px`;
    this.shadowEle.nativeElement.style.left = event.clientX + `px`;
  }
}
