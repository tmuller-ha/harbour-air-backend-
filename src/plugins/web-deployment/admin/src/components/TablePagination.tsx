import { Box, Flex } from '@strapi/design-system';
import { Pagination } from '@strapi/strapi/admin';

export const PaginationFooter = ({ pagination }: { pagination: any }) => {
  return (
    <Box paddingTop={6}>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Pagination.PageSize />
        <Pagination.Links />
      </Flex>
    </Box>
  );
};

export default PaginationFooter;
