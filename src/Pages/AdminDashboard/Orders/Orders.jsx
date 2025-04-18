import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import OrderNav from "../../../Components/Orders/OrderNav";
import OrderFilters from "../../../Components/Orders/OrderFilters";
import { orderData } from "../../../data/orderData";
import {
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaRegEye,
  FaClock,
  FaClipboard,
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaBox,
  FaListAlt,
  FaArrowRight,
  FaTimes,
  FaCreditCard,
} from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Orders() {
  const { orders } = useSelector((state) => state.order);
 

  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({
    platform: "All Platform",
    startDate: null,
    endDate: null,
    orderId: "",
  });

  const filterOrders = (status) => setActiveStatus(status);

  const applyFilters = (platform, startDate, endDate, orderId) => {
    let filtered = [...orders,...orderData]; // Use the orders from Redux or fallback to orderData

    if (activeStatus !== "All") {
      filtered = filtered.filter((order) => order.status === activeStatus);
    }
    if (platform !== "All Platform") {
      filtered = filtered.filter((order) => order.platforms === platform);
    }
    if (startDate) {
      filtered = filtered.filter(
        (order) => order.createdAt && new Date(order.createdAt) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (order) => order.createdAt && new Date(order.createdAt) <= new Date(endDate)
      );
    }
    
    
    if (orderId) {
      filtered = filtered.filter((order) =>
        order._id?.toString().includes(orderId)
      );
    }

    setFilteredOrders(filtered);
  };

  useEffect(() => {
    applyFilters(
      filters.platform,
      filters.startDate,
      filters.endDate,
      filters.orderId
    );
  }, [activeStatus, filters, orders]);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        <OrderNav setOrderStatus={filterOrders} />
        <OrderFilters
  onFilterChange={(platform, startDate, endDate, orderId) =>
    setFilters({ platform, startDate, endDate, orderId })
  }
/>


        <div className="p-9">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {["S.No", "Platform", "Customer Details", "Order Details", "View"].map((header, idx) => (
                      <TableCell
                        key={idx}
                        className="text-white font-semibold"
                        sx={{ bgcolor: "#22c55e", fontWeight: "bold", fontSize: "19px", color: "white" }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell align="center">
                          <div className="flex text-[17px] justify-center items-center gap-1">
                            {/* {platformLogos[order.Platform]} {order.Platform} */}
                            {order.platforms}
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className="flex flex-col text-[15px]">
                            <span className="flex items-center gap-2">
                              <FaUser className="text-blue-500" />
                              {order.customerDetails.name}                              
                            </span>
                            <span className="flex items-center gap-2">
                              <FaPhoneAlt className="text-green-500" />
                              {order.customerDetails.phone}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-red-500" />
                              {order.customerDetails.address ? order.customerDetails.address : "N/A"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className="flex flex-col text-[15px]">
                            <span className="flex items-center gap-2">
                              <GrCurrency className="text-yellow-500" />£{order.totalPrice}
                            </span>
                            <span className="flex items-center gap-2">
                              <MdOutlinePayment className="text-blue-500" />
                              {order.customerDetails.paymentMethod}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaClock className="text-green-700" />
                              {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() => openModal(order)}
                            className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md gap-1"
                          >
                            <FaRegEye />
                            View
                          </button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No Orders Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>

      {/* Order Details Modal */}
      {modalIsOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[24px] font-semibold flex items-center">
                <FaClipboard className="mr-2 text-blue-600" />
                Order Details
              </h2>
              <button onClick={closeModal} className="text-red-500 hover:text-red-700">
                <FaTimes className="text-[30px]" />
              </button>
            </div>
            <div className="text-[15px]">
              <p className="mb-3 flex items-center">
                <FaBox className="mr-4 text-green-500" />
                <strong className="text-gray-700">Order ID:</strong>
                <span className="ml-2">{selectedOrder._id}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaUser className="mr-4 text-indigo-600" />
                <strong className="text-gray-700">Customer:</strong>
                <span className="ml-2">{selectedOrder.customerDetails.name}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaPhoneAlt className="mr-4 text-teal-500" />
                <strong className="text-gray-700">Contact:</strong>
                <span className="ml-2">{selectedOrder.customerDetails.phone}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaClipboard className="mr-4 text-orange-500" />
                <strong className="text-gray-700">Platform:</strong>
                <span className="ml-2">{selectedOrder.platforms}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaCreditCard className="mr-4 text-purple-600" />
                <strong className="text-gray-700">Payment Method:</strong>
                <span className="ml-2">{selectedOrder.customerDetails.paymentMethod}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaMapMarkerAlt className="mr-4 text-red-500" />
                <strong className="text-gray-700">Address:</strong>
                <span className="ml-2">{selectedOrder.customerDetails.address ? selectedOrder.customerDetails.address : "N/A"}</span>
              </p>
              <p className="mb-3 flex items-center">
                <FaCalendarAlt className="mr-4 text-blue-500" />
                <strong className="text-gray-700">Order Date:</strong>
                <span className="ml-2">{selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString() : "N/A"}</span>
              </p>
              <p className="mb-5 flex items-center">
                <FaCheckCircle className="mr-4 text-green-600" />
                <strong className="text-gray-700">Status:</strong>
                <span className="ml-2">{selectedOrder.status}</span>
              </p>
              {selectedOrder.OrderType && (
                <p className="mb-5 flex items-center">
                  <FaBox className="mr-4 text-indigo-600" />
                  <strong className="text-gray-700">Order Type:</strong>
                  <span className="ml-2">{selectedOrder.orderType}</span>
                </p>
              )}
              <h3 className="text-[18px] font-semibold mb-3 flex items-center text-blue-600">
                <FaListAlt className="mr-2" />
                Order Items
              </h3>
              {selectedOrder.items.map((item, index) => (
                <p key={index} className="mb-3 flex items-center">
                  <FaArrowRight className="mr-2 text-red-600" />
                  <span>
                    {item.name} <strong>{item.quantity}</strong> × £{item.price}
                  </span>
                </p>
              ))}
              <p className="mb-3 flex items-center">
                <FaMoneyBillAlt className="mr-4 text-yellow-500" />
                <strong className="text-gray-700">Grand Total:</strong>
                <span className="ml-2">£{selectedOrder.totalPrice}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
