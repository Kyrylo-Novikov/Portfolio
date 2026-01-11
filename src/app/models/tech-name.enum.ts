/**
 * Enum for diffrent technologies
 * Used as key in Tech_DATA
 */
export enum TechName {
  Angular = 'Angular',
  HTML = 'HTML',
  CSS = 'CSS',
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  Firebase = 'Firebase',
}

/**
 * Objects for each technolofiy
 * Every object contains:
 * -name : Name of the technology
 * -iconPath : Path to the technologi icon.
 */
export const Tech_DATA = {
  [TechName.Angular]: {
    name: 'Angular',
    iconPath: 'assets/imgs/tech-icon/overlay/Angular.svg',
  },
  [TechName.HTML]: {
    name: 'HTML',
    iconPath: 'assets/imgs/tech-icon/overlay/HTML.svg',
  },
  [TechName.CSS]: {
    name: 'CSS',
    iconPath: 'assets/imgs/tech-icon/overlay/CSS.svg',
  },
  [TechName.TypeScript]: {
    name: 'TypeScript',
    iconPath: 'assets/imgs/tech-icon/overlay/TypeScript.svg',
  },
  [TechName.JavaScript]: {
    name: 'JavaScript',
    iconPath: 'assets/imgs/tech-icon/overlay/JavaScript.svg',
  },
  [TechName.Firebase]: {
    name: 'Firebase',
    iconPath: 'assets/imgs/tech-icon/overlay/Firebase.svg',
  },
};
