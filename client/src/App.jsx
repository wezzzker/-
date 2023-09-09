import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="data" element={<DataPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
