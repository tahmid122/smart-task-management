import React, { useState } from "react";

const Projects = () => {
  const [showProjects, setProjectsShow] = useState(false);
  return (
    <div>
      {/* top */}
      <div className="flex items-center justify-between border-b border-b-slate-200 pb-4 mb-10">
        <h2 className="text-2xl font-semibold">Total Projects (5)</h2>
        <div className="flex items-center gap-3">
          <div>
            <button
              onClick={() => {
                setProjectsShow(!showProjects);
              }}
              className="action-btn"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>

      {/* modal for create projects*/}
      {showProjects && (
        <div className="flex items-center justify-center">
          <form className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2">
            <h3 className="text-center text-xl font-semibold">
              Create Project
            </h3>
            <div>
              <label htmlFor="projectName" className="font-semibold">
                Project Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectName"
                  required
                  placeholder="Enter project name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="assignTeam" className="font-semibold">
                Assign Team
              </label>
              <div className="mt-2">
                <select
                  name="assignTeam"
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
          <div className="overflow-x-auto mt-5 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Assigned Team</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>UI/UX Creation</td>
                  <td>Alpha Team</td>
                  <td>11/11/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
