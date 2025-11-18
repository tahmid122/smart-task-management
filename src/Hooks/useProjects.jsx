import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosSecure.get(`/projects/${user.email}`);
        setAllProjects(data?.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [user.email, axiosSecure]);
  return { allProjects };
};

export default useProjects;
