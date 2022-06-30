import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { Components } from "./designs/Components";
import { DesignSystem } from "./designs/DesignSystem";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppInfoProvider } from "./contexts/AppContext";
const queryClient = new QueryClient();

const { worker } = require("./mocks/browser");
worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="design-system" element={<DesignSystem />} />
              <Route path="components" element={<Components />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppInfoProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
