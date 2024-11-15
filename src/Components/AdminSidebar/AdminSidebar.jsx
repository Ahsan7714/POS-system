// import React from 'react'
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();
  return (
    <div className="fixed left-0 top-0 bg-white h-full overflow-y-auto w-[22%] content-scrollbar font-outfit">
      <div className="flex items-center justify-center ">
        <h1 className="text-3xl font-bold text-gray-800 p-6 mt-3">
          Restaurant POS
        </h1>
      </div>
      <div className="flex flex-col px-12 py-10 gap-10">
        {/* ['Dashboard', 'Orders', 'Menu Items', 'Analytics', 'Settings'] */}
        <Link
          to="/"
          className={`
           ${
             location.pathname === "/"
               ? "bg-gradient-to-r from-[#e63946] to-[#eec5ab] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Dashboard</p>
        </Link>
        <Link
          to="/orders"
          className={`
           ${
             location.pathname === "/orders"
               ? "bg-gradient-to-r from-[#e63946] to-[#eec5ab] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Orders</p>
        </Link>
        <Link
          to="/create-order"
          className={`
           ${
             location.pathname === "/create-order"
               ? "bg-gradient-to-r from-[#e63946] to-[#eec5ab] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Create Order</p>
        </Link>
        <Link
          to="/menu-items"
          className={`
           ${
             location.pathname === "/menu-items"
               ? "bg-gradient-to-r from-[#2b5870] to-[#6a97af] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Menu Items</p>
        </Link>
        <Link
          to="/analytics"
          className={`
           ${
             location.pathname === "/analytics"
               ? "bg-gradient-to-r from-[#2b5870] to-[#6a97af] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Analytics</p>
        </Link>
        <Link
          to="/settings"
          className={`
           ${
             location.pathname === "/settings"
               ? "bg-gradient-to-r from-[#2b5870] to-[#6a97af] text-white"
               : "text-[#000000a5]"
           }
           flex gap-2 items-center text-[20px] h-10 px-4 rounded-md
         `}
        >
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
