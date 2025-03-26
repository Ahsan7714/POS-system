import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { IoRestaurantOutline } from "react-icons/io5";

const Profile = () => {
  const [ownerName, setOwnerName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [restaurantName, setRestaurantName] = useState("John's Cafe");
  const [popup, setPopup] = useState(null);
  const [connectedServices, setConnectedServices] = useState({
    deliveroo: false,
    justeat: false,
    ubereats: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User profile updated:", { ownerName, email, restaurantName });
  };

  const handleLogin = (service) => {
    setConnectedServices((prev) => ({ ...prev, [service]: true }));
    console.log(`Logged in to ${service}`);
    console.log("Connected services:", connectedServices);
    setPopup(null);
  };

  return (
    <div className="flex font-outfit bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] pr-10 flex justify-center items-center">
        <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="text-lg text-gray-600 font-medium">
                Owner Name
              </label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
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

          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Connect with
            </h3>
            <div className="flex justify-center gap-4">
              {["deliveroo", "justeat", "ubereats"].map((service) => (
                <button
                  key={service}
                  className={`px-6 py-2 text-white rounded-lg transition duration-300 ${
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
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
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

export default Profile;
