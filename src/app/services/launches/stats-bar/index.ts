import { httpClient } from "../../http-client";
import { YearlyRocketLaunches } from "./interfaces";

interface Launches {
  year: string;
  [rocketId: string]: number | string;
}

export async function getStatsBar() {
  const { data } = await httpClient.get<YearlyRocketLaunches>('launches/stats/bar');

  const launches: Launches[] = [];
  for (const entry of data) {
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
