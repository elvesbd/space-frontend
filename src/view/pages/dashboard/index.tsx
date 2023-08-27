import { Header } from "../../components/Header";
import { LaunchPieChart } from "../../components/LaunchPieChart";
import { LaunchBarChart } from "../../components/LaunchBarChart";
import { LaunchesResult } from "../../components/LaunchesResult";
import { LaunchRegisters } from "../../components/LaunchRegisters";


export function DashBoard() {
  return (
    <div className="w-[500px] md:w-[880px] p-3 md:p-2 grid grid-cols-1 gap-9 items-center justify-center m-auto">
      <div>
        <Header />
      </div>

      <div className="p-2 grid grid-cols-1 gap-8 md:gap-12 h-[600px] md:grid-cols-2 md:h-[300px] ">
        <div className="bg-gray-500 grid grid-cols-1 justify-center relative] ">
          <span className="font-bold text-center">Lançamentos de foguetes</span>
          <LaunchPieChart />

          <div className="w-[133px] absolute sm:absolute top-[270px] ml-9 mt-2 text-[14px] text-gra md:top-[270px] md:ml-2.5 md:mt-2">
            <LaunchesResult />
          </div>
        </div>

        <div className="bg-gray-500 flex flex-col items-center">
          <span className="font-bold">Lançamentos por ano</span>
          <LaunchBarChart />
        </div>
      </div>

      <div className="flex justify-center mt-2 md:mt-10">
        <h1 className="text-white font-bold">Registros de lançamentos</h1>
      </div>
      
      <div className="grid md:grid-cols-1 gap-10">
        <LaunchRegisters />
      </div>
      
      <div className="flex items-center justify-center">
        <footer className="text-white my-2 text-xs">
          Challenge Codesh ®
        </footer>
      </div>
    </div>
  )
}