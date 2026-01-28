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
  /**
   * Injects OverlayService
   * Used for opening the picked project in a overlay
   */
  private overlay = inject(OverlayService);

  /**
   * Saves the index of the current hoverd project
   * Used to show the project image on hover
   */
  hoverdIndex: number | null = null;

  /**
   * Array with information about the projects.
   * each project contains:
   * -id : project id
   * -name : project name
   * -description : description stored as an i18n key
   * -usedTechs : technologies used for the projects
   * -imgPath : path to the project image
   * -gitLink : GitHub repository URL
   * -url : live demo URL of the project
   */
  projectsArray: Project[] = [
    {
      id: 1,
      name: 'EL pollo loco',
      description: 'PROJECTS_OVERLAY.EL_POLLO_LOCO.TEXT',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/el-pollo-loco.svg',
      gitLink: 'https://github.com/Kyrylo-Novikov/El-pollo-loco',
      url: 'https://el-pollo-loco.kyrylo-novikov.com',
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
      url: 'https://join.kyrylo-novikov.com',
    },

    {
      id: 3,
      name: 'Pokedex',
      description: 'PROJECTS_OVERLAY.POKEDEX.TEXT',
      usedTechs: [TechName.HTML, TechName.CSS, TechName.JavaScript],
      imgPath: '/assets/imgs/projects/pokedex.png',
      gitLink: 'https://github.com/Kyrylo-Novikov/Pokedex',
      url: 'pokedex.kyrylo-novikov.com',
    },
  ];

  /**
   * Opens the overlay for the selected project
   */
  open(project: Project) {
    this.overlay.open(project);
  }

  /**
   * Provides the project list to the OverlayService.
   */
  ngOnInit() {
    this.overlay.projects = this.projectsArray;
  }
}
