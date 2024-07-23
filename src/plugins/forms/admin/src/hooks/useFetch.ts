import { request } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

interface UseFetchArgs {
  url: string;
  options?: RequestInit;
  pageSize: number;
  startingPage: number;
  queries: () => string;
  setTotalQueries: React.Dispatch<React.SetStateAction<number>>;
}
interface ReturnData {
  data: any;
  error: any;
  isLoading: boolean;
}
const useFetch = ({
  url,
  options = {
    method: "GET",
  },
  pageSize,
  startingPage,
  queries,
  setTotalQueries,
}: UseFetchArgs): ReturnData => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const query = queries();
        const response = await request(url + `?${query}`, options);
        setData(response.data);
        setTotalQueries(response.total);
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

export default useFetch;
