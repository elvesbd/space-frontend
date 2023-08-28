export interface Launches {
  results: Launch[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface Launch {
  launchId: string;
  flightNumber: number;
  missionName: string;
  dateLaunch: string;
  rocketId: string;
  rocketName: string;
  success: boolean;
  youtubeLink: string;
}