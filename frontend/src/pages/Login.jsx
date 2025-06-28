import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [authMode, setAuthMode] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        authMode === "Sign Up"
          ? "/api/user/register"
          : "/api/user/login";

      const payload =
        authMode === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const { data } = await axios.post(`${backendUrl}${endpoint}`, payload);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success(`${authMode} successful!`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {authMode === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {authMode === "Sign Up" ? "sign up" : "log in"} to book appointment</p>

        {authMode === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
          {authMode === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p>
          {authMode === "Sign Up"
            ? "Already have an account?"
            : "Create a new account?"}{" "}
          <span
            onClick={() =>
              setAuthMode(authMode === "Sign Up" ? "Login" : "Sign Up")
            }
            className="text-primary underline cursor-pointer"
          >
            {authMode === "Sign Up" ? "Login here" : "Click here"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
