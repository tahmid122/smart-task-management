import React from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const authDetails = { name: "Tahmid" };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
