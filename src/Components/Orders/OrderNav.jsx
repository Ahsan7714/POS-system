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
               ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          All Orders
        </button>

        {/* New Orders Link */}
        <button
          onClick={() => handleTabClick("In Progress")}
          className={`${
            activeTab === "In Progress"
               ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          In Progress
        </button>

        {/* Approved/Confirmed Orders Link */}
        <button
          onClick={() => handleTabClick("Confirmed")}
          className={`${
            activeTab === "Confirmed"
               ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Approved/Confirmed
        </button>

        {/* Cancelled Orders Link */}
        <button
          onClick={() => handleTabClick("Cancelled")}
          className={`${
            activeTab === "Cancelled"
               ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Cancelled
        </button>

        {/* Completed Orders Link */}
        <button
          onClick={() => handleTabClick("Completed")}
          className={`${
            activeTab === "Completed"
               ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
          } flex gap-2 items-center text-[18px] h-12 px-6 rounded-lg shadow-sm transition-all duration-300`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default OrderNav;
