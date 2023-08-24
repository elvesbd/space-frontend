import { Launch } from "../Launch";

export function Launches() {
  return (
   <div className="flex flex-col gap-2">
      <div className="grid-cols-table hidden md:grid">
        <div className="">N° Vôo</div>
        <div className="">Logo</div>
        <div className="">Missão</div>
        <div className="">Data de lançamento</div>
        <div className="">Foguete</div>
        <div className="">Resultado</div>
        <div className="">Vídeo</div>
      </div>
      <Launch />
   </div>
  )
}