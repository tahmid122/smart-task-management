import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const Login = () => {
  const { axiosInstance } = useAxios();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [credential, setCredential] = useState({ email: "", password: "" });
  //   handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredential({ ...credential, [name]: value });
  };
  // handle submit
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/login", {
        email: credential.email,
        password: credential.password,
      });
      if (res?.data) {
        if (res?.data?.success) {
          toast.success(res?.data?.message);
          localStorage.setItem("token", res.data?.token);
          navigate("/dashboard");
        } else {
          toast.error(res?.data?.message);
          if (res?.data?.error) console.log(res?.data?.error);
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      <div className="flex min-w-full lg:min-w-[450px] flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? (
                  <span class="loading loading-spinner loading-sm"></span>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            <Link
              to={"/signup"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
