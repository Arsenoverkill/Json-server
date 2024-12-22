import Home from "../pages/Home";
import Admin from "../pages/Admin";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC = [{ path: "/", element: <Home />, key: 1 }];
  const PRIVATE = [{ path: "/admin", element: <Admin />, key: 2 }];
  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => {
          return <Route path={el.path} element={el.element} key={el.key} />;
        })}
        {PRIVATE.map((el) => {
          return <Route path={el.path} element={el.element} key={el.key} />;
        })}
      </Routes>
    </div>
  );
};

export default MainRoutes;
