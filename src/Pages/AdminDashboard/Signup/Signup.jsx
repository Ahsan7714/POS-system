import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../../server";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCreditCard, FaCalendarAlt, FaLock, FaMoneyBillWave } from "react-icons/fa";
import Loader from "../../../Components/Spinner/Loader";

const variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [contactNo,setContactNo] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] =useState("")
  const [visible, setVisible] = useState(false);
  const [vis,setVis] =useState(false);
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [loading,setLoading] =useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${server}/user/create`,
        {restaurantName,address,type,contactNo,email,name,password,subscriptionType},
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setPassword("");
        setEmail("");
        setRestaurantName("");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = [1, 2, 3];
  {loading && <Loader/>}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4 py-10">
      <div className="w-full max-w-2xl bg-white py-10 px-8 shadow-2xl rounded-2xl">
        <div className="flex justify-center items-center text-green-500 mb-4">
          <IoRestaurantOutline size={60} />
        </div>
        <h1 className="text-green-600 font-bold text-3xl text-center mb-2">
          Welcome to IRIS POS
        </h1>
        <h2 className="mb-6 text-gray-700 text-center text-lg">
          Create an account
        </h2>

        {/* Step Progress Bar */}
        <div className=" flex items-center justify-between mb-6">
          {steps.map((s, idx) => (
            <div key={s} className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold z-10
            ${
              step >= s
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
                >
                  {s}
                </div>
              </div>
              {idx !== steps.length && (
                <div className="flex-1 h-1 bg-gray-300 relative">
                  <div
                    className={`absolute top-0 left-0 h-full transition-all duration-300 ${
                      step >= s ? "bg-green-500 w-full" : "bg-gray-300 w-0"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4 }}
              >
                <h1 className=" font-semibold mb-2 text-lg">
                  Restaurant Details
                </h1>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Restaurant Name"
                    required
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none  focus:ring-green-500 focus:border-green-500"
                  />
                  <IoRestaurantOutline
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>

                <div className="relative mb-4">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Restaurant Address "
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  <FaLocationDot
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>

                <div className=" relative mb-4">
                  <select
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full appearance-none pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select Restaurant Type</option>
                    <option value="Shop">Shop</option>
                    <option value="Cafe">Cafe</option>
                    <option value="FastFood">Fast Food</option>
                    <option value="FineDining">Fine Dining</option>
                    <option value="Bakery">Bakery</option>
                  </select>
                  <IoRestaurantOutline
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>

                <div className=" relative mb-4">
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Contact Number"
                    required
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  <FaPhoneAlt
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    type="button"
                    className="w-[33%] py-2 rounded-full bg-green-500 text-white font-semibold"
                  >
                    Next
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4 }}
              >
                <h1 className=" font-semibold mb-2 text-lg">
                Personal Details
                </h1>

                <div className="relative mb-4">
                  <input
                    type="text"
                    autoComplete=""
                    placeholder="Owner Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  <CiUser
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  <MdEmail
                    className="absolute left-3 top-2.5 text-gray-600"
                    size={18}
                  />
                </div>

                <div className="relative mb-4">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute left-3 top-2.5 text-gray-600 cursor-pointer"
                      size={18}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute left-3 top-2.5 text-gray-600 cursor-pointer"
                      size={18}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>

                <div className="relative mb-4">
                  <input
                    type={vis ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  {vis ? (
                    <AiOutlineEye
                      className="absolute left-3 top-2.5 text-gray-600 cursor-pointer"
                      size={18}
                      onClick={() => setVis(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute left-3 top-2.5 text-gray-600 cursor-pointer"
                      size={18}
                      onClick={() => setVis(true)}
                    />
                  )}
                </div>
                <h1>
                  {password !== confirmPassword && password.length > 0 && confirmPassword.length > 0 ? (
                    <span className="text-red-500 text-sm">
                      Passwords do not match
                    </span>
                  ) : null}
                </h1>

                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    type="button"
                    className="w-[33%] py-2 rounded-full bg-red-500 text-white font-semibold"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    type="button"
                    className="w-[33%] py-2 rounded-full bg-green-500 text-white font-semibold"
                  >
                    Next
                  </motion.button>
                </div>
              </motion.div>
            )}

         



{step === 3 && (
  <motion.div
    key="step3"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4 }}
  >
    <div className="text-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700 flex items-center justify-center gap-2">
        <FaMoneyBillWave className="text-green-500" />
        Choose Subscription & Sign Up
      </h2>
    </div>

    {/* Subscription Type Buttons */}
    <div className="flex justify-center gap-10 mb-6">
      <button
        type="button"
        onClick={() => setSubscriptionType("monthly")}
        className={`w-[30%] py-2 rounded-md border text-sm flex flex-col items-center ${
          subscriptionType === "monthly"
            ? "bg-green-500 text-white"
            : "bg-white text-gray-700 border-gray-400"
        }`}
      >
        Monthly
        <span className="text-xs font-medium">$9.99 / mo</span>
      </button>

      <button
        type="button"
        onClick={() => setSubscriptionType("yearly")}
        className={`w-[30%] py-2 rounded-md border text-sm flex flex-col items-center ${
          subscriptionType === "yearly"
            ? "bg-green-500 text-white"
            : "bg-white text-gray-700 border-gray-400"
        }`}
      >
        
        Yearly
        <span className="text-xs font-medium">$99.99 / yr</span>
      </button>
    </div>

    {/* Card-style Payment Input */}
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
      <h3 className="text-md font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <FaCreditCard className="text-green-500" />
        Payment Info
      </h3>

      <div className="relative mb-3">
        <FaCreditCard className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Card Number"
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex gap-4">
        <div className="relative w-1/2">
          <FaCalendarAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            placeholder="MM/YY"
            className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="relative w-1/2">
          <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="CVV"
            className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-between">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevStep}
        type="button"
        className="w-[33%] py-2 rounded-full bg-red-500 text-white font-semibold"
      >
        Back
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className={`w-[33%] py-2 rounded-full bg-green-500 text-white font-semibold  ${loading ? 'bg-green-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}` }
      >
        {loading ? "Signing up..." : "Sign up"}
      </motion.button>
    </div>
  </motion.div>
)}




          </AnimatePresence>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Already have an account?
            </span>
            <Link to="/login" className="text-green-600 font-medium ml-1">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
