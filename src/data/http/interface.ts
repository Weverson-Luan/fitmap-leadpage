export interface NormalizedHttpError {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}
