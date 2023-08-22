import logoImg from '../../../assets/logo.png';


export function Header() {
  return (
    <header className="flex items-center justify-center gap-2 text-white text-4xl font-bold">
      <img
        src={logoImg}
        alt="Imagem de um foguete"
        className="w-12 h-12"  
      />
      <span>Space X</span>
    </header>
  )
}