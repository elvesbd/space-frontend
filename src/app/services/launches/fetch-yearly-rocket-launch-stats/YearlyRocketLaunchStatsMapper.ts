import { YearlyRocketLaunchStats } from "./interfaces";

interface YearlyRocketLaunchStatsBar {
  launches: Launches[];
  keysWithoutYear: string[];
}

interface Launches {
  year: string;
  [rocketId: string]: number | string;
}

class YearlyRocketLaunchStatsMapper {
  static toPersistence(domainLaunch: YearlyRocketLaunchStats): YearlyRocketLaunchStatsBar {
    const launches: Launches[] = [];
    for (const entry of domainLaunch) {
      const launch: Launches = {
        year: entry.year.toString(),
      };
    
      for (const rocketCount of entry.rocketCounts) {
        launch[rocketCount.rocket] = rocketCount.launchTotal;
      }
    
      launches.push(launch);
    }
  
    const keysWithoutYear: string[] = [];
  
    for (const obj of launches) {
      const keys = Object.keys(obj);
      const keysToPush = keys.filter(key => key !== "year");
      keysWithoutYear.push(...keysToPush);
    }
  
    return {
      launches,
      keysWithoutYear
    };
  }
}

export default YearlyRocketLaunchStatsMapper;