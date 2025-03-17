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
import { useEffect, useState } from 'react';

type QueryParamsType = {
  page: string;
  pageSize: string;
};

export const PaginationFooter = ({ pagination }: { pagination: any }) => {
  const [data, setQueryParams] = useQueryParams();
  const { query } = data;
  const { page: currentPage = '1' } = query as QueryParamsType;
  const pageNumber = parseInt(currentPage, 10);

  const { pageCount } = pagination;

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

  return (
    <Box paddingTop={6}>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Pagination activePage={pageNumber} pageCount={pageCount}>
          <PreviousLink page={pagination.page - 1} onClick={handlePrevious} textBefore="Previous" />
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
            <PageLink key={page} number={page} onClick={handleRoute} />
          ))}
          <NextLink page={pagination.page + 1} onClick={handleNext} textBefore="Next" />
        </Pagination>
      </Flex>
    </Box>
  );
};

export default PaginationFooter;
