import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../../server";
import toast from "react-hot-toast";
import Loader from "../../../Components/Spinner/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading,setLoading] =useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(`${server}/user/login`,{email,password},{withCredentials:true}).then((res)=>{
      toast.success(res.data.message),
      setEmail(""),
      setPassword("")
      setLoading(false);
      if(res.data.user.role === "Admin"){
        navigate("/admin")
      }else{
        navigate("/dashboard")
      }
    }).catch((error)=>{
      toast.error(error.response.data.message)
      setLoading(false)
    })
  };

  {loading && <Loader/>}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4">
      <div className="w-full max-w-2xl bg-white py-10 px-8 shadow-2xl rounded-2xl">
          <div className=" mb-3 flex justify-center items-center text-green-500">
            <IoRestaurantOutline size={60} />
          </div>
          <h1 className="text-green-600 font-bold text-3xl text-center mb-2">
          Welcome to IRIS POS
        </h1>
        <h2 className="mb-6 text-gray-700 text-center text-lg">Sign in to your account</h2>
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
  disabled={loading}
  className={`group relative w-full h-[33px] text-center border border-transparent text-sm font-medium rounded-full text-white ${
    loading ? 'bg-green-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
  }`}
>
  {loading ? "Signing in..." : "Sign In"}
</button>

            </div>
            <div className="text-center mt-6">
            <span className="text-sm text-gray-600">Don't have an account?</span>
            <Link to="/" className="text-green-600 font-medium ml-1">
            Sign Up
            </Link>
          </div>
          </form>
        </div>
      </div>
  );
};

export default Login;
