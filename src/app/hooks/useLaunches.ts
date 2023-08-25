import { useQuery } from "@tanstack/react-query";
import { launchesService } from "../services/launches";

export function useLaunches() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['launches'],
    queryFn: launchesService.getAll
  })

  return {
    launches: data,
    isFetching,
    isLoading
  }
}
