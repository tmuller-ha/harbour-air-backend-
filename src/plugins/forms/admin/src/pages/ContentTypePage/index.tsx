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
import { request } from "@strapi/helper-plugin";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryParams } from "@strapi/helper-plugin";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

const ContentTypePage = () => {
  const { contentType } = useParams<{ contentType: string }>();
  const [{ query }, setQuery] = useQueryParams();
  const [totalQueries, setTotalQueries] = useState(0);
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
  const totalPageCount = useMemo(
    () => Math.ceil(totalQueries / pageSize),
    [totalQueries, pageSize]
  );
  const queries = useCallback(() => {
    const getQuery = () =>
      qs.stringify({
        start: startingPage,
        limit: pageSize,
      });
    return getQuery();
  }, [startingPage, pageSize]);

  const pagination = useMemo(
    () => ({
      page,
      pageCount: totalPageCount,
      pageSize,
      total: totalQueries,
    }),
    [page, totalPageCount, totalQueries, pageSize]
  );

  interface UseFetchHookArgs {
    url: string;
    options?: RequestInit;
  }
  interface ReturnData {
    data: any,
    error: any,
    isLoading: boolean
  }
  function useFetchHook({
    url,
    options = {
      method: "GET",
    },
  }: UseFetchHookArgs): ReturnData {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const query = queries();
          const response = await request(url+`?${query}`, options);
          setData(response.data);
          setTotalQueries(response.total)
        } catch (error: any) {
          if (typeof error === "string") {
            setError(error);
          } else {
            setError(error?.message as string);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [url, pageSize, startingPage]);
    return { data, error, isLoading };
  }
  const { data, error, isLoading } = useFetchHook({ url: `/api/forms/${contentType}`, options: { method: "GET" } });
  
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
  if(isLoading)  return <LoadingIndicatorPage/>
  return (
    <Layout>
      <BaseHeaderLayout
        title={`${kebabToReadable(contentType)}`}
        subtitle={`${totalQueries} queries found`}
        as="h2"
      />
      <Box padding={8}>
        <Table>
          <Thead>
            <Tr>
              {data
                ? Object.keys(data?.[0]).map(
                    (field: string, index: number) => {
                      return (
                        <Th key={index}>
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
            {data?.map((content: any) => {
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
    </Layout>
  );
};

export default ContentTypePage;
