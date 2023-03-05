import React, { useState } from "react";
import { Navigate } from "react-router-dom";
interface props {
  children: React.ReactNode;
}
export const Authorization = ({ children }: props) => {
  const [isAuthentication, setIsAuthentication] = useState<boolean>(false);

  if (!isAuthentication) return <Navigate to="/login" />;
  return <div>Authorization</div>;
};
