import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const TeamSummary = () => {
  const { axiosSecure } = useAxiosSecure();
  const [teamSummary, setTeamSummary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const { data } = await axiosSecure("/team-summary");
        if (data?.success) {
          setTeamSummary(data?.data);
        } else {
          console.log(data?.message);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [axiosSecure]);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      {" "}
      {/* main */}
      <div className="space-y-10">
        {/* single team */}
        <div>
          <h2 className="text-2xl font-semibold">Team Summary</h2>
          <div className="overflow-x-auto mt-5 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Name</th>
                  <th className="text-center">Current Task</th>
                  <th className="text-center">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {teamSummary && teamSummary.length > 0 ? (
                  teamSummary.map((summary, index) => (
                    <tr
                      key={index}
                      className={`${
                        summary?.currentTask > summary?.capacity &&
                        "bg-red-500 text-white"
                      }`}
                    >
                      <td>{summary?.teamName}</td>
                      <td>{summary?.name}</td>
                      <td className="text-center">{summary?.currentTask}</td>
                      <td className="text-center">{summary?.capacity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={12} className="text-center">
                      No data found
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

export default TeamSummary;
