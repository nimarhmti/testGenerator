import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
interface props {
  component: JSX.Element;
}
const AppProvider = (Components: FunctionComponent<props>) => (props?: any) => {
  const WrapperComponents = () => (
    <BrowserRouter>
      <Components {...props} />
    </BrowserRouter>
  );
  return WrapperComponents;
};

export default AppProvider;
