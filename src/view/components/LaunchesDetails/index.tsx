import { useLaunchesDetails } from './useLaunchesDetails'
import youtubeImg from '../../../assets/youtube-logo.png'
import earthLogo from '../../../assets/earth.png'
import emptyStateImage from '../../../assets/empty-state.svg'
import { cn, formatDate } from '../../../app/utils'


export function LaunchesDetails() {
const { launches } = useLaunchesDetails()
const hasLaunches = launches.length > 0;

return (
   <div className="flex flex-col gap-2">
      <div className="grid-cols-table hidden md:grid">
        <div>N° Vôo</div>
        <div>Logo</div>
        <div>Missão</div>
        <div>Data de lançamento</div>
        <div>Foguete</div>
        <div>Resultado</div>
        <div>Vídeo</div>
      </div>

      {!hasLaunches && (
        <div className="flex flex-col items-center justify-center h-full mt-2">
          <img
            src={emptyStateImage}
            alt="Imagem de uma mulher com uma lupa informando que não foi encontrado nenhuma transação"
          />
          <p className="text-black">Não encontramos nenhum lançamento!</p>
        </div>
      )}

      {launches.map(launch => (
        <div key={launch.flightNumber} className="grid grid-cols-table p-0.5 bg-gray-400 items-center rounded-sm font-semibold md:grid-cols-table">
          <div className="grid-area">
            {launch.flightNumber}
          </div>

          <div>
            <div>
              <img
                src={earthLogo}
                alt="Imagem do globo terrestre"
                className="w-4 inline-block"
              />
            </div>
          </div>

          <div>{launch.missionName}</div>
          <div>{formatDate(launch.date)}</div>
          <div>{launch.rocketName}</div>

          <div className="text-white flex justify-center font-bold p-1 uppercase">
            <div className={cn(
              "w-[68px] p-1",
              launch.success === true ? "bg-green-600": "bg-red-800"
            )}>
              {launch.success === true ? "Sucesso": "Falha"}
            </div>
          </div>

          <div className="">
            <a href={launch.youtubeLink} target="_blank">
              <img src={youtubeImg} alt="Logo youtube" className='w-16 inline-block' />
            </a>
          </div>
        </div>
      ))}
   </div>
  )
}