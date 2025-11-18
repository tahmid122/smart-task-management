import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTasks = () => {
  const [toggle, setToggle] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [staticAllTasks, setStaticAllTasks] = useState([]);
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosSecure.get(`/tasks/${user.email}`);
        if (data?.success) {
          setAllTasks(data?.data);
          setStaticAllTasks(data?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [user.email, axiosSecure, toggle]);
  return {
    allTasks,
    setAllTasks,
    setToggle,
    staticAllTasks,
    setStaticAllTasks,
  };
};

export default useTasks;
