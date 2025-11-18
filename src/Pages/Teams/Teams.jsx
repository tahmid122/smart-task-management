import React, { useCallback, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import TeamTable from "./TeamTable";

const Teams = () => {
  const { user } = useAuth();
  const [allTeams, setAllTeams] = useState([]);
  const { axiosSecure } = useAxiosSecure();
  const [showCreateTeam, setCreateTeam] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [team, setTeam] = useState({ teamName: "", createdBy: user?.email });
  const [isLoading, setIsLoading] = useState(false);
  // create team
  const createTeam = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axiosSecure.post("/create-team", team);
      if (data?.success) {
        toast.success(data?.message);
        setTeam({ teamName: "", createdBy: "" });
        getAllTeams();
      } else {
        toast.error(data?.message);
        if (data?.error) console.log(data?.error);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // get all teams
  const getAllTeams = useCallback(async () => {
    try {
      const { data } = await axiosSecure.get(`/teams/${user.email}`);
      setAllTeams(data?.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [axiosSecure, user]);
  useEffect(() => {
    getAllTeams();
  }, [getAllTeams]);

  // add member to team
  const handleAddMember = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const expectData = Object.fromEntries(formData.entries());
    try {
      setIsLoading(true);
      const { data } = await axiosSecure.post("/add-member", expectData);
      if (data?.success) {
        toast.success(data?.message);
        getAllTeams();
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
  console.log(allTeams);
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
          <form
            onSubmit={createTeam}
            className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2"
          >
            <h3 className="text-center text-xl font-semibold">Create Team</h3>
            <div>
              <label htmlFor="teamName" className="font-semibold">
                Team Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="teamName"
                  value={team?.teamName}
                  onChange={(e) =>
                    setTeam({ ...team, teamName: e.target.value })
                  }
                  required
                  placeholder="Enter team name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-2">
              <button className="action-btn">
                {isLoading ? (
                  <span class="loading loading-spinner loading-sm"></span>
                ) : (
                  "Create Team"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      {/* modal for add member*/}
      {showAddMember && (
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleAddMember}
            className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2"
          >
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
                  {allTeams &&
                    allTeams?.length > 0 &&
                    allTeams?.map((team) => (
                      <option key={team?._id} value={team?._id}>
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
                  "Add Member"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* main */}
      <div className="space-y-10">
        {allTeams &&
          allTeams?.length > 0 &&
          allTeams.map((team) => <TeamTable key={team?._id} team={team} />)}
      </div>
    </div>
  );
};

export default Teams;
