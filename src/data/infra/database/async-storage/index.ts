const TokenStorage = {
  getAccessToken: async (): Promise<string | null> => {
    return localStorage.getItem("access_token");
  },

  getRefreshToken: async (): Promise<string | null> => {
    return localStorage.getItem("refresh_token");
  },

  setTokens: async (access: string | null, refresh: string | null) => {
    if (access) {
      localStorage.setItem("access_token", access);
    } else {
      localStorage.removeItem("access_token");
    }

    if (refresh) {
      localStorage.setItem("refresh_token", refresh);
    } else {
      localStorage.removeItem("refresh_token");
    }
  },

  clear: async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },
};

export { TokenStorage };
