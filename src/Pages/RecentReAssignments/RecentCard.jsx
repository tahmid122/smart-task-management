import React from "react";

const RecentCard = () => {
  return (
    <div>
      <div>
        <div className="shadow-sm border border-slate-300 p-3 rounded-md">
          <span className="text-right text-xs font-semibold">
            10:10 AM 11/11/2025
          </span>
          <h2 className="text-xl font-semibold">UI/UX creation</h2>
          <p className="text-sm mt-2 text-justify">
            This is task description. This is task description. This is task
            description. This is task description. This is task description
          </p>
          <p className="mt-3 font-semibold">
            <span className="text-green-600 font-bold">Assign To:</span> Tahmid
            Alam
          </p>
          {/* <p className=" font-semibold">
            <span className="text-green-600 font-bold">Status:</span> Pending
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
