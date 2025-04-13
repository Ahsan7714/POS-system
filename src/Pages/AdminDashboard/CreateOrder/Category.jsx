import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { motion, AnimatePresence } from "framer-motion";


function Category() {
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [orderType, setOrderType] = useState("dine-in");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });

  const category = [
    {
      id: 1,
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
      subcategories: [
        {
          id: 101,
          name: "Cheese Burger",
          price: 6,
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 102,
          name: "Chicken Burger",
          price: 7,
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 103,
          name: "Spicy Burger",
          price: 6,
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 104,
          name: "BBQ Burger",
          price: 7,
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 105,
          name: "Mushroom Burger",
          price: 6,
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
        },
      ],
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
      subcategories: [
        {
          id: 201,
          name: "Chicken Supreme",
          price: 11,
          image:
            "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 202,
          name: "Pepperoni Pizza",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 203,
          name: "BBQ Chicken",
          price: 11,
          image:
            "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 204,
          name: "Vegetarian Pizza",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
        },
        {
          id: 205,
          name: "Crown Crust",
          price: 12,
          image:
            "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
        },
      ],
    },
    {
      id: 3,
      name: "Drink",
      image:
        "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
      subcategories: [
        {
          id: 301,
          name: "Coca Cola",
          price: 2,
          image:
            "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
        },
        {
          id: 302,
          name: "Pepsi",
          price: 2,
          image:
            "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
        },
        {
          id: 303,
          name: "Fanta",
          price: 2,
          image:
            "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
        },
        {
          id: 304,
          name: "Sprite",
          price: 2,
          image:
            "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
        },
        {
          id: 305,
          name: "Water",
          price: 1,
          image:
            "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
        },
      ],
    },
  ];

  const openSubcategoryModal = (cat) => {
    setCurrentCategory(cat);
    setShowModal(true);
  };

  const handleQuantityChange = (item, delta) => {
    const key = `${item.id}`;
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
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const totalPrice = Object.values(selectedItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrderSubmit = () => {
    const orderData = {
      orderType,
      customerDetails,
      items: Object.values(selectedItems),
      totalPrice,
    };
    console.log("Order Submitted:", orderData);
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] p-4 ">
        <h1 className="text-4xl font-semibold text-center p-4 mb-3">
          Select Order Items
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.map((cat) => (
            <div
              key={cat.id}
              className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openSubcategoryModal(cat)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{cat.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Order Type Buttons */}
        <div className="mt-10 flex gap-4 justify-center">
          {["dine-in", "takeaway", "delivery"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-4 py-2 rounded-md border ${
                orderType === type
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Customer Form */}
        <div className="mt-8 max-w-xl mx-auto bg-white p-6 shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
          <div className="space-y-4">
            <input
              name="name"
              value={customerDetails.name}
              onChange={handleCustomerChange}
              placeholder="Customer Name"
              className="w-full border p-2 rounded"
            />
            {(orderType === "delivery" || orderType === "takeaway") && (
              <input
                name="phone"
                value={customerDetails.phone}
                onChange={handleCustomerChange}
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
              />
            )}
            {orderType === "delivery" && (
              <input
                name="address"
                value={customerDetails.address}
                onChange={handleCustomerChange}
                placeholder="Address"
                className="w-full border p-2 rounded"
              />
            )}
            <select
              name="paymentMethod"
              value={customerDetails.paymentMethod}
              onChange={handleCustomerChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="online">Online</option>
            </select>
          </div>
        </div>

        {/* Selected Items */}
        {Object.keys(selectedItems).length > 0 && (
          <div className="mt-10 max-w-3xl mx-auto bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Selected Items</h3>
            {Object.entries(selectedItems).map(([key, item]) => (
              <div
                key={key}
                className="flex justify-between items-center py-2 border-b"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <span className="ml-4 mr-4">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
            <div className="text-right mt-4 font-semibold">
              Total: ${totalPrice}
            </div>
            <button
              onClick={handleOrderSubmit}
              className="mt-4 p-2 w-full  item bg-green-600 text-white rounded"
            >
              Submit Order
            </button>
          </div>
        )}

        {/* Modal */}
        {showModal && currentCategory && (
          <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
             className="w-full relative bg-gradient-to-br from-white to-gray-100 max-w-4xl  p-6 rounded-lg shadow-2xl border border-gray-200  overflow-y-auto max-h-[80vh] ">
              <motion.button
                onClick={() => setShowModal(null)}
                className="absolute top-2 right-2 "
              >
                <span className="text-4xl font-bold text-gray-700 hover:text-green-500"> &times;</span>
               
              </motion.button>
              <h2 className="text-2xl font-bold mb-4">
                Choose {currentCategory.name} 
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentCategory.subcategories.map((item) => {
                  const existing = selectedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className="border rounded-lg shadow  flex flex-col"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-45 h-22 object-cover rounded "
                      />
                      <div className="p-3 flex flex-col items-center text-center ">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600 mb-2">${item.price}</p>

                        <div className="flex gap-3 items-center">
                          <button
                            onClick={() => handleQuantityChange(item, -1)}
                            className="bg-red-500 text-white p-2 rounded text-2xl flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className=" text-[20px]">
                            {existing ? existing.quantity : 0}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item, 1)}
                            className="bg-green-500 text-white p-2 rounded text-2xl flex items-center justify-center "
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Category;
