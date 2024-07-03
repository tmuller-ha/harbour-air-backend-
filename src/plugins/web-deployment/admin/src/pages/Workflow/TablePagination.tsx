import { Box, Flex } from "@strapi/design-system";
import { PaginationURLQuery, PageSizeURLQuery } from "@strapi/helper-plugin";

export const PaginationFooter = ({ pagination }:{pagination:any}) => {
  return (
    <Box paddingTop={6}>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <PageSizeURLQuery />
        <PaginationURLQuery pagination={pagination} />
      </Flex>
    </Box>
  );
};

export default PaginationFooter;
