import {
  Box,
  Flex,
  Dots,
  NextLink,
  PageLink,
  Pagination,
  PreviousLink,
} from '@strapi/design-system';
import { useQueryParams } from '@strapi/strapi/admin';

type QueryParamsType = {
  page: string;
  pageSize: string;
};

const pageSize = 10;

export const PaginationFooter = ({ pagination }: { pagination: any }) => {
  const [data, setQueryParams] = useQueryParams();
  const { query } = data;
  const { page: currentPage = '1' } = query as QueryParamsType;
  const pageNumber = parseInt(currentPage, 10);

  const { total: pageCount } = pagination;
  const pageLength = Math.ceil(pageCount / pageSize);

  const handleRoute = (event: any) => {
    const newQuery = { ...query, page: String(event.target.textContent) };
    setQueryParams(newQuery);
  };

  const handleNext = () => {
    const newQuery = {
      ...query,
      page: String(pageNumber + 1),
    };
    setQueryParams(newQuery);
  };

  const handlePrevious = () => {
    const newQuery = {
      ...query,
      page: String(pageNumber - 1),
    };
    setQueryParams(newQuery);
  };

  const currPage = Number(currentPage);

  return (
    <Box paddingTop={6}>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Pagination activePage={pageNumber} pageCount={pageCount}>
          <PreviousLink page={pagination.page - 1} onClick={handlePrevious} textBefore="Previous" />
          {Array.from({ length: 2 }, (_, index) => index + 1).map((page: number) => (
            <PageLink key={page} number={page} onClick={handleRoute} />
          ))}
          {pageLength > 2 && <Dots />}
          {currPage > 2 && currPage != pageLength ? (
            <PageLink key={currPage} number={currPage} onClick={handleRoute} />
          ) : null}
          {pageLength > 2 && <PageLink number={pageLength} onClick={handleRoute} />}
          <NextLink page={pagination.page + 1} onClick={handleNext} textBefore="Next" />
        </Pagination>
      </Flex>
    </Box>
  );
};

export default PaginationFooter;
