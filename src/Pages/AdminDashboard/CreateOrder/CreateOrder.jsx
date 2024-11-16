import React, { useState, useEffect } from "react";
import { AiFillCheckCircle, AiOutlineFileDone } from "react-icons/ai";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { orderItems } from "../../../data/orderItems";

function CreateOrder() {
  const [orderDetails, setOrderDetails] = useState({
    customer: "",
    phone: "",
    orderType: "DineIn",
    dateTime: "",
    items:
      orderItems.length > 0 ? [{ item: orderItems[0].item, quantity: 1 }] : [],
    paymentMethod: "Cash",
    address: "",
  });
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    // If order type is "Delivery", reset address field
    if (orderDetails.orderType === "Delivery") {
      setOrderDetails((prev) => ({ ...prev, address: "" }));
    }
  }, [orderDetails.orderType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...orderDetails.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === "quantity" ? parseInt(value) || 1 : value,
    };
    setOrderDetails((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    if (orderItems.length > 0) {
      setOrderDetails((prev) => ({
        ...prev,
        items: [...prev.items, { item: orderItems[0].item, quantity: 1 }],
      }));
    } else {
      alert("No items available to add.");
    }
  };

  const calculateTotalPrice = (items) => {
    return items.reduce((total, currentItem) => {
      const itemDetails = orderItems.find(
        (orderItem) => orderItem.item === currentItem.item
      );
      const itemPrice = itemDetails ? itemDetails.price : 0;
      return total + itemPrice * (currentItem.quantity || 1);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice(orderDetails.items);
    setOrderList((prev) => [...prev, { ...orderDetails, totalPrice }]);
    setOrderDetails({
      customer: "",
      phone: "",
      orderType: "DineIn",
      dateTime: "",
      items: [{ item: orderItems[0]?.item || "No Item", quantity: 1 }],
      paymentMethod: "Cash",
      address: "",
    });
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        <h1 className="flex items-center justify-center text-4xl font-semibold mb-4">
          Create Order
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 shadow rounded"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="customer" className="block font-semibold mb-1">
                Customer Name
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                placeholder="Customer Name"
                value={orderDetails.customer}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={orderDetails.phone}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="orderType" className="block font-semibold mb-1">
                Order Type
              </label>
              <select
                name="orderType"
                id="orderType"
                value={orderDetails.orderType}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                <option value="DineIn">Dine In</option>
                <option value="Takeaway">Takeaway</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>

            <div>
              <label htmlFor="dateTime" className="block font-semibold mb-1">
                Date & Time
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                value={orderDetails.dateTime}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
          </div>

          {/* Delivery Address and Payment Method side by side */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {orderDetails.orderType === "Delivery" && (
              <div>
                <label htmlFor="address" className="block font-semibold mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Delivery Address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="paymentMethod"
                className="block font-semibold mb-1"
              >
                Payment Method
              </label>
              <select
                name="paymentMethod"
                id="paymentMethod"
                value={orderDetails.paymentMethod}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label
                    htmlFor={`item-${index}`}
                    className="block font-semibold mb-1"
                  >
                    Add Items
                  </label>
                  <select
                    id={`item-${index}`}
                    value={item.item}
                    onChange={(e) =>
                      handleItemChange(index, "item", e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  >
                    {orderItems.map((orderItem, i) => (
                      <option key={i} value={orderItem.item}>
                        {orderItem.item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={`quantity-${index}`}
                    className="block font-semibold mb-1"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="text-white bg-blue-500 rounded p-2"
            >
              Add Item
            </button>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">
              Total Price: {calculateTotalPrice(orderDetails.items)} ₹
            </h3>
          </div>

          <button
            type="submit"
            className="mt-4 text-white bg-green-500 rounded p-2 w-full"
          >
            Create Order
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Created Orders</h3>

          {/* Check if there are any orders */}
          {orderList.length === 0 ? (
            <p className="text-center text-gray-500">No orders created yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {orderList.map((order, index) => (
                <div key={index} className="p-4 bg-white shadow rounded">
                  <div className="flex items-center mb-2">
                    <AiFillCheckCircle className="text-green-500 mr-2" />
                    <h4 className="text-lg font-bold">Order {index + 1}</h4>
                  </div>
                  <p>
                    <strong>Customer:</strong> {order.customer}
                  </p>
                  <p>
                    <strong>Phone:</strong> {order.phone}
                  </p>
                  <p>
                    <strong>Order Type:</strong> {order.orderType}
                  </p>
                  {order.orderType === "Delivery" && (
                    <p>
                      <strong>Address:</strong> {order.address}
                    </p>
                  )}
                  <p>
                    <strong>Payment Method:</strong> {order.paymentMethod}
                  </p>
                  <p>
                    <strong>Total Price:</strong> {order.totalPrice} ₹
                  </p>
                  <p>
                    <strong>Items:</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    {order.items.map((item, i) => (
                      <li key={i}>
                        {item.quantity}x {item.item}
                      </li>
                    ))}
                  </ul>
                  <AiOutlineFileDone className="text-blue-500 mt-2" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
