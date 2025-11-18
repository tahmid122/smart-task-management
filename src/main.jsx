import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/router.jsx";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Contexts/Authentication/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContextProvider>
  </StrictMode>
);
