/**
 * IMPORTS
 */

import axios from "axios";

// infra
import { TokenStorage } from "../infra/database/async-storage";

// domain / errors
import { AppError } from "../../domain/erros/app-error";

// typings
import { NormalizedHttpError } from "./interface";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 15000,
});

/**
 * REQUEST INTERCEPTOR
 * → adiciona token automaticamente
 */
api.interceptors.request.use(async (config) => {
  const token = await TokenStorage.getAccessToken();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * RESPONSE INTERCEPTOR
 * → trata erros básicos
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || "Erro inesperado";

    // 401 → limpa sessão
    if (status === 401) {
      TokenStorage.clear();
    }

    throw new AppError(message, status);
  },
);

/**
 * NORMALIZADOR (opcional)
 */
export const normalizeError = (err: unknown): NormalizedHttpError => {
  if (axios.isAxiosError(err)) {
    return {
      status: err.response?.status,
      message: err.response?.data?.message || err.message,
      code: err.code,
    };
  }

  return { message: "Erro desconhecido!" };
};

/**
 * EXPORTS
 */
export { api };
