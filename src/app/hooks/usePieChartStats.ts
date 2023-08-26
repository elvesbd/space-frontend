import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function usePieChartStats() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['rocket-launches', 'stats', 'pie'],
    queryFn: launchesService.fetchRocketLaunchPieStats
  })

  return {
    launches: data,
    isFetching,
    isLoading
  }
}
