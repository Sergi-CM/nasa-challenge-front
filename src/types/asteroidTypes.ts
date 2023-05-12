export interface AsteroidStructure {
  id: string;
  name: string;
  maxDiameter: number;
  hazardous: boolean;
  speed: string;
}

export type AsteroidListStructure = AsteroidStructure[];
