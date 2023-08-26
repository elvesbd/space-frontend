import { ChangeEvent, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '../../../app/hooks/useDebounce';


interface InputSearchProps {
  onSearch: (term: string) => void;
}

export function InputSearch({ onSearch }: InputSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm === searchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchTerm, onSearch]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex gap-2">
      <Search className="absolute mt-1.5 ml-3 stroke-orange-600" />
      <input
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleChange}
        className="bg-gray-500 w-full rounded-lg px-12 py-3.5 py h-[36px] text-white pt-4 transition-all outline-none placeholder:text-gray-400"  
      />
    </div>
  )
}