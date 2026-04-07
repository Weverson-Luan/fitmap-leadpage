/**
 * IMPORTS
 */
import { api } from "./axios-interceptors";

const axiosApi = api;

async function axiosClient<T>(
  url: string,
  options?: {
    method?: "get" | "post" | "put" | "patch" | "delete";
    data?: unknown;
    params?: unknown;
    headers?: Record<string, string>;
  },
): Promise<T> {
  const response = await axiosApi.request<T>({
    url,
    method: options?.method ?? "get",
    data: options?.data,
    params: options?.params,
    headers: options?.headers,
  });

  return response.data;
}

/**
 * EXPORTS
 */
export { axiosClient };
