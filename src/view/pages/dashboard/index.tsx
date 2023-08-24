import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";
import { BarChart } from "../../components/BarChart";
import { Launches } from "../../components/Launches";
import { Pagination } from "../../components/Pagination";
import { ResultLaunches } from "../../components/ResultLaunches";
import { SearchLaunches } from "../../components/SearchLaunches";


export function DashBoard() {
  return (
    <div className="w-[500px] md:w-[880px] p-3 md:p-2 grid grid-cols-1 gap-9 items-center justify-center m-auto">
      <div>
        <Header />
      </div>

      <div className="p-2 grid grid-cols-1 gap-8 md:gap-12 h-[600px] md:grid-cols-2 md:h-[300px] ">
        <div className="bg-gray-500 grid grid-cols-1 justify-center relative] ">
          <span className="font-bold text-center">Lançamentos de foguetes</span>
          <PieChart />

          <div className="w-[133px] absolute sm:absolute top-[270px] ml-9 mt-2 text-[14px] text-gra md:top-[270px] md:ml-3 md:mt-2">
            <ResultLaunches />
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
      
      <div className="grid grid-cols-1 md:grid-cols-search gap-4">
        <SearchLaunches />
      </div>
      
      <div className="bg-gray-500 h-auto p-2 grid grid-cols-1 gap-4 text-center text-xs font-bold">
        <Launches />
       
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