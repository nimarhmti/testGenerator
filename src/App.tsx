import React from "react";
import AppProvider from "./AppProvider";
import { Box } from "@mui/material";
import { routes, routeModel } from "./config/routes";
import { Routes, Route } from "react-router-dom";
import "./style/globalStyle.css";

const App = () => {
  return (
    <Box>
      <Routes>
        {routes.map((item: routeModel, index: any) => (
          <Route path={item.path} element={item.components} key={index} />
        ))}
      </Routes>
    </Box>
  );
};

export default AppProvider(App)();
