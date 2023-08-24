import { BarChart } from "../../components/BarChart";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { Launch } from "../../components/Launch";
import { Launches } from "../../components/Launches";
import { Pagination } from "../../components/Pagination";
import { PieChart } from "../../components/PieChart";

export function DashBoard() {
  return (
    <div className="w-[500px] md:w-[880px] border border-red-800 p-3 md:p-2 grid grid-cols-1 gap-9 items-center justify-center m-auto">
      <div>
        <Header />
      </div>

      <div className="border border-green-800 p-2 grid grid-cols-1 gap-4 h-[600px] md:grid-cols-2 md:h-[300px] ">
        <div className="border bg-gray-500 grid grid-cols-1 justify-center relative] ">
          <span className="font-bold text-center">Lançamentos dos foguetes</span>
          <PieChart />

          <div className="w-[133px] absolute sm:absolute top-[270px] ml-9 mt-2 text-[14px] text-gra md:top-[270px] md:ml-2.5 md:mt-2">{/* não mexer mais */}
            <h6 className="font-bold text-[14px]">Resultado de lançamentos:</h6>
            <div className="flex gap-1 items-center mt-1">
              <span >Sucesso:</span>
              <span className="text-green-500 font-bold">70</span>
            </div>
            <div className="flex gap-1">
              <span>Falha:</span>
              <span className="text-red-900 font-bold">30</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-500 flex flex-col items-center">
          <span className="font-bold">Lançamentos por ano</span>
          <BarChart />
        </div>
      </div>

      <div className="flex justify-center mt-2 md:mt-10">
        <h1 className="text-white font-bold">Registros de lançamentos</h1>
      </div>
      
      <div className="border border-orange-800 p-2 grid grid-cols-1 md:grid-cols-search gap-4">
        <InputSearch />
        <Button>
          Buscar
        </Button>
      </div>
      
      <div className="border border-cyan-800 bg-gray-500 h-auto p-2 grid grid-cols-1 gap-4 text-center text-xs font-bold">
        <Launches />
        <Launch />
       
        <nav className="flex items-center justify-end py-4 bg-gray-500">
          <div className="flex mt-1">
            <Pagination />
          </div>
        </nav>
      </div>
      
      <div className="flex items-center justify-center">
        <footer className="text-white my-2 text-xs">
          Challenge Codesh ®
        </footer>
      </div>
    </div>
  )
}