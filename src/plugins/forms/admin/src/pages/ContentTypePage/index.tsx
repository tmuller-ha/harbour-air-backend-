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
import { CarretDown } from "@strapi/icons";
import { CarretUp } from "@strapi/icons";
import { camelCaseToReadable, kebabToReadable } from "../../utils";

const ContentTypePage = () => {
  const { contentType } = useParams<{ contentType: string }>();
  const [sorting, setSorting] = useState<{ [propKey: string]: "asc" | "desc" }>(
    { createdAt: "desc" }
  );
  const [{ query }, setQuery] = useQueryParams();
  const { page = 1, pageSize = 10 } = query || {};
  const sortBy = Object.keys(sorting)[0];
  const sortOrder = Object.values(sorting)[0];

  useEffect(() => {
    setQuery({
      ...query,
      page: page,
      pageSize: pageSize,
      sort: `${sortBy}:${sortOrder.toUpperCase()}`
    });
  }, [sortBy, sortOrder, ]);
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
        sortBy: sortBy,
        sortOrder: sortOrder,
      });
    return getQuery();
  }, [startingPage, pageSize, sortBy, sortOrder]);

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

  const selectSortBy = (value: string) => {
    setSorting?.({ [value]: "desc" });
  };
  const selectSortOrder = () => {
    sorting && Object.values(sorting)[0] === "asc"
      ? setSorting?.({ [sortBy]: "desc" })
      : setSorting?.({ [sortBy]: "asc" });
  };

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
                          <Th key={index + 1} style={{ paddingRight: "35px" }}>
                            <Flex gap={2}>
                              <Typography variant="sigma" textColor="neutral600"
                                onClick={() => selectSortBy(field)}
                                style={{ cursor: "pointer" }}
                              >
                                {camelCaseToReadable(field)}
                              </Typography>
                              {sorting && Object.keys(sorting)[0] === field ? (
                                Object.values(sorting)[0] === "asc" ? (
                                  <CarretUp
                                    onClick={selectSortOrder}
                                    style={{
                                      height: "8px",
                                      width: "8px",
                                      cursor: "pointer",
                                    }}
                                  />
                                ) : (
                                  <CarretDown
                                    onClick={selectSortOrder}
                                    style={{
                                      height: "8px",
                                      width: "8px",
                                      cursor: "pointer",
                                    }}
                                  />
                                )
                              ) : null}
                            </Flex>
                          </Th>
                        );
                      }
                    )
                  : null}
              </Tr>
            </Thead>
            <Tbody>
              {paginatedData?.map((content: any, index: number) => {
                return (
                  <Tr key={index + 1}>
                    {Object.keys(content).map((field) => {
                      return (
                        <Td style={{ fontSize: "0.875rem" }}>
                          <Typography textColor="neutral1000">
                            {content[field]}
                          </Typography>
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Flex alignItems="flex-end" padding={5} justifyContent="space-between">
            <PageSizeURLQuery />
            <PaginationURLQuery pagination={pagination} />
          </Flex>
        </Box>
      ) : (
        <div style={{ margin: "0 60px" }}>
          <NoContent />
        </div>
      )}
    </Layout>
  );
};

export default ContentTypePage;
