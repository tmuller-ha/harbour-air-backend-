import qs from "qs";
import {
  Layout,
  BaseHeaderLayout,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Typography,
  Flex,
} from "@strapi/design-system";
import { PageSizeURLQuery } from "@strapi/helper-plugin";
import { PaginationURLQuery } from "@strapi/helper-plugin";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryParams } from "@strapi/helper-plugin";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import useFetch from "../../hooks/useFetch";
import { NoContent } from "@strapi/helper-plugin";

const ContentTypePage = () => {
  const { contentType } = useParams<{ contentType: string }>();
  const [{ query }, setQuery] = useQueryParams();
  const { page = 1, pageSize = 10 } = query || {};
  useEffect(() => {
    setQuery({
      ...query,
      page: 1,
      pageSize: 10,
    });
  }, []);
  const paginationNumber = useMemo(() => page - 1, [page]);
  const startingPage = useMemo(
    () => pageSize * paginationNumber,
    [pageSize, paginationNumber]
  );
  const queries = useCallback(() => {
    const getQuery = () =>
      qs.stringify({
        start: startingPage,
        limit: pageSize,
      });
    return getQuery();
  }, [startingPage, pageSize]);

  const { data, error, isLoading } = useFetch({
    url: `/api/forms/${contentType}?${queries()}`,
    options: { method: "GET" },
  });

  const { paginatedData, totalDataCount } = data || {};
  const totalPageCount = useMemo(
    () => Math.ceil(totalDataCount / pageSize),
    [totalDataCount, pageSize]
  );
  const pagination = useMemo(
    () => ({
      page,
      pageCount: totalPageCount,
      pageSize,
      total: totalDataCount,
    }),
    [page, totalPageCount, totalDataCount, pageSize]
  );

  const camelCaseToReadable = (input: string): string => {
    if (typeof input === "string") {
      const words = input
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
        .replace(/([a-z\d])([A-Z])/g, "$1 $2")
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
        .split(/\s+/);
      return words
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }
    return input;
  };

  function kebabToReadable(kebab: string): string {
    return kebab
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <Layout>
      <BaseHeaderLayout
        title={`${kebabToReadable(contentType)}`}
        subtitle={`${totalDataCount} queries found`}
        as="h2"
      />
      {totalDataCount ? (
        <Box padding={8}>
          <Table>
            <Thead>
              <Tr>
                {paginatedData
                  ? Object.keys(paginatedData?.[0]).map(
                      (field: string, index: number) => {
                        return (
                          <Th key={index + 1}>
                            <Typography textColor="neutral600" variant="delta">
                              {camelCaseToReadable(field)}
                            </Typography>
                          </Th>
                        );
                      }
                    )
                  : null}
              </Tr>
            </Thead>
            <Tbody>
              {paginatedData?.map((content: any) => {
                return (
                  <Tr>
                    {Object.keys(content).map((field) => {
                      return <Td>{content[field]}</Td>;
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Flex alignItems="flex-end" justifyContent="space-between">
            <PageSizeURLQuery />
            <PaginationURLQuery pagination={pagination} />
          </Flex>
        </Box>
      ) : (
        <div style={{margin: '0 60px'}}><NoContent /></div>
      )}
    </Layout>
  );
};

export default ContentTypePage;
