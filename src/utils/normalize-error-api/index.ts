/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * IMPORTS
 */
function handleNormalizeApiError(data: any): string {
  if (!data) return "Ocorreu um erro inesperado.";

  // Laravel padrão: errors: { campo: [mensagem] }
  if (data.errors && typeof data.errors === "object") {
    const firstKey = Object.keys(data.errors)[0];
    const firstError = data.errors[firstKey];

    if (Array.isArray(firstError) && firstError.length > 0) {
      return firstError[0];
    }

    if (typeof firstError === "string") {
      return firstError;
    }
  }

  // errors.message
  if (data.errors?.message) {
    return data.errors.message;
  }

  //  message direto
  if (data.message) {
    return data.message;
  }

  return "Ocorreu um erro inesperado.";
}

/**
 * EXPORTS
 */
export { handleNormalizeApiError };
