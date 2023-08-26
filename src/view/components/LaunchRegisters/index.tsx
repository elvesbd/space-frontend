import { useEffect, useState } from "react";
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { LaunchesDetails } from "../LaunchesDetails";
import { Pagination } from "../Pagination";
import { Launch } from "../../../app/services/launches/get-all/interfaces";
import { launchesService } from "../../../app/services/launches";

export function LaunchRegisters() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [launches, setLaunches] = useState<Launch[]>([])

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        if (!searchTerm) {
          const { results } = await launchesService.getAll();
          setLaunches(results);
        } else {
          const { results } = await launchesService.getAll(searchTerm);
          setLaunches(results);
        }
      } catch (error) {
        console.error("Erro ao buscar lançamentos:", error);
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