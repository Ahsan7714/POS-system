import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";

function Category() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const [orderType, setOrderType] = useState("dine-in");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const category = [
    {
      id: 1,
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop",
      subcategories: [
        { id: 101, name: "Cheese Burger", price: 6 },
        { id: 102, name: "Chicken Burger", price: 7 },
        { id: 103, name: "Spicy Burger", price: 6 },
        { id: 104, name: "BBQ Burger", price: 7 },
        { id: 105, name: "Mushroom Burger", price: 6 },
      ],
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop",
      subcategories: [
        { id: 201, name: "Chicken Supreme", price: 11 },
        { id: 202, name: "Pepperoni", price: 10 },
        { id: 203, name: "BBQ Chicken", price: 11 },
        { id: 204, name: "Vegetarian", price: 10 },
        { id: 205, name: "Crown Crust", price: 12 },
      ],
    },
    {
      id: 3,
      name: "Drinks",
      image:
        "https://images.unsplash.com/photo-1657101455328-6821c90b0ad3?q=80&w=1481&auto=format&fit=crop",
      subcategories: [
        { id: 301, name: "Coca Cola", price: 2 },
        { id: 302, name: "Pepsi", price: 2 },
        { id: 303, name: "Fanta", price: 2 },
        { id: 304, name: "Sprite", price: 2 },
        { id: 305, name: "Water", price: 1 },
      ],
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleCheckboxChange = (catId, subId, item) => {
    const key = `${catId}-${subId}`;
    const isChecked = !checkedItems[key];

    setCheckedItems((prev) => ({
      ...prev,
      [key]: isChecked,
    }));

    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (isChecked) {
        updated[key] = { ...item, quantity: 1 };
      } else {
        delete updated[key];
      }
      return updated;
    });
  };

  const handleQuantityChange = (key, delta) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (updated[key]) {
        const newQty = updated[key].quantity + delta;
        if (newQty <= 0) {
          delete updated[key];
        } else {
          updated[key].quantity = newQty;
        }
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
    // Add API call here
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
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-50 object-cover cursor-pointer"
                onClick={() => handleCategoryClick(cat.id)}
              />
              <div className="p-4">
                <h2
                  className="text-xl font-semibold cursor-pointer"
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.name}
                </h2>
              </div>

              {expandedCategories[cat.id] && (
                <div className="p-4 border-t bg-gray-50">
                  {cat.subcategories.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <div>
                        <p className="font-medium">{sub.name}</p>
                        <p className="text-sm text-gray-500">${sub.price}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={!!checkedItems[`${cat.id}-${sub.id}`]}
                        onChange={() =>
                          handleCheckboxChange(cat.id, sub.id, sub)
                        }
                        className="w-5 h-5 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
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
              onChange={handleCustomerChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash</option>
              <option value="card"> Card</option>
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
                    onClick={() => handleQuantityChange(key, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(key, 1)}
                    className="px-2 py-1 bg-gray-200 rounded "
                  >
                    +
                  </button>
                  <span className="ml-4 mr-4">${item.price * item.quantity}</span>
                </div>
              </div>
            ))}
            <div className="text-right font-bold mt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button
              onClick={handleOrderSubmit}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Create Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
