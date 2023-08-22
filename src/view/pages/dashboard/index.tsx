import { Header } from "../../components/Header"


export function Dashboard() {
  return (
    <div className="h-full w-full p-10 flex flex-col gap-4">
      <Header />
      
      <div className="bg-red-500">
        Dashboard
      </div>
    </div>
  )
}