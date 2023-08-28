import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function usePieChartStats() {
  const { data } = useQuery({
    queryKey: ['rocket-launches', 'stats', 'pie'],
    queryFn: launchesService.fetchRocketLaunchPieStats
  })

  const rocketLaunchCounts = data?.rocketLaunchCounts
  const launches = rocketLaunchCounts?.map(launch => ({
    id: launch.rocketId,
    label: launch.rocketName,
    value: launch.totalCount
  }))

  const successRocketLaunches = data?.successRocketLaunches
  const failureRocketLaunches = data?.failureRocketLaunches

  return {
    launches,
    successRocketLaunches,
    failureRocketLaunches,
  }
}
