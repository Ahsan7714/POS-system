import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { RxUpload } from "react-icons/rx";

const SocialMedia = () => {
  const [connectedAccounts, setConnectedAccounts] = useState({
    instagram: true,
    facebook: true,
    tiktok: true,
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
  });

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const triggerImageUpload = () => {
    document.getElementById("image").click();
  };

  const handleImage = (e) => {
    e.preventDefault();
    const file = new FileReader();
    file.onload = () => setImage(file.result);
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

    console.log("Post submitted to:", selectedPlatforms);
    console.log("Text:", text);
    console.log("Image:", image);

    setText("");
    setImage(null);
    setSelectedPlatforms({ instagram: false, facebook: false, tiktok: false });
  };

  return (
    <div className="flex font-outfit bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] pr-10 flex flex-col items-center mt-4">
        <div className="mt-8 mb-8 w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Create a Post</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post here..."
            className="w-full p-2 border outline-none rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Image Upload */}
          <div
            className={`flex flex-col justify-center items-center mt-4 rounded-lg cursor-pointer transition-all duration-300 ${
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
                alt="Uploaded"
              />
            ) : (
              <>
                <RxUpload size={25} className="text-green-500 mb-3" />
                <p className="text-gray-600 font-semibold text-center">
                  <span className="block text-lg text-green-600">Click to Upload</span>
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

          {/* Platform Checkboxes */}
          <div className="mt-4">
            <h3 className="text-md font-medium">Select Platforms</h3>
            {Object.keys(connectedAccounts).map(
              (platform) =>
                connectedAccounts[platform] && (
                  <label key={platform} className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      checked={selectedPlatforms[platform]}
                      onChange={() => handlePlatformSelection(platform)}
                    />
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </label>
                )
            )}
          </div>

          {/* Post Button */}
          <button
            onClick={handlePost}
            className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
