import { RocketLaunches } from "./interfaces";

interface GetStatsPieProps {
  rocketLaunchCounts: RocketLaunchCounts[],
  successRocketLaunches: number;
  failureRocketLaunches: number;
}

interface RocketLaunchCounts {
  rocket:string;
  name: string;
  totalCount: number;
}

class StatsPierMapper {
  toPersistence(domainLaunch: RocketLaunches): GetStatsPieProps {
  const modifiedData: GetStatsPieProps = {
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

export default new StatsPierMapper();