import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Authentication/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
