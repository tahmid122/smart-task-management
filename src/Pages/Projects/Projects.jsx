import React, { useCallback, useEffect, useState } from "react";
import useTeams from "../../Hooks/useTeams";
import { getFormData } from "../../utils/getFormData";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Projects = () => {
  const { user } = useAuth();
  const [showProjects, setProjectsShow] = useState(false);
  const { allTeams } = useTeams();
  const [allProjects, setAllProjects] = useState([]);
  const { axiosSecure } = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);
  // create project
  const handleCreateProject = async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    const project = {
      name: data?.projectName,
      team: data?.assignTeam,
      createdBy: user.email,
    };
    try {
      setIsLoading(true);
      const { data } = await axiosSecure.post("/create-project", project);
      if (data?.success) {
        toast.success(data?.message);
        getAllProjects();
      } else {
        toast.error(data?.message);
        if (data?.error) console.log(data?.error);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      e.target.reset();
    }
  };
  // get all projects
  const getAllProjects = useCallback(async () => {
    try {
      const { data } = await axiosSecure(`/projects/${user.email}`);
      if (data?.success) {
        setAllProjects(data?.data ?? []);
      } else {
        console.log(data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [axiosSecure, user.email]);
  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);
  return (
    <div>
      {/* top */}
      <div className="flex items-center flex-col gap-3 lg:flex-row justify-between border-b border-b-slate-200 pb-4 mb-10">
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
          <form
            onSubmit={handleCreateProject}
            className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2"
          >
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
                  {allTeams &&
                    allTeams?.length > 0 &&
                    allTeams?.map((team) => (
                      <option key={team?._id} value={team?.teamName}>
                        {team?.teamName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mt-2">
              <button disabled={isLoading} className="action-btn">
                {isLoading ? (
                  <span class="loading loading-spinner loading-sm"></span>
                ) : (
                  "Create Project"
                )}
              </button>
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
                {allProjects && allProjects?.length > 0 ? (
                  allProjects.map((project) => (
                    <tr key={project?._id}>
                      <td>{project?.name}</td>
                      <td>{project?.team}</td>
                      <td>{project?.createdAt?.split("T")[0]}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={12} className="text-center">
                      0 project found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
