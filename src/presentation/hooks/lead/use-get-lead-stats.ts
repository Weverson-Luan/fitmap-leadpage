/**
 * IMPORTS
 */
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { axiosClient } from "../../../data/http/axios-client";

// domain / errors
import { AppError } from "../../../domain/erros/app-error";

import { handleNormalizeApiError } from "../../../utils/normalize-error-api";
import { LeadStatsApiBody } from "../../../domain/lead/lead-stats.types";

// commons
import { HttpStatus } from "../../../common/constants/status-code";

/**
 * Hook
 */
function useGetLeadStats() {
  const query = useQuery<any, AppError>({
    queryKey: ["lead", "stats"],
    queryFn: async () => {
      const body = await axiosClient<LeadStatsApiBody>("/api/lead/stats");

      if (body.data == null) {
        throw new AppError(
          "Resposta inválida ao carregar estatísticas.",
          undefined,
        );
      }
      return body.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  useEffect(() => {
    if (!query.error) return;

    const err = query.error;
    const status = err instanceof AppError ? err.status : undefined;
    const payloadForNormalize =
      err instanceof AppError && err.details && typeof err.details === "object"
        ? err.details
        : { message: err.message };

    const messageNormalized = handleNormalizeApiError(payloadForNormalize);

    if (status === HttpStatus.UNPROCESSABLE_ENTITY) {
      toast.warning(messageNormalized);
    } else if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      toast.error(
        err instanceof AppError
          ? err.message
          : "Erro interno ao carregar estatísticas.",
      );
    } else {
      toast.error("Erro inesperado ao carregar estatísticas.");
    }
  }, [query.error]);

  return {
    leadStats: query.data,
    isLoadingLeadStats: query.isPending,
    isError: query.isError,
    error: query.error,
    refetchLeadStats: query.refetch,
  };
}

/**
 * EXPORTS
 */
export { useGetLeadStats };
