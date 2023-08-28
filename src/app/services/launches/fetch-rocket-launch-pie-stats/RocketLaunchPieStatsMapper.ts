import { RocketLaunchStats } from "./interfaces";

interface RocketLaunchStatsPie {
  rocketLaunchCounts: RocketLaunchCounts[],
  successRocketLaunches: number;
  failureRocketLaunches: number;
}

interface RocketLaunchCounts {
  rocketId:string;
  rocketName: string;
  totalCount: number;
}

class RocketLaunchPieStatsMapper {
  static toPersistence(domainLaunch: RocketLaunchStats): RocketLaunchStatsPie {
    const modifiedData: RocketLaunchStatsPie = {
      successRocketLaunches: domainLaunch.successCount,
      failureRocketLaunches: domainLaunch.failureCount,
      rocketLaunchCounts: domainLaunch.rocketLaunchCounts.map(rocketLaunch => ({
        rocketId: rocketLaunch.rocketId,
        rocketName: rocketLaunch.rocketName,
        totalCount: rocketLaunch.successCount + rocketLaunch.failureCount,
      })),
    };
    return modifiedData;
  }
}

export default RocketLaunchPieStatsMapper;
