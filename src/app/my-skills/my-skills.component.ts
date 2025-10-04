import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  techsArr: string[] = [
    'assets/imgs/tech-icon/current-tech/HTML.svg',
    'assets/imgs/tech-icon/current-tech/CSS.svg',
    'assets/imgs/tech-icon/current-tech/JavaScript.svg',
    'assets/imgs/tech-icon/current-tech/Material Design.svg',
    'assets/imgs/tech-icon/current-tech/TypeScript.svg',
    'assets/imgs/tech-icon/current-tech/Angular.svg',
    'assets/imgs/tech-icon/current-tech/Firebase.svg',
    'assets/imgs/tech-icon/current-tech/Git.svg',
    'assets/imgs/tech-icon/current-tech/Rest-Api.svg',
    'assets/imgs/tech-icon/current-tech/Scrum.svg',
    'assets/imgs/tech-icon/current-tech/GrowthMindset.svg',
  ];
}
