import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: localStorage.getItem("user-info") ? true : false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={`/?redirect=${location.pathname}`} />
  );
};

export default ProtectedRoutes;
