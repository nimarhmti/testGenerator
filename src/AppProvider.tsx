import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/muiConfig";
interface props {
  component: JSX.Element;
}
const AppProvider = (Components: FunctionComponent<props>) => (props?: any) => {
  const WrapperComponents = () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Components {...props} />
      </BrowserRouter>
    </ThemeProvider>
  );
  return WrapperComponents;
};

export default AppProvider;
