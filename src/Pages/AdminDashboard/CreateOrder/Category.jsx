import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMenuItems } from "../../../redux/action/menu";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { Minus, Plus } from "lucide-react";
import axios from "axios";
import { server } from "../../../server";
import toast from "react-hot-toast";

function Category() {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state.menu);

  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedItems, setSelectedItems] = useState({});
  const [orderType, setOrderType] = useState("dine-in");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
    ordertime: "",
  });

  useEffect(() => {
    dispatch(allMenuItems());
  }, [dispatch]);

  const categories = [...new Set(menuItems?.map((item) => item.category))];
  const filteredItems = selectedCat === "all" ? menuItems : menuItems.filter((item) => item.category === selectedCat);
const handleQuantityChange = (item, delta) => {
    const key = `${item._id}`;
    setSelectedItems((prev) => {
      const updated = { ...prev };
      const existing = updated[key] || { ...item, quantity: 0 };
      existing.quantity += delta;
      if (existing.quantity <= 0) {
        delete updated[key];
      } else {
        updated[key] = existing;
      }
      return updated;
    });
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const totalPrice = Object.values(selectedItems).reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrderSubmit = () => {
    axios.post(`${server}/order/create`,{orderType, customerDetails, items: Object.values(selectedItems), totalPrice}, { withCredentials: true })
    .then((res)=>{
      toast.success(res.data.message);
      window.location.reload();
    }).catch((error)=>{
      toast.error(error.response.data.message);
    })
    // const orderData = {
      
    //   customerDetails,
    //   items: Object.values(selectedItems),
    //   totalPrice,
    // };
    // console.log("Order Submitted:", orderData);
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] p-4">
        <div className="flex justify-between items-center">
          <select
            className="text-xl border border-green-600 outline-none p-2 rounded-md w-[15%]"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <h1 className="text-4xl font-semibold text-center p-2 mb-3 mr-36">Select Order Items</h1>
          <div className=""></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item._id} className="bg-white rounded-2xl shadow-md border p-4">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <span className="text-green-600 font-semibold">£{item.price}</span>
              </div>
              <div className="flex justify-center items-center gap-2 pt-2">
                <button onClick={() => handleQuantityChange(item, -1)} className="bg-red-500 text-white px-2 py-1 rounded">
                  <Minus size={16} />
                </button>
                <span>{selectedItems[item._id]?.quantity || 0}</span>
                <button onClick={() => handleQuantityChange(item, 1)} className="bg-green-500 text-white px-2 py-1 rounded">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-4 justify-center">
          {["dine-in", "takeaway", "delivery"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-4 py-2 rounded-md border ${orderType === type ? "bg-green-500 text-white" : "bg-white text-black"}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-8 max-w-xl mx-auto bg-white p-6 shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
          <input name="name" value={customerDetails.name} onChange={handleCustomerChange} placeholder="Name" className="w-full border p-2 rounded mb-2 outline-none focus:border-green-600" />
          {(orderType === "delivery" || orderType === "takeaway") && (
            <input name="phone" value={customerDetails.phone} onChange={handleCustomerChange} placeholder="Phone" className="w-full border p-2 rounded mb-2 outline-none focus:border-green-600" />
          )}
          {orderType === "delivery" && (
            <>
              <input name="address" value={customerDetails.address} onChange={handleCustomerChange} placeholder="Address" className="w-full border p-2 rounded mb-2 outline-none focus:border-green-600" />
              <input type="time" name="ordertime" value={customerDetails.ordertime} onChange={handleCustomerChange} className="w-full border p-2 rounded mb-2 outline-none focus:border-green-600" />
            </>
          )}
          <select name="paymentMethod" value={customerDetails.paymentMethod} onChange={handleCustomerChange} className="w-full border p-2 rounded outline-none focus:border-green-600">
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="online">Online</option>
          </select>
        </div>

        {Object.keys(selectedItems).length > 0 && (
          <div className="mt-10 max-w-3xl mx-auto bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Selected Items</h3>
            {Object.entries(selectedItems).map(([key, item]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b">
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(item, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  <span className="ml-4">${item.price * item.quantity}</span>
                </div>
              </div>
            ))}
            <div className="text-right mt-4 font-semibold">Total: ${totalPrice}</div>
            <button onClick={handleOrderSubmit} className="mt-4 p-2 w-full bg-green-600 text-white rounded">Submit Order</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
