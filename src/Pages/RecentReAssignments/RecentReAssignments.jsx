import React from "react";
import TaskCard from "../Tasks/TaskCard";
import RecentCard from "./RecentCard";

const RecentReAssignments = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Recent Re-Assignments Tasks (0)
      </h2>
      {/* all tasks */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <RecentCard />
        <RecentCard />
        <RecentCard />
        <RecentCard />
        <RecentCard />
      </div> */}
    </div>
  );
};

export default RecentReAssignments;
