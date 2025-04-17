import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { RiKeyFill } from "react-icons/ri";
import { GiToken } from "react-icons/gi";
import SocialButton from "../../../Components/Social/SocialButton";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../../server";
import toast from "react-hot-toast";

const Profile = () => {
  const {user} = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [popup, setPopup] = useState(null);
  const [connectedServices, setConnectedServices] = useState({
    deliveroo: false,
    justeat: false,
    ubereats: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `${server}/user/updateUser`,
      { name, email, restaurantName },
      { withCredentials: true }
    )
      .then((res) => {
        toast.success(res.data.message);
     
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setRestaurantName(user.restaurantName || "");
    }
  }, [user]);
  

  const handleLogin = (service) => {
    setConnectedServices((prev) => ({ ...prev, [service]: true }));
    console.log(`Logged in to ${service}`);
    console.log("Connected services:", connectedServices);
    setPopup(null);
  };

  return (
    <div className="flex font-outfit bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] flex flex-col mt-8 mb-8 items-center">
        <div className="max-w-xl w-full bg-white p-8  rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h1 className="text-2xl flex items-center justify-center font-semibold">
              Edit Profile
            </h1>
            <div>
              <label className="text-lg text-gray-600 font-medium">
                Owner Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label className="text-lg text-gray-600 font-medium">
                Restaurant Name
              </label>
              <input
                type="text"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="w-full border p-2 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label className="text-lg text-gray-600 font-medium">Email</label>
              <input
                type="email"
                value={email}
                readOnly
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>

        <div className="max-w-xl w-full bg-white p-6 rounded-lg mt-8">
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-5">
              Connect With Restaurant
            </h3>
            <div className="flex justify-center gap-4">
              {["deliveroo", "justeat", "ubereats"].map((service) => (
                <button
                  key={service}
                  className={`relative flex items-center gap-2 px-6 py-2 text-white rounded-lg transition duration-300 ${
                    connectedServices[service]
                      ? "bg-gray-400 cursor-not-allowed"
                      : service === "deliveroo"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : service === "justeat"
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-black hover:bg-gray-800"
                  }`}
                  onClick={() =>
                    !connectedServices[service] && setPopup(service)
                  }
                  disabled={connectedServices[service]}
                >
                  {service.charAt(0).toUpperCase() + service.slice(1)}

                  {/* Tick Icon when Connected */}
                  {connectedServices[service] && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                      ✔
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-xl w-full bg-white p-8 rounded-lg mt-8">
          <SocialButton/>
        </div>
      </div>

      {popup && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 inset-0 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-96 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-2xl border border-gray-200"
          >
            {/* Close Button in the Top-Right Corner */}
            <motion.button
              onClick={() => setPopup(null)}
              className="absolute right-4 top-2"
            >
              <span className="text-5xl font-bold text-gray-700 hover:text-green-500">
                &times;
              </span>
            </motion.button>

            {/* Restaurant Icon */}
            <IoRestaurantOutline
              size={50}
              className="text-green-500 mx-auto mb-2 mt-9"
            />

            {/* Title */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-xl font-extrabold mb-2 text-green-500">
                Welcome to IRIS POS
              </h1>
              <h2 className="text-md font-medium mb-3 text-black">
                Log in to {popup.charAt(0).toUpperCase() + popup.slice(1)}
              </h2>
            </div>

            {/* Email Input */}
            <div className="relative flex items-center mt-1">
              <input
                type="text"
                placeholder="Enter Api Key"
                required
                className="w-full px-8 py-2 rounded-full outline-none border border-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              <RiKeyFill
                size={20}
                className="absolute left-2 text-gray-600 cursor-pointer"
              />
            </div>

            {/* Password Input */}
            <div className="relative flex items-center mt-3">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter Security Key"
                required
                className="w-full px-8 py-2 rounded-full outline-none border border-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute left-2 text-gray-600 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute left-2 text-gray-600 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div className="relative flex items-center mt-3">
              <input
                type="text"
                placeholder="Enter Token"
                required
                className="w-full px-8 py-2 rounded-full outline-none border border-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              <GiToken
                size={20}
                className="absolute left-2 text-gray-600 cursor-pointer"
              />
            </div>

            {/* Connect Button */}
            <button
              className="w-full cursor-pointer flex justify-center items-center mt-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300"
              onClick={() => handleLogin(popup)}
            >
              Connect
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile;
