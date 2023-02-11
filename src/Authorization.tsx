import React, { useState } from "react";
import { Navigate } from "react-router-dom";
interface props {
  children: React.ReactNode;
}
export const Authorization = ({ children }: props) => {
  const [isAuthenticationset, setIsAuthentication] = useState<boolean>(false);

  if (!isAuthenticationset) return <Navigate to="/login" />;
  return <div>Authorization</div>;
};
