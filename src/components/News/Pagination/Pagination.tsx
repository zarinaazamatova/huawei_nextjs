import { StyledPaginationContainer } from './Pagination.styles';

type PaginationProps = {
  pageCount: number;
  onPageChange: any;
  selectedPage: number;
};

export const Pagination = ({ pageCount, onPageChange, selectedPage }: PaginationProps) => {
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
