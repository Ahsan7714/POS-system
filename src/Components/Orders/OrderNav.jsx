import React, { useState } from "react";

function OrderNav({ setOrderStatus }) {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (status) => {
    setActiveTab(status);
    setOrderStatus(status);  // Trigger filter change in parent component
  };

  return (
    <div className="flex font-outfit bg-gray-50 rounded-lg">
      <div className="flex w-[93%] justify-between mx-auto mt-5">
        {/* All Orders Link */}
        <button
          onClick={() => handleTabClick("All")}
          className={`${
            activeTab === "All"
              ? "bg-white border-b-4 border-red-500 text-red-500"
              : "bg-gray-50 hover:bg-gray-200 hover:text-red-500"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          All Orders
        </button>

        {/* New Orders Link */}
        <button
          onClick={() => handleTabClick("In Progress")}
          className={`${
            activeTab === "In Progress"
              ? "bg-white border-b-4 border-red-500 text-red-500"
              : "bg-gray-50 hover:bg-gray-200 hover:text-red-500"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          In Progress
        </button>

        {/* Approved/Confirmed Orders Link */}
        <button
          onClick={() => handleTabClick("Confirmed")}
          className={`${
            activeTab === "Confirmed"
              ? "bg-white border-b-4 border-red-500 text-red-500"
              : "bg-gray-50 hover:bg-gray-200 hover:text-red-500"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Approved/Confirmed
        </button>

        {/* Cancelled Orders Link */}
        <button
          onClick={() => handleTabClick("Cancelled")}
          className={`${
            activeTab === "Cancelled"
              ? "bg-white border-b-4 border-red-500 text-red-500"
              : "bg-gray-50 hover:bg-gray-200 hover:text-red-500"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Cancelled
        </button>

        {/* Completed Orders Link */}
        <button
          onClick={() => handleTabClick("Completed")}
          className={`${
            activeTab === "Completed"
              ? "bg-white border-b-4 border-red-500 text-red-500"
              : "bg-gray-50 hover:bg-gray-200 hover:text-red-500"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default OrderNav;
