import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  if (userLoading) return <LoadingSpinner />;
  if (user && user.email) return children;
  return <Navigate to={"/"} />;
};

export default ProtectedRoute;
