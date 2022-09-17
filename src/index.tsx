import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ChampionsTable from "./components/ChampionsTable";
import Comps from "./components/Comps";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ChampionsTable />} />
          <Route path="comps" element={<Comps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
