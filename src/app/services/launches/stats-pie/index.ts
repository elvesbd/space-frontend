import { httpClient } from "../../http-client";
import { RocketLaunches } from "./interfaces";


export async function getStatsPie() {
  const { data } = await httpClient.get<RocketLaunches>('launches/stats/pie');
  const modifiedData = {
    ...data,
    rocketLaunchCounts: data.rocketLaunchCounts.map(rocketLaunch => ({
      rocket: rocketLaunch.rocket,
      name: rocketLaunch.name,
      totalCount: (rocketLaunch.successCount || 0) + (rocketLaunch.failureCount || 0)
    }))
  };
  return modifiedData
}
