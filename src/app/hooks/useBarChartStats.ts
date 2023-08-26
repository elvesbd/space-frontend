import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function useBarChartStats() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['rocket-launches', 'stats', 'bar'],
    queryFn: launchesService.fetchYearlyRocketLaunchStats
  })

  return {
    data,
    keysWithoutYear: data?.keysWithoutYear,
    isFetching,
    isLoading
  }
}
