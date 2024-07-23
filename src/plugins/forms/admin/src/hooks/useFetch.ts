import { request } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

interface UseFetchArgs {
  url: string;
  options?: RequestInit;
}
interface ReturnData {
  data: any;
  error: any;
  isLoading: boolean;
  totalDataCount: number;
}
const useFetch = ({
  url,
  options = {
    method: "GET",
  },
}: UseFetchArgs): ReturnData => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalDataCount, setTotalDataCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await request(url, options);
        console.log("response", response);
        setData(response.data);
        setTotalDataCount(response.total);
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
  }, [url]);
  return { data, error, isLoading, totalDataCount };
};

export default useFetch;
