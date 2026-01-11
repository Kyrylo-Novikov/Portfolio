import { TechName } from './tech-name.enum';

/**
 * Defines the structure of the Projects.
 */
export interface Project {
  id: number;
  name: string;
  description: string;
  /** Technologies used in the project,must be one of TechName enum */
  usedTechs: TechName[];
  imgPath: string;
  gitLink: string;
  url: string;
}
