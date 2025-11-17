import React, { useState } from "react";

const Teams = () => {
  const [showCreateTeam, setCreateTeam] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  return (
    <div>
      {/* top */}
      <div className="flex items-center flex-col gap-3 lg:flex-row justify-between border-b border-b-slate-200 pb-4 mb-10">
        <h2 className="text-2xl font-semibold">All Teams</h2>
        <div className="flex items-center gap-3">
          <div>
            <button
              onClick={() => {
                setCreateTeam(!showCreateTeam);
                setShowAddMember(false);
              }}
              className="action-btn"
            >
              Create Team
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setCreateTeam(false);
                setShowAddMember(!showAddMember);
              }}
              className="action-btn"
            >
              Add Member
            </button>
          </div>
        </div>
      </div>
      {/* modal for create team*/}
      {showCreateTeam && (
        <div className="flex items-center justify-center">
          <form className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2">
            <h3 className="text-center text-xl font-semibold">Create Team</h3>
            <div>
              <label htmlFor="teamName" className="font-semibold">
                Team Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="teamName"
                  required
                  placeholder="Enter team name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-2">
              <button className="action-btn">Create Team</button>
            </div>
          </form>
        </div>
      )}
      {/* modal for add member*/}
      {showAddMember && (
        <div className="flex items-center justify-center">
          <form className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2">
            <h3 className="text-center text-xl font-semibold">Add Member</h3>
            <div>
              <label htmlFor="memberName" className="font-semibold">
                Member Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="memberName"
                  required
                  placeholder="Enter member name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="memberRole" className="font-semibold">
                Member Role
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="memberRole"
                  required
                  placeholder="Enter member role"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="memberCapacity" className="font-semibold">
                Member Capacity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="memberCapacity"
                  required
                  placeholder="Enter member capacity"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="memberTeam" className="font-semibold">
                Member Team
              </label>
              <div className="mt-2">
                <select
                  name="memberTeam"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" className="hidden">
                    --Select Team--
                  </option>
                  <option value="alpha">Alpha Team</option>
                  <option value="beta">Beta Team</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <button className="action-btn">Add Member</button>
            </div>
          </form>
        </div>
      )}

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
                  <th>Role</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* single team */}
        <div>
          <h2 className="text-xl font-bold">Team Alpha</h2>
          <div className="overflow-x-auto mt-5 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Cy Ganderton</td>
                  <td>User</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
