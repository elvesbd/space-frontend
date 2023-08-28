import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { Pagination } from "../Pagination";
import { useLaunchContext } from "../../../app/hooks/useRocketLaunches";

export function LaunchRegisters() {
  const { handleSearch, isLoading } = useLaunchContext();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-search items-start gap-4">
        <InputSearch onSearch={handleSearch} />

        <Button isLoading={isLoading}>Buscar</Button>
      </div>
        
      <div className="bg-gray-500 h-auto p-2 grid grid-cols-1 gap-10 text-center text-xs font-bold">
        <Pagination />
      </div> 
    </>
  )
}