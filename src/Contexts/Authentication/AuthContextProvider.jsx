import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const getUser = async () => {
      setUserLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/get-user`,
          { headers: { Authorization: `Bearer ${token}` } },
          { withCredentials: true }
        );
        if (data?.data?.email) {
          setUser(data?.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUserLoading(false);
      }
    };
    getUser();
  }, [token]);
  const authDetails = { user, setUser, userLoading };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
