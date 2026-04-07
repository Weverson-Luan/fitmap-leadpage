/**
 * Dados públicos de estatísticas da landing (GET /api/lead/stats → data)
 */
export type LeadStats = {
  totalTrainers: number;
  totalStudents: number;
  totalCities: number;
};

/**
 * Corpo JSON da API (formatResponse + data)
 */
export type LeadStatsApiBody = {
  message: string;
  statusCode: number;
  data?: LeadStats;
};
