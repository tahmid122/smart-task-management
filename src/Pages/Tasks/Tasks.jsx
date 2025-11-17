import React, { useState } from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";

const Tasks = () => {
  const [taskShow, setTaskShow] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [selectedTask, setSelectedTask] = useState({
    taskTitle: "",
    taskPriority: "",
  });
  const handleDelete = (id = 0) => {
    Swal.fire({
      title: `Are you sure? ${id}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      {/* top */}
      <div className="flex items-center flex-col gap-3 lg:flex-row justify-between border-b border-b-slate-200 pb-4 mb-10">
        <h2 className="text-2xl font-semibold">Total Tasks (5)</h2>
        <div className="flex items-center gap-3">
          <div>
            <button
              onClick={() => {
                setTaskShow(!taskShow);
              }}
              className="action-btn"
            >
              Add Task
            </button>
          </div>
          {/* <div>
            <button className="action-btn bg-orange-500">Reassign Tasks</button>
          </div> */}
        </div>
      </div>

      {/* modal for create projects*/}
      {taskShow && (
        <div className="flex items-center justify-center">
          <form className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2">
            <h3 className="text-center text-xl font-semibold">Add Task</h3>
            <div>
              <label htmlFor="project" className="font-semibold">
                Select Project
              </label>
              <div className="mt-2">
                <select
                  name="project"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" className="hidden">
                    --Select project--
                  </option>
                  <option value="ui/ux creation">UI/UX Creation</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="assignTeam" className="font-semibold">
                Assign Team
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="assignTeam"
                  readOnly
                  placeholder="Select project to auto fill"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="assignMember" className="font-semibold">
                Assign Member
              </label>
              <div className="mt-2">
                <select
                  name="assignMember"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" className="hidden">
                    --Select Member--
                  </option>
                  <option value="tahmid">
                    Tahmid (CurrentTasks: 3, Capacity: 5)
                  </option>
                  <option value="medha">
                    Medha (CurrentTasks: 7, Capacity: 5)
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="taskTitle" className="font-semibold">
                Task Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="taskTitle"
                  required
                  placeholder="Enter task title"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="taskDescription" className="font-semibold">
                Task Description
              </label>
              <div className="mt-2">
                <textarea
                  name="taskDescription"
                  placeholder="Enter task description"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[100px] resize-none"
                  required
                ></textarea>
              </div>
            </div>
            <div>
              <label htmlFor="taskPriority" className="font-semibold">
                Task Priority
              </label>
              <div className="mt-2">
                <select
                  name="taskPriority"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" className="hidden">
                    --Select priority--
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <button className="action-btn">Add Task</button>
            </div>
          </form>
        </div>
      )}

      {/* main */}
      {/* filter */}
      <div className="flex items-center justify-center lg:justify-end gap-2">
        <div>
          <select
            name="filterByProject"
            required
            className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="" className="hidden">
              Filter by project
            </option>
            <option value="low">Project 1</option>
            <option value="medium">Project 2</option>
          </select>
        </div>
        <div>
          <select
            name="filterByMember"
            required
            className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="" className="hidden">
              Filter by Member
            </option>
            <option value="low">Tahmid</option>
            <option value="medium">Munchifa</option>
          </select>
        </div>
      </div>
      {/* all tasks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {/* single task */}
        <TaskCard
          setSelectedTask={setSelectedTask}
          handleDelete={handleDelete}
        />
        {/* single task */}
        <TaskCard
          setSelectedTask={setSelectedTask}
          handleDelete={handleDelete}
        />
        {/* single task */}
        <TaskCard
          setSelectedTask={setSelectedTask}
          handleDelete={handleDelete}
        />
        {/* single task */}
        <TaskCard
          setSelectedTask={setSelectedTask}
          handleDelete={handleDelete}
        />
        {/* single task */}
        <TaskCard
          setSelectedTask={setSelectedTask}
          handleDelete={handleDelete}
        />
      </div>
      {/* Warning assign popup */}
      {isWarning && (
        <div className="fixed left-0 top-0 h-screen w-full bg-[#00000056] flex items-center justify-center">
          <div className="p-4 rounded-md bg-white border border-slate-50 z-20">
            <h3 className="text-center text-lg font-semibold">
              Riya has 4 tasks but capacity is 3.
            </h3>
            <h3 className="text-center text-xl font-bold mt-2">
              Assign anyway?
            </h3>
            <div className="flex items-center gap-2 mt-5 justify-between">
              <button className="action-btn bg-red-500">Assign Anyway</button>
              <button
                onClick={() => setIsWarning(false)}
                className="action-btn bg-orange-400"
              >
                Chose Another
              </button>
            </div>
            <button className="action-btn mt-2">Auto Assign</button>
          </div>
        </div>
      )}
      {/* edit task popup */}
      {selectedTask && selectedTask?.taskTitle && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#00000054] flex items-center justify-center z-10">
          <div className="flex items-center justify-center">
            <form className="w-[400px] shadow-md rounded-md p-5 border border-slate-200 space-y-2 bg-white relative">
              <FaXmark
                onClick={() => {
                  setSelectedTask({
                    taskTitle: "",
                    taskPriority: "",
                  });
                }}
                className="absolute right-2 top-2 cursor-pointer"
                size={20}
              />
              <h3 className="text-center text-xl font-semibold">Edit Task</h3>
              <div>
                <label htmlFor="project" className="font-semibold">
                  Select Project
                </label>
                <div className="mt-2">
                  <select
                    name="project"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="" className="hidden">
                      --Select project--
                    </option>
                    <option value="ui/ux creation">UI/UX Creation</option>
                  </select>
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
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="assignMember" className="font-semibold">
                  Assign Member
                </label>
                <div className="mt-2">
                  <select
                    name="assignMember"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="" className="hidden">
                      --Select Member--
                    </option>
                    <option value="tahmid">Tahmid</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="taskTitle" className="font-semibold">
                  Task Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="taskTitle"
                    required
                    placeholder="Enter task title"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="taskDescription" className="font-semibold">
                  Task Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="taskDescription"
                    placeholder="Enter task description"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[100px] resize-none"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <label htmlFor="taskPriority" className="font-semibold">
                  Task Priority
                </label>
                <div className="mt-2">
                  <select
                    name="taskPriority"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="" className="hidden">
                      --Select priority--
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <button className="action-btn">Update Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
