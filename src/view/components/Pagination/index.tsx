import { useState } from "react";
import ReactPaginate from 'react-paginate';
import { useLaunchContext } from "../../../app/hooks/useRocketLaunches";
import { LaunchesDetails } from "../LaunchesDetails";

interface EventProps {
  selected: number;
}

export function Pagination() {
  const { launchesResults, fetchLaunches } = useLaunchContext();
  const [, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const pageCount = launchesResults?.totalPages ?? 0;

  const handlePageClick = (event: EventProps) => {
    const selectedPage = event.selected + 1;
    const newOffset = (selectedPage - 1) * itemsPerPage;
    setItemOffset(newOffset);
    fetchLaunches(selectedPage);
  };

  return (
    <>
      {launchesResults && (
        <div>
          <LaunchesDetails
            launches={launchesResults.results}
          />
          <div className="mt-10 mb-5">
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
          </div>
        </div>
      )}
    </>
  );
}
