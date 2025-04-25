import { useInfiniteQuery } from "@tanstack/react-query";
import api from "./api";
import { Coin, queryKeys } from "../types";

export type CoinsResponse = {
  data: Coin[];
  page: number;
  pageSize: number;
  totalPages: number;
  total: number;
};

// Fetch all coins with pagination
const fetchCoins = async (
  page: number,
  pageSize: number
): Promise<CoinsResponse> => {
  try {
    const response = await api.get("/coin-prices-all", {
      params: {
        currency: "usd",
        page,
        pageSize,
      },
    });

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error("Unexpected API response format");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useFetchCoins = () => {
  const pageSize = 10;

  return useInfiniteQuery({
    queryKey: [queryKeys.coins],
    queryFn: ({ pageParam = 1 }) => fetchCoins(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
