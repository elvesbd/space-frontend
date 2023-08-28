import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { Launch, Launches } from '../services/launches/fetch-all-rocket-launches/interfaces';
import { launchesService } from '../services/launches';
import toast from 'react-hot-toast';

export interface LaunchContextValue {
  rocketLaunches: Launch[];
  launchPagination: Launches | null;
  isLoading: boolean;
  fetchLaunches: (page: number) => void;
  setRocketLaunches: (launches: Launch[]) => void;
  setLaunchPagination: (launchesResults: Launches | null) => void;
  handleSearch: (term: string) => void;
}

export const LaunchContext = createContext({} as LaunchContextValue);

export function LaunchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [rocketLaunches, setRocketLaunches] = useState<Launch[]>([])
  const [launchPagination, setLaunchPagination] = useState<Launches | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const fetchLaunches = useCallback(async (page: number) => {
    try {
      setIsLoading(true);
      let response: Launches;
      if (!searchTerm) {
        response = await launchesService.fetchAllRocketLaunches(undefined, page);
      } else {
        response = await launchesService.fetchAllRocketLaunches(searchTerm, page);
      }

      setRocketLaunches(response.results)
      setLaunchPagination(response)
    } catch (error) {
      toast.error("Nenhum lançamento de foguete encontrado!")
    } finally {
      setIsLoading(false)
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchLaunches(1);
  }, [searchTerm, fetchLaunches]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const contextValue = {
    rocketLaunches,
    launchPagination,
    isLoading,
    fetchLaunches,
    setRocketLaunches,
    setLaunchPagination,
    handleSearch,
  };

  return (
    <LaunchContext.Provider value={contextValue}>
      {children}
    </LaunchContext.Provider>
  );
}
