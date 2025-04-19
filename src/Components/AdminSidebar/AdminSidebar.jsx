import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaPlusCircle,
  FaPizzaSlice,
  FaChartLine,
  FaCog,
  FaAdversal,
} from "react-icons/fa"; // Import icons
import { FaKitchenSet } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../server";
import { FcAdvertising } from "react-icons/fc";

function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate()

  const logoutHandler = () =>{
    axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
      toast.success(res.data.message);
      navigate("/login")
    }).catch((error)=>{
      toast.error(error.response.data.message);
    })
  }

  return (
    <div className="fixed left-0 top-0 bg-white h-full overflow-y-auto w-[22%] content-scrollbar font-outfit">
      <div className="flex items-center justify-center">
      <h1 className="text-3xl font-serif italic font-semibold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent mt-10">
  IRIS POS
</h1>


      </div>
      <div className="flex flex-col px-12 py-10 gap-10">
        <Link
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard"
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
          to="/social"
          className={`${
            location.pathname === "/social"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <IoShareSocialOutline size={20} /> {/* Icon for Settings */}
          <p>Social App</p>
        </Link>

        <Link
          to="/demographs"
          className={`${
            location.pathname === "/demographs"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaAdversal size={20} /> {/* Icon for Settings */}
          <p>DemoGraphic</p>
        </Link>


        <Link
          to="/profile"
          className={`${
            location.pathname === "/profile"
              ? "bg-green-500 text-white"
              : "text-[#000000a5]"
          } flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <FaCog size={20} /> {/* Icon for Settings */}
          <p>Profile</p>
        </Link>

         <button
              onClick={logoutHandler}
              className="flex gap-2 items-center text-[20px] font-semibold h-10 px-4 rounded-md text-[#000000a5]"
            >
              <AiOutlineLogout size={20} />
              <span className="text-lg">Logout</span>
            </button>
        
      </div>
    </div>
  );
}

export default AdminSidebar;
