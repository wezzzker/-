import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
const Pagination = ({ currentPage, count, onPageChange }) => {
  const pageCount = Math.ceil(count.count / 5);
  const handlePrevPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  return (
    <div className="w-full flex items-center   border-[1px] border-[#BBC0C8] border-t-0  rounded--b-md  bg-[#F7F9F7]">
      <div className=" flex gap-10 justify-end mx-auto  items-center  p-2 ">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className="rounded-lg  cursor-pointer  hover:bg-white hover:bg-sky-800/40  hover:text-zinc-800 hover:scale-110 transition-all ease-linear duration-[250ms]"
        >
          <BsFillCaretLeftFill size={25} />
        </button>

        <span>
          {currentPage} из {pageCount}
        </span>
        <button
          disabled={currentPage === pageCount}
          onClick={handleNextPage}
          className="rounded-lg  cursor-pointer  hover:bg-white hover:bg-sky-800/40  hover:text-zinc-800 hover:scale-110 transition-all ease-linear duration-[250ms]"
        >
          <BsFillCaretRightFill size={25} />
        </button>
      </div>
      <span className="float-right pr-3">Всего:{count.count}</span>
    </div>
  );
};

export default Pagination;
