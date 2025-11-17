import React from "react";
import RecentReAssignments from "../RecentReAssignments/RecentReAssignments";
import TeamSummary from "../TeamSummary/TeamSummary";

const Dashboard = () => {
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
          <h2 className="text-3xl font-bold">10</h2>
          <p className="font-semibold text-green-700">Total Projects</p>
        </div>
        <div className="p-5 rounded-md border border-slate-100 shadow-sm flex items-center justify-center gap-2 flex-col w-[150px]">
          <h2 className="text-3xl font-bold">10</h2>
          <p className="font-semibold text-orange-400">Total Tasks</p>
        </div>
      </div>
      <div>
        <RecentReAssignments />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-5 mt-10">Team Summary</h2>
        <TeamSummary />
      </div>
    </div>
  );
};

export default Dashboard;
