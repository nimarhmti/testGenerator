import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/muiConfig";
import { QueryClient, QueryClientProvider } from "react-query";
interface props {
  component: JSX.Element;
}
// react quey provider
const queryClient = new QueryClient();
// provider wrapper function
const AppProvider = (Components: FunctionComponent<props>) => (props?: any) => {
  const WrapperComponents = () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Components {...props} />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
  return WrapperComponents;
};

export default AppProvider;
