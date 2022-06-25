import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { Components } from "./designs/Components";
import { DesignSystem } from "./designs/DesignSystem";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="design-system" element={<DesignSystem />} />
          <Route path="components" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
