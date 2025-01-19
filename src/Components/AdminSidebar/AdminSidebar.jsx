import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaPlusCircle,
  FaPizzaSlice,
  FaChartLine,
  FaCog,
} from "react-icons/fa"; // Import icons
import { FaKitchenSet } from "react-icons/fa6";

function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 bg-white h-full overflow-y-auto w-[22%] content-scrollbar font-outfit">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 p-6 mt-3">
          Restaurant POS
        </h1>
      </div>
      <div className="flex flex-col px-12 py-10 gap-10">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaTachometerAlt size={20} /> {/* Icon for Dashboard */}
          <p>Dashboard</p>
        </Link>

        <Link
          to="/orders"
          className={`${
            location.pathname === "/orders"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaClipboardList size={20} /> {/* Icon for Orders */}
          <p>Orders</p>
        </Link>

        <Link
          to="/create-order"
          className={`${
            location.pathname === "/create-order"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaPlusCircle size={20} /> {/* Icon for Create Order */}
          <p>Create Order</p>
        </Link>

        <Link
          to="/menu-items"
          className={`${
            location.pathname === "/menu-items"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaPizzaSlice size={20} /> {/* Icon for Menu Items */}
          <p>Menu Items</p>
        </Link>

        <Link
          to="/analytics"
          className={`${
            location.pathname === "/analytics"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaChartLine size={20} /> {/* Icon for Analytics */}
          <p>Analytics</p>
        </Link>

        <Link
          to="/kitchen"
          className={`${
            location.pathname === "/kitchen"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaKitchenSet size={20} />
          <p>Kitchen</p>
        </Link>

        <Link
          to="/settings"
          className={`${
            location.pathname === "/settings"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaCog size={20} /> {/* Icon for Settings */}
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
