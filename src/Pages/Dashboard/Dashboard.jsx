import React, { useEffect, useState } from "react";
import RecentReAssignments from "../RecentReAssignments/RecentReAssignments";
import TeamSummary from "../TeamSummary/TeamSummary";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Dashboard = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [total, setTotal] = useState({ projectLength: 0, taskLength: 0 });

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosSecure.get(`/total/${user.email}`);
        if (data?.success) {
          setTotal(data?.data);
        } else {
          console.log(data?.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [user, axiosSecure]);
  console.log(total);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div>
          <button className="action-btn bg-orange-500">Reassign Tasks</button>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="p-5 rounded-md border border-slate-100 shadow-sm flex items-center justify-center gap-2 flex-col w-[150px]">
          <h2 className="text-3xl font-bold">{total?.projectLength}</h2>
          <p className="font-semibold text-green-700">Total Projects</p>
        </div>
        <div className="p-5 rounded-md border border-slate-100 shadow-sm flex items-center justify-center gap-2 flex-col w-[150px]">
          <h2 className="text-3xl font-bold">{total?.taskLength}</h2>
          <p className="font-semibold text-orange-400">Total Tasks</p>
        </div>
      </div>
      <div>
        <RecentReAssignments />
      </div>
      <div className="mb-5 mt-10">
        <TeamSummary />
      </div>
    </div>
  );
};

export default Dashboard;
