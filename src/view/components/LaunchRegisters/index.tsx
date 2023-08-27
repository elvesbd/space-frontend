import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { LaunchesDetails } from "../LaunchesDetails";
import { Pagination } from "../Pagination";
import { Launch, Launches } from "../../../app/services/launches/fetch-all-rocket-launches/interfaces";
import { launchesService } from "../../../app/services/launches";

export function LaunchRegisters() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [launches, setLaunches] = useState<Launch[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setIsLoading(true);
        let response: Launches;
        if (!searchTerm) {
          response = await launchesService.fetchAllRocketLaunches();
        } else {
          response = await launchesService.fetchAllRocketLaunches(searchTerm);
        }

        setLaunches(response.results)
      } catch (error) {
        toast.error("Nenhum lançamento de foguete encontrado!")
      } finally {
        setIsLoading(false)
      }
    };

    fetchLaunches();
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-search items-start gap-4">
        <InputSearch onSearch={handleSearch} />

        <Button isLoading={isLoading}>Buscar</Button>
      </div>
        
      <div className="bg-gray-500 h-auto p-2 grid grid-cols-1 gap-4 text-center text-xs font-bold">
        <LaunchesDetails
          launches={launches}
        />
      
        <nav className="flex items-center justify-end py-4 bg-gray-500">
          <div className="flex mt-1">
            <Pagination />
          </div>
        </nav>
      </div> 
    </>
  )
}