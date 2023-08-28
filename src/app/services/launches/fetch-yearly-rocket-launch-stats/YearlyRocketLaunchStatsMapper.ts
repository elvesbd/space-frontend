import { YearlyRocketLaunchStats } from "./interfaces";

interface YearlyRocketLaunchStatsBar {
  launches: Launches[];
  yearKey: string[];
}

interface Launches {
  year: string;
  [rocketId: string]: number | string;
}

class YearlyRocketLaunchStatsMapper {
  static toPersistence(domainLaunch: YearlyRocketLaunchStats): YearlyRocketLaunchStatsBar {
    const sortedDomainLaunch = [...domainLaunch].sort((a, b) => a.year - b.year);

    const launches: Launches[] = [];
    for (const entry of sortedDomainLaunch) {
      const launch: Launches = {
        year: entry.year.toString(),
      };
    
      for (const rocketCount of entry.rocketCounts) {
        launch[rocketCount.rocketId] = rocketCount.launchTotal;
      }
    
      launches.push(launch);
    }
  
    const yearKey: string[] = [];
  
    for (const obj of launches) {
      const keys = Object.keys(obj);
      const keysToPush = keys.filter(key => key !== "year");
      yearKey.push(...keysToPush);
    }
  
    return {
      launches,
      yearKey
    };
  }
}

export default YearlyRocketLaunchStatsMapper;
