import React from 'react';
import { StyledPaginationContainer } from './Pagination.styles';

type PaginationProps = {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  selectedPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  selectedPage,
}) => {
  return (
    <div>
      <StyledPaginationContainer
        previousLabel="Назад"
        nextLabel="Вперед"
        pageCount={pageCount}
        onPageChange={onPageChange}
        forcePage={selectedPage}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};
