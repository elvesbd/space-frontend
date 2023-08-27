import { RocketLaunchStats } from "./interfaces";

interface RocketLaunchStatsPie {
  rocketLaunchCounts: RocketLaunchCounts[],
  successRocketLaunches: number;
  failureRocketLaunches: number;
}

interface RocketLaunchCounts {
  rocket:string;
  name: string;
  totalCount: number;
}

class RocketLaunchPieStatsMapper {
  static toPersistence(domainLaunch: RocketLaunchStats): RocketLaunchStatsPie {
  const modifiedData = {
    ...domainLaunch,
    rocketLaunchCounts: domainLaunch.rocketLaunchCounts.map(rocketLaunch => ({
      rocket: rocketLaunch.rocket,
      name: rocketLaunch.name,
      totalCount: (rocketLaunch.successCount || 0) + (rocketLaunch.failureCount || 0)
    }))
  };
    return modifiedData
  }
}

export default RocketLaunchPieStatsMapper;