import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayComponent } from '../projects/project-overlay/project-overlay.component';
import { OverlayService } from '../services/overlay/overlay.service';
import { Project } from '../../app/models/project';
import { TechName } from '../models/tech-name.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private overlay = inject(OverlayService);
  hoverdIndex: number | null = null;
  projectsArray: Project[] = [
    {
      id: 1,
      name: 'EL pollo loco',
      description: 'PROJECTS_OVERLAY.EL_POLLO_LOCO.TEXT',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/el-pollo-loco.svg',
      gitLink: 'https://github.com/Kyrylo-Novikov/El-pollo-loco',
      url: 'https://kyrylo-novikov.github.io/El-pollo-loco/',
    },
    {
      id: 2,
      name: 'Join',
      description: 'PROJECTS_OVERLAY.JOIN.TEXT',
      usedTechs: [
        TechName.HTML,
        TechName.CSS,
        TechName.TypeScript,
        TechName.Firebase,
      ],
      imgPath: '/assets/imgs/projects/join.svg',
      gitLink: 'https://github.com/Kyrylo-Novikov/Join',
      url: 'https://kyrylo-novikov.github.io/Join/',
    },

    {
      id: 3,
      name: 'Pokedex',
      description: 'PROJECTS_OVERLAY.POKEDEX.TEXT',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/pokedex.png',
      gitLink: 'https://github.com/Kyrylo-Novikov/Pokedex',
      url: 'https://kyrylo-novikov.github.io/Pokedex/',
    },
  ];

  open(project: Project) {
    this.overlay.open(project);
  }

  ngOnInit() {
    this.overlay.projects = this.projectsArray;
  }
}
