import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function usePieStats() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['launches', 'stats', 'pie'],
    queryFn: launchesService.getStatsPie
  })

  return {
    launches: data,
    isFetching,
    isLoading
  }
}
