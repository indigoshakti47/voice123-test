import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { calcPagination } from "../utils/calcPagination";

const PaginationItem = ({ children, roundLeft, roundRight, onClick, disabled, active }) => (
  <button
	disabled={disabled}
    onClick={onClick}
    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${roundLeft ? "rounded-l-md" : ""} ${roundRight ? "rounded-r-md" : ""} ${ active ? "text-red-600": "" }
    `}
  >
    {children}
  </button>
);

export default function Pagination({ currentPage, totalPages, onClickPage }) {
  const pages = calcPagination(currentPage, totalPages);
  const handlePageChange = (page) => {
		if (page === currentPage || page < 1 || page > totalPages) {
			return;
		}
		onClickPage(page);
	};

  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px w-full justify-center my-7 h-12"
      aria-label="Pagination"
    >
      <PaginationItem
        roundLeft
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaChevronLeft /> Previous
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          onClick={() => handlePageChange(page)}
          active={page === currentPage}
        >
          {page}
        </PaginationItem>
      ))}
      <PaginationItem
        roundRight
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next <FaChevronRight />
      </PaginationItem>
    </nav>
  );
}
