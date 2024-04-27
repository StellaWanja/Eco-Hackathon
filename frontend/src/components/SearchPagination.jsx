import React, { useEffect } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const SearchPagination = ({
  currentPage,
  setCurrentPage,
  products,
  handleSearchPagination,
}) => {
  useEffect(() => {
    handleSearchPagination();
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <>
      <div className="pagination flex justify-center mt-10 pb-10">
        <div className="join">
          <button
            className="join-item btn text-4xl flex justify-center bg-[#40826D] border-none text-[#FEFDED] hover:bg-[#23473c] "
            onClick={() => {
              if (currentPage === 1) {
                return;
              }
              setCurrentPage((prevState) => prevState - 1);
            }}
          >
            <FaCircleArrowLeft />
          </button>
          <button className="join-item btn text-2xl bg-[#40826D] border-none text-[#FEFDED] hover:bg-[#23473c]">{currentPage}</button>
          <button
            className="join-item btn text-4xl flex justify-center bg-[#40826D] border-none text-[#FEFDED] hover:bg-[#23473c]"
            onClick={() => {
              if (products.length < 10) {
                return;
              }

              setCurrentPage((prevState) => prevState + 1);
            }}
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchPagination;
