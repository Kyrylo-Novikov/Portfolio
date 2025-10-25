import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  techsArr: { name: string; path: string }[] = [
    { name: 'HTML', path: 'assets/imgs/tech-icon/current-tech/HTML.svg' },
    { name: 'CSS', path: 'assets/imgs/tech-icon/current-tech/CSS.svg' },
    {
      name: 'JavaScript',
      path: 'assets/imgs/tech-icon/current-tech/JavaScript.svg',
    },
    {
      name: 'Material Design',
      path: 'assets/imgs/tech-icon/current-tech/Material Design.svg',
    },
    {
      name: 'TypeScript',
      path: 'assets/imgs/tech-icon/current-tech/TypeScript.svg',
    },
    { name: 'Angular', path: 'assets/imgs/tech-icon/current-tech/Angular.svg' },
    {
      name: 'Firebase',
      path: 'assets/imgs/tech-icon/current-tech/Firebase.svg',
    },
    { name: 'Git', path: 'assets/imgs/tech-icon/current-tech/Git.svg' },
    {
      name: 'Rest-Api',
      path: 'assets/imgs/tech-icon/current-tech/Rest-Api.svg',
    },
    { name: 'Scrum', path: 'assets/imgs/tech-icon/current-tech/Scrum.svg' },
    {
      name: 'Growth Mindset',
      path: 'assets/imgs/tech-icon/current-tech/Growth Mindset.svg',
    },
  ];
}
