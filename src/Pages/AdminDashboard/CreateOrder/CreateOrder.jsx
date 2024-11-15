import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { orderItems } from "../../../data/orderItems";

function CreateOrder() {
  const [orderDetails, setOrderDetails] = useState({
    customerName: "",
    phone: "",
    orderType: "DineIn",
    dateTime: "",
    items: [],
    paymentMethod: "Cash",
  });
  const [orderList, setOrderList] = useState([]);

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
      [field]: value,
    };
    setOrderDetails((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    setOrderDetails((prev) => ({
      ...prev,
      items: [...prev.items, { item: orderItems[0].item, quantity: 1 }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderList((prev) => [...prev, orderDetails]);
    setOrderDetails({
      customerName: "",
      phone: "",
      orderType: "DineIn",
      dateTime: "",
      items: [],
      paymentMethod: "Cash",
    });
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        <h2 className="flex items-center justify-center text-4xl font-semibold mb-4">
          Create Order
        </h2>
        
       
    </div>
    </div>
  );
}

export default CreateOrder;
