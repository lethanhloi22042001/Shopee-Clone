import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Blog from "./component/Blog/Blog";
import Detail from "./component/Detail";
import Err from "./component/404/Err";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Err />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<Detail />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
