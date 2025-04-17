import React, { useState } from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiKeyFill } from "react-icons/ri";
import { GiToken } from "react-icons/gi";

const SocialButton = () => {
  const [visible, setVisible] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
  });
  const [popup, setPopup] = useState(null);
  const handleLogin = (platform) => {
    setConnectedAccounts((prev) => ({ ...prev, [platform]: true }));
    setPopup(null);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-5">Connect With Social</h1>
      <div className="flex gap-4">
        {["instagram", "facebook", "tiktok"].map((platform) => (
          <button
            key={platform}
            className={`relative px-6 py-2 text-white rounded-lg transition duration-300 flex items-center gap-2 ${
              connectedAccounts[platform]
                ? "bg-gray-400 cursor-not-allowed"
                : platform === "instagram"
                ? "bg-pink-500 hover:bg-pink-600"
                : platform === "facebook"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-black hover:bg-black/80"
            }`}
            onClick={() => !connectedAccounts[platform] && setPopup(platform)}
            disabled={connectedAccounts[platform]}
          >
            {/* Platform Icon */}
            {platform === "instagram" && <FaInstagram className="text-white" />}
            {platform === "facebook" && <FaFacebook className="text-white" />}
            {platform === "tiktok" && <FaTiktok className="text-white" />}
            {platform.charAt(0).toUpperCase() + platform.slice(1)}

            {/* ✅ Tick Icon when Connected */}
            {connectedAccounts[platform] && (
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                ✔
              </span>
            )}
          </button>
        ))}
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

export default SocialButton;
