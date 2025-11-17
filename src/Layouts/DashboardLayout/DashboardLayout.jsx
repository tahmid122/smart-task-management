import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="min-h-full" id="dashboard">
        <nav className="bg-gray-800 sticky top-0 left-0 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <h3 className="text-2xl text-white font-bold">Admin Panel</h3>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to={"/dashboard"}
                      end
                      aria-current="page"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink to={"teams"} end>
                      Teams
                    </NavLink>
                    <NavLink to={"projects"} end>
                      Total Projects
                    </NavLink>
                    <NavLink to={"tasks"} end>
                      Total Tasks
                    </NavLink>
                    <NavLink to={"team-summary"} end>
                      Team Summary
                    </NavLink>
                    <NavLink to={"recent-reassignments"} end>
                      Recent Reassignments
                    </NavLink>
                    <NavLink to={"activity-log"} end>
                      Activity Logs
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    onClick={handleLogout}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsShow(!isShow)}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 in-aria-expanded:hidden"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6 not-in-aria-expanded:hidden"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`mobileNav ${isShow ? "block" : "hidden"}`}>
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <NavLink
                to={"/dashboard"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Dashboard
              </NavLink>
              <Link
                to={"/"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Team
              </Link>
            </div>
            <div className="border-t border-white/10 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* <div className="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  Your profile
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </nav>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
