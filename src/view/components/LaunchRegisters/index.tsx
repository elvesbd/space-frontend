import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { LaunchesDetails } from "../LaunchesDetails";
import { Pagination } from "../Pagination";
import { Launch } from "../../../app/services/launches/fetch-all-rocket-launches/interfaces";
import { launchesService } from "../../../app/services/launches";

export function LaunchRegisters() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [launches, setLaunches] = useState<Launch[]>([])

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        if (!searchTerm) {
          const { results } = await launchesService.fetchAllRocketLaunches();
          setLaunches(results);
        } else {
          const { results } = await launchesService.fetchAllRocketLaunches(searchTerm);
          setLaunches(results);
        }
      } catch (error) {
        toast.error("Nenhum lançamento de foguete encontrado!")
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

        <Button>Buscar</Button>
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