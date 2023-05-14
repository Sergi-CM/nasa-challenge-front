export interface ApiAsteroidStructure {
  id: string;
  name: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [
    {
      relative_velocity: {
        kilometers_per_second: string;
      };
    }
  ];
}

export type ApiAsteroidListStructure = ApiAsteroidStructure[];

export interface ApiResponseStructure {
  near_earth_objects: { [key: string]: ApiAsteroidListStructure };
}

export interface AppAsteroidStructure {
  id: string;
  hazardous: boolean;
  maxDiameter: number;
  name: string;
  speed: string;
}

export type AppAsteroidListStructure = AppAsteroidStructure[];
