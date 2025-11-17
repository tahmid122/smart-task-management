import React from "react";

const TeamSummary = () => {
  return (
    <div>
      {" "}
      {/* main */}
      <div className="space-y-10">
        {/* single team */}
        <div>
          <h2 className="text-xl font-bold">Team Alpha</h2>
          <div className="overflow-x-auto mt-5 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="text-center">Current Task</th>
                  <th className="text-center">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td className="text-center">3</td>
                  <td className="text-center">5</td>
                </tr>
                <tr className="bg-red-500 font-bold text-white">
                  <td>Cy Ganderton</td>
                  <td className="text-center">7</td>
                  <td className="text-center">5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSummary;
