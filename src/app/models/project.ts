import { TechName } from './tech-name.enum';

export interface Project {
  id: number;
  name: string;
  description: string;
  usedTechs: TechName[];
  imgPath: string;
  gitLink: string;
  url: string;
}
