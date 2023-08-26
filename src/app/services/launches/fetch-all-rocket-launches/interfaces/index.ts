export interface Launches {
  results: Launch[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface Launch {
  youtubeLink: string;
  success: boolean;
  flightNumber: number;
  missionName: string;
  date: string;
  rocketName: string;
}