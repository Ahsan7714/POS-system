import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { IoRestaurantOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center py-5 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto ">
        <div className="bg-white py-8 px-4 shadow-lg  sm:px-10">
          <div className=" mb-3 flex justify-center items-center text-green-500">
            <IoRestaurantOutline size={60} />
          </div>
          <h1 className=" text-green-500 font-bold text-2xl">
            Welcome to Restaurant ISRIS
          </h1>
          <h2 className="mb-4 text-black font-normal text-center">
            Sign in to your account
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="mt-1 relative flex">
              <input
                type="text"
                autoComplete="name"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-8 py-1.5 border border-gray-400 rounded-full focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              <MdEmail
                className="absolute left-2 top-1.5 text-gray-600 cursor-pointer"
                size={20}
              />
            </div>

            <div className="mt-1 relative flex">
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-8 py-1.5 border border-gray-400 rounded-full focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute left-2 top-1.5 text-gray-600 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute left-2 top-1.5 text-gray-600 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[33px] text-center  border border-transparent text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-700"
              >
                Sign In
              </button>
            </div>
            <div className={`flex items-center w-full`}>
              <h4>Don't have an account?</h4>
              <Link to="/" className="text-green-500 pl-2 font-medium">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
