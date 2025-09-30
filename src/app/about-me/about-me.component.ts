import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  aboutMeArray: { src: string; text: string }[] = [
    {
      src: '../../assets/imgs/icon/location.png',
      text: 'Hey there, Iam Lukas! Write some information about yourself that is it related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills',
    },
    {
      src: '../../assets/imgs/icon/cognition.png',
      text: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills',
    },
    {
      src: '../../assets/imgs/icon/new_releases.png',
      text: 'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.',
    },
  ];
}
