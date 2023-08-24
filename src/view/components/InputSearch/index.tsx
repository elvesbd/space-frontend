import { Search } from 'lucide-react';


export function InputSearch() {
  return (
    <div className="flex gap-2">
      <Search className="absolute mt-1.5 ml-3 stroke-orange-600" />
      <input
        type="text"
        placeholder="Search here"
        className="bg-gray-500 w-full rounded-lg px-12 py-3.5 py h-[36px] text-white pt-4 transition-all outline-none placeholder:text-gray-400"  
      />
    </div>
  )
}