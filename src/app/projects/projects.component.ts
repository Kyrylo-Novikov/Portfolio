import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = { name: string; usedTechs: string; imgPath: string };
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  hoverdIndex: number | null = null;
  projectsArray: Project[] = [
    {
      name: 'Join',
      usedTechs: 'Angular|TypeScript |HTML|CSS|Firebase',
      imgPath: '/assets/imgs/projects/join.svg',
    },
    {
      name: 'El Pollo Loco',
      usedTechs: 'HTML|CSS|JavaScript',
      imgPath: '/assets/imgs/projects/el-pollo-loco.svg',
    },
    {
      name: 'Pokemon',
      usedTechs: 'HTML|CSS|JavaScript',
      imgPath: '/assets/imgs/projects/pokemon-searched.png',
    },
  ];
}
