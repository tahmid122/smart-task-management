import { createBrowserRouter } from "react-router";
import Login from "../Pages/Auth/Login";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import SignUp from "../Pages/Auth/Signup";
import NotFound from "../Pages/NotFound/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Teams from "../Pages/Teams/Teams";
import Projects from "../Pages/Projects/Projects";
import Tasks from "../Pages/Tasks/Tasks";
import TeamSummary from "../Pages/TeamSummary/TeamSummary";
import RecentReAssignments from "../Pages/RecentReAssignments/RecentReAssignments";
import ActivityLog from "../Pages/ActivityLog/ActivityLog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProtectedRoute from "../Routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "teams",
        Component: Teams,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        path: "team-summary",
        Component: TeamSummary,
      },
      {
        path: "recent-reassignments",
        Component: RecentReAssignments,
      },
      {
        path: "activity-log",
        Component: ActivityLog,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
