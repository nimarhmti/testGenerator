import React from "react";
import AppProvider from "./AppProvider";
import { Box, Container } from "@mui/material";
import { routes, routeModel } from "./config/routes";
import { Routes, Route } from "react-router-dom";
import "./style/globalStyle.css";
import { Navbar } from "./components/ui/Nav/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box marginTop="4rem">
        <Routes>
          {routes.map((item: routeModel, index: any) => (
            <Route path={item.path} element={item.components} key={index} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default AppProvider(App)();
