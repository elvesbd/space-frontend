import { fetchAllRocketLaunches } from "./fetch-all-rocket-launches";
import { fetchRocketLaunchPieStats } from "./fetch-rocket-launch-pie-stats";
import { fetchYearlyRocketLaunchStats } from "./fetch-yearly-rocket-launch-stats";


export const launchesService = {
  fetchAllRocketLaunches,
  fetchRocketLaunchPieStats,
  fetchYearlyRocketLaunchStats
}