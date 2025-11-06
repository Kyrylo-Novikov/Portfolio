import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayComponent } from '../projects/project-overlay/project-overlay.component';
import { OverlayService } from '../services/overlay.service';
import { Project } from '../../app/models/project';
import { TechName } from '../models/tech-name.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private overlay = inject(OverlayService);
  hoverdIndex: number | null = null;
  projectsArray: Project[] = [
    {
      id: 1,
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedTechs: [
        TechName.Angular,
        TechName.TypeScript,
        TechName.HTML,
        TechName.CSS,
        TechName.Firebase,
      ],
      imgPath: '/assets/imgs/projects/join.svg',
    },
    {
      id: 2,
      name: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/el-pollo-loco.svg',
    },
    {
      id: 3,
      name: 'Pokedex',
      description:
        'A frontend project that integrates the PokéAPI to dynamically display Pokémon data. Users can browse Pokémon, compare their stats, and explore their evolution chains.',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/pokedex.png',
    },
  ];

  open(project: Project) {
    this.overlay.open(project);
    document.body.style.overflow = 'hidden';
  }

  ngOnInit() {
    this.overlay.projects = this.projectsArray;
  }
}
