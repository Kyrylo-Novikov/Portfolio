import { TechName } from './tech-name.enum';

export interface Project {
  id: string;
  name: string;
  description: string;
  usedTechs: TechName[];
  imgPath: string;
}
