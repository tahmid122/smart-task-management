import React from "react";

const TeamTable = ({ team = {} }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{team?.teamName}</h2>
      <div className="overflow-x-auto mt-5 rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th className="text-center">Role</th>
              <th className="text-center">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {team?.members &&
              team?.members?.length > 0 &&
              team?.members.map((member, index) => (
                <tr key={index}>
                  <td>{member?.name}</td>
                  <td className="text-center">{member?.role}</td>
                  <td className="text-center">{member?.capacity}</td>
                </tr>
              ))}
            {team?.members && team?.members?.length == 0 && (
              <tr>
                <td colSpan={12} className="text-center">
                  0 member on this team
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
