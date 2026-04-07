import React from "react"
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

// libs
import { client } from "./libs/tanstack/react-query.ts";


import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
);
