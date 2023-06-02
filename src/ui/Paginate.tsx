import React from 'react';

import { Pagination } from '@/models/api.model';

interface PaginationProps {
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

const Paginate: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { last_visible_page, has_next_page, current_page } = pagination;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= last_visible_page; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`h-8 w-8 flex  duration-300 transition-colors ease-in-out items-center justify-center rounded-md border-2 cursor-pointer ${
            i === current_page
              ? 'bg-red-500 text-white border-red-500'
              : 'border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500'
          }`}
        >
          <button className="h-full w-full" onClick={() => onPageChange(i)}>
            {i}
          </button>
        </li>,
      );
    }
    return pageNumbers;
  };

  const handlePreviousPage = () => {
    if (current_page > 1) {
      onPageChange(current_page - 1);
    }
  };

  const handleNextPage = () => {
    if (has_next_page) {
      onPageChange(current_page + 1);
    }
  };

  return (
    <div>
      <ul className="flex items-center justify-center gap-1">
        <li>
          <button
            className={`h-8 w-8 flex items-center justify-center rounded-md border-2  ${
              current_page === 1
                ? 'bg-gray-200 border-gray-200 cursor-not-allowed'
                : 'cursor-pointer hover:bg-red-500 hover:text-white duration-300 transition-colors ease-in-out hover:border-red-500'
            }`}
            onClick={handlePreviousPage}
            disabled={current_page === 1}
          >
            {'<'}
          </button>
        </li>
        <div className="flex gap-1">{renderPageNumbers()}</div>
        <li>
          <button
            className={`h-8 w-8 flex items-center justify-center rounded-md border-2 ${
              !has_next_page
                ? 'bg-gray-200 border-gray-200 cursor-not-allowed'
                : 'cursor-pointer hover:bg-red-500 hover:text-white duration-300 transition-colors ease-in-out hover:border-red-500'
            }`}
            onClick={handleNextPage}
            disabled={!has_next_page}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
