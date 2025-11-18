import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTeams = () => {
  const [allTeams, setAllTeams] = useState([]);
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosSecure.get(`/teams/${user.email}`);
        setAllTeams(data?.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [user.email, axiosSecure]);
  return { allTeams };
};

export default useTeams;
