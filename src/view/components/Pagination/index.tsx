import { useState } from "react";
import ReactPaginate from 'react-paginate';


interface EventProps {
  selected: number;
}

export function Pagination() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: EventProps) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel={null}
        containerClassName="flex justify-end items-center gap-3 list-none text-xs"
        pageLinkClassName="px-4 py-2 pointer rounded-md font-bold bg-orange-600 hover:bg-orange-700 transition-all"
        previousLinkClassName=""
        nextLinkClassName=""
        className=""
      />
    </>
  );
}