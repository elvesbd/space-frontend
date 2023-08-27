import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function useBarChartStats() {
  const { data } = useQuery({
    queryKey: ['rocket-launches', 'stats', 'bar'],
    queryFn: launchesService.fetchYearlyRocketLaunchStats
  })
  const launches = data?.launches;
  const yearKey = data?.yearKey

  return {
    launches,
    yearKey,
  }
}
