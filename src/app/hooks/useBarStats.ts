import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function useBarStats() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['launches', 'stats', 'bar'],
    queryFn: launchesService.getStatsBar
  })

  return {
    data,
    keysWithoutYear: data?.keysWithoutYear,
    isFetching,
    isLoading
  }
}
