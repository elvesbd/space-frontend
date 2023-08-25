import { useLaunches } from "../../../app/hooks/useLaunches";

export function useLaunchesDetails() {
  const { launches } = useLaunches();
  
  return {
    launches: launches ? launches.results: []
  }
}