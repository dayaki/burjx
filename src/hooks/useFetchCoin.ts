import { useQuery } from "@tanstack/react-query";
import { OHLCApiResponse, queryKeys, TimeRange } from "../types";
import { getApiTimeRange } from "../utils";
import api from "./api";

export type OHLCResponse = {
  data: OHLCApiResponse[];
  success: boolean;
};

export const fetchCoinOHLC = async (
  coinId: number,
  days: string
): Promise<OHLCResponse> => {
  try {
    const response = await api.get("/coin-ohlc", {
      params: {
        productId: coinId,
        days,
      },
    });
    const data = response.data;

    if (!data) {
      throw new Error("Empty API response");
    }

    if (Array.isArray(data)) {
      return { data, success: true };
    }

    // If data has a data property that's an array, use it
    if (data.data && Array.isArray(data.data)) {
      return data;
    }
    throw new Error("Could not find OHLC data in API response");
  } catch (error) {
    throw error;
  }
};

export const useFetchCoin = (coinId: number, timeRange: TimeRange) => {
  return useQuery({
    queryKey: queryKeys.coinOHLC(coinId, getApiTimeRange(timeRange)),
    queryFn: () => fetchCoinOHLC(coinId, getApiTimeRange(timeRange)),
    retry: 2,
    retryDelay: 1000,
  });
};
