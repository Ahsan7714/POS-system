import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { IoRestaurantOutline } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
  const [connectedAccounts, setConnectedAccounts] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
  });
  const [popup, setPopup] = useState(null);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
  });
  const handleLogin = (platform) => {
    setConnectedAccounts((prev) => ({ ...prev, [platform]: true }));
    setPopup(null);
  };

  const triggerImageUpload = () => {
    document.getElementById("image").click();
  };

  const handleImage = (e) => {
    e.preventDefault();
    const file = new FileReader();

    file.onload = () => {
      setImage(file.result);
    };

    file.readAsDataURL(e.target.files[0]);
  };
  const handlePlatformSelection = (platform) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const handlePost = () => {
    const isAnyPlatformSelected = Object.values(selectedPlatforms).includes(true);
    
    if (!isAnyPlatformSelected) {
      alert("Kindly select at least one platform to post.");
      return;
    }
    
    console.log("Post submitted:", text, image, selectedPlatforms);
    setText("");
    setImage(null);
    setSelectedPlatforms({ instagram: false, facebook: false, tiktok: false });
  };


  return (
    <div className="flex font-outfit bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] pr-10 flex flex-col items-center mt-4 ">
      <div className="mt-8 mb-8 w-full max-w-xl bg-white p-6 rounded-lg shadow-lg ">
            <h2 className="text-lg font-semibold mb-2">Create a Post</h2>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your post here..."
              className="w-full p-2 border outline-none rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <div
              className={`flex flex-col justify-center items-center mt-4  rounded-lg cursor-pointer transition-all duration-300 
                            ${
                              image
                                ? "border-2 border-solid border-green-500 bg-green-50 shadow-md p-1"
                                : "border-2 border-dashed border-gray-400 hover:border-green-500 hover:bg-green-50 p-4"
                            }`}
              onClick={triggerImageUpload}
            >
              {image ? (
                <img
                  src={image}
                  className="w-full h-auto max-h-[250px] object-contain rounded-lg"
                  alt="Uploaded Item"
                />
              ) : (
                <>
                  <RxUpload size={25} className="text-green-500 mb-3" />
                  <p className="text-gray-600 font-semibold text-center">
                    <span className="block text-lg text-green-600">
                      Click to Upload
                    </span>
                    <span className="block text-sm font-normal text-gray-500">
                      or drag and drop your image here
                    </span>
                  </p>
                </>
              )}
              <input
                type="file"
                id="image"
                name="image"
                className="hidden"
                onChange={handleImage}
                accept="image/*"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-md font-medium">Select Platforms</h3>
              {["instagram", "facebook", "tiktok"].map(
                (platform) =>
                  connectedAccounts[platform] && (
                    <label
                      key={platform}
                      className="flex items-center gap-2 mt-2"
                    >
                      <input type="checkbox"
                        checked={selectedPlatforms[platform]}
                        onChange={() => handlePlatformSelection(platform)}
                      />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </label>
                  )
              )}
            </div>

            <button
            onClick={handlePost}
             className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              Post Now
            </button>

            <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold mb-6 mt-6">
            Connect With 
          </h1>
          <div className="flex gap-4">
            {["instagram", "facebook", "tiktok"].map((platform) => (
              <button
                key={platform}
                className={`px-6 py-2 text-white rounded-lg transition duration-300 ${
                  connectedAccounts[platform]
                    ? "bg-gray-400 cursor-not-allowed"
                    : platform === "instagram"
                    ? "bg-pink-500 hover:bg-pink-600"
                    : platform === "facebook"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-black hover:bg-black/80"
                }`}
                onClick={() =>
                  !connectedAccounts[platform] && setPopup(platform)
                }
                disabled={connectedAccounts[platform]}
              >
                <div className="flex justify-center items-center gap-2">
                {platform === "instagram" && <FaInstagram className="text-white" />}
                {platform === "facebook" && <FaFacebook className="text-white" />}
                {platform === "tiktok" && <FaTiktok className="text-white" />}
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </div>
              </button>
            ))}
          </div>
        </div>


          </div>
      </div>

      {popup && (
        <div className=" fixed flex justify-center items-center bg-black bg-opacity-50 inset-0 ">
          <div className=" w-96 bg-white rounded-xl p-6 shadow-xl ">
            <IoRestaurantOutline
              size={50}
              className="text-green-500 mx-auto mb-1"
            />
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold mb-2">
                Welcome to Restaurant ISRIS
              </h1>

              <h2 className="text-md font-semibold mb-2 text-gray-600">
                Log in to {popup.charAt(0).toUpperCase() + popup.slice(1)}
              </h2>
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border p-2 rounded-lg mt-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border p-2 rounded-lg mt-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                onClick={() => setPopup(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                onClick={() => handleLogin(popup)}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMedia;
