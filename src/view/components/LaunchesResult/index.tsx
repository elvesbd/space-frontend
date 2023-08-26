import { usePieStats } from "../../../app/hooks/usePieStats";

export function LaunchesResult() {
  const { launches } = usePieStats();

  return (
   <>
     <h6 className="font-bold text-[14px]">Resultado de lançamentos:</h6>
      <div className="flex gap-1 items-center mt-1">
        <span >Sucesso:</span>
        <span className="text-green-500 font-bold">{launches?.successRocketLaunches}</span>
      </div>
      <div className="flex gap-1">
        <span>Falha:</span>
        <span className="text-red-900 font-bold">{launches?.failureRocketLaunches}</span>
      </div>
   </>
  )
}