import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Search } from "./Pages/Search";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
