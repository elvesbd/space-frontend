import youtubeImg from '../../../assets/youtube-logo.png'
import earthLogo from '../../../assets/earth.png'

export function Launch() {
  return (
    <>
      <div className="grid grid-cols-table bg-gray-400 items-center rounded-sm font-semibold md:grid-cols-table">
        <div>184</div>
        <div>
        <div>
          <img
            src={earthLogo}
            alt="Imagem do globo terrestre"
            className="w-4 inline-block"
          />
        </div>
        </div>
        <div className="-">
          Starlink 4-27 (v1.5)
        </div>
        <div className="-">
          05/10/2022
        </div>
        <div className="">
          Used Falcon 1
        </div>
        <div className="text-white flex justify-center font-bold p-1 uppercase -4">
        <div className="bg-green-600 p-1">
          Sucesso
        </div>
        </div>
        <div className="order-">
          <a href="#">
            <img src={youtubeImg} alt="Logo youtube" className='w-16 inline-block' />
          </a>
        </div>
      </div>
    </>
  )
}