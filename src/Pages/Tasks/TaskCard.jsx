import React from "react";
import { FaTrash } from "react-icons/fa6";

const TaskCard = ({ handleDelete = () => {}, setSelectedTask }) => {
  return (
    <div>
      {" "}
      <div className="shadow-sm border border-slate-300 p-3 rounded-md">
        <span className="flex items-center justify-end">
          <FaTrash
            onClick={() => {
              handleDelete(1);
            }}
            className="cursor-pointer text-red-600"
          />
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
        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <select
              name="filterByMember"
              required
              className="block rounded-md bg-white px-3 py-[7px] text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option value="" className="hidden">
                Change Status
              </option>
              <option value="low">Pending</option>
              <option value="medium">Done</option>
            </select>
          </div>
          <button
            onClick={() => {
              setSelectedTask((prev) => ({ ...prev, taskTitle: "hello" }));
            }}
            className="action-btn"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
