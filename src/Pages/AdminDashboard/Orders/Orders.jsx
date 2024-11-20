import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import OrderNav from "../../../Components/Orders/OrderNav";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { orderData } from "../../../data/orderData";
import {
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaRegEye,
  FaClock,
} from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import OrderFilters from "../../../Components/Orders/OrderFilters";
import {
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

function Orders() {
  const platformLogos = {
    Deliveroo: '🍴',       
    JustEat: '🍔',          
    Lyft: '🚙',             
    UberEats: '🍕',     
    BiteHub: "🍳",
  };

  // State to store the active filters
  const [filteredOrders, setFilteredOrders] = useState(orderData);
  const [activeStatus, setActiveStatus] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({
    platform: "All Platform",
    startDate: null,
    endDate: null,
    orderId: "",
  });

  // Function to filter orders based on status
  const filterOrders = (status) => {
    setActiveStatus(status); // Update the status filter
  };

  // Function to apply all filters
  const applyFilters = (platform, startDate, endDate, orderId) => {
    let filtered = orderData;

    // Apply the status filter first
    if (activeStatus !== "All") {
      filtered = filtered.filter((order) => order.Status === activeStatus);
    }

    // Apply platform filter
    if (platform !== "All Platform") {
      filtered = filtered.filter((order) => order.Platform === platform);
    }

    // Apply date range filter
    if (startDate) {
      filtered = filtered.filter(
        (order) => new Date(order.Date) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (order) => new Date(order.Date) <= new Date(endDate)
      );
    }

    // Apply OrderId filter
    if (orderId) {
      filtered = filtered.filter((order) =>
        order.OrderId.toString().includes(orderId)
      );
    }

    setFilteredOrders(filtered); // Set the filtered orders
  };

  // Trigger filter application when filters or status change
  useEffect(() => {
    applyFilters(
      filters.platform,
      filters.startDate,
      filters.endDate,
      filters.orderId
    );
  }, [activeStatus, filters]);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="flex font-outfit ">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        <OrderNav setOrderStatus={filterOrders} />
        <OrderFilters onFilterChange={applyFilters} />
        {/* Orders Table */}

        <div className="p-9">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead
                  sx={{
                    bgcolor: "#22c55e",
                    fontWeight: "bold",
                    fontSize: "19px",
                    color: "white",
                  }}
                >
                  <TableRow>

                    <TableCell className="text-white font-semibold"

                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      S.No
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Platform
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Customer Details
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Order Details
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      View
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders && filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex text-[15px]">{index + 1}</div>
                        </TableCell>
                        <TableCell align="center">
                          <div className="flex text-[17px]">
                            {platformLogos[order.Platform]} {order.Platform}
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className="flex flex-col text-[15px] ">
                            <span className="flex items-center gap-2">
                              <FaUser className="text-blue-500" />
                              {order.Customer}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaPhoneAlt className="text-green-500" />
                              {order.Contact}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-red-500" />
                              {order.deliveryAddress}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className="flex flex-col text-[15px] ">
                            <span className="flex items-center gap-2">
                              <GrCurrency className="text-yellow-500" />₹
                              {order.Amount}
                            </span>
                            <span className="flex items-center gap-2">
                              <MdOutlinePayment className="text-blue-500" />
                              Payment Method: {order.PaymentMethod}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaClock className="text-green-700" />
                              {order.Date} @ {order.Time}
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

      {/* Modal */}
      {modalIsOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[24px] font-semibold flex items-center">
                <FaClipboard className="mr-2 text-blue-600 text-[24px]" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes className="text-[30px]" />
              </button>
            </div>
            <div className="text-[15px]">
              <p className="mb-3 flex items-center">
                <FaBox className="mr-4 text-green-500 text-[20px]" />
                <strong className="text-gray-700">Order ID:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.OrderId}
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <FaUser className="mr-4 text-indigo-600 text-[20px]" />
                <strong className="text-gray-700">Customer:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.Customer}
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <FaPhoneAlt className="mr-4 text-teal-500 text-[20px]" />
                <strong className="text-gray-700">Contact:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.Contact}
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <FaClipboard className="mr-4 text-orange-500 text-[20px]" />
                <strong className="text-gray-700">Platform:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.Platform}
                </span>
              </p>
              
              <p className="mb-3 flex items-center">
                <FaCreditCard className="mr-4 text-purple-600 text-[20px]" />
                <strong className="text-gray-700">Payment Method:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.PaymentMethod}
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <FaMapMarkerAlt className="mr-4 text-red-500 text-[20px]" />
                <strong className="text-gray-700">Address:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.deliveryAddress}
                </span>
              </p>
              <p className="mb-3 flex items-center">
                <FaCalendarAlt className="mr-4 text-blue-500 text-[20px]" />
                <strong className="text-gray-700">Order Date:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.Date} @ {selectedOrder.Time}
                </span>
              </p>
              <p className="mb-5 flex items-center">
                <FaCheckCircle className="mr-4 text-green-600 text-[20px]" />
                <strong className="text-gray-700">Status:</strong>
                <span className="ml-2 text-gray-900">
                  {selectedOrder.Status}
                </span>
              </p>
              {selectedOrder.OrderType && (
                <p className="mb-5 flex items-center">
                  <FaBox className="mr-4 text-indigo-600 text-[20px]" />
                  <strong className="text-gray-700">Order Type:</strong>
                  <span className="ml-2 text-gray-900">
                    {selectedOrder.OrderType}
                  </span>
                </p>
              )}
              <h3 className="text-[18px] font-semibold mt-0 mb-3 flex items-center text-blue-600">
                <FaListAlt className="mr-2 text-blue-600" />
                Order Items
              </h3>
              <div className="list-disc ml-6">
                {selectedOrder.OrderItems.map((item, index) => (
                  <p key={index} className="mb-3 flex items-center">
                    <FaArrowRight className="mr-2 text-red-600 text-[18px]" />
                    <span className="text-gray-800">
                      {item.item} <strong>{item.quantity}</strong> × ₹
                      {item.price}
                    </span>
                  </p>
                  
                ))}
                
              </div>
              <p className="mb-3 flex items-center">
                <FaMoneyBillAlt className="mr-4 text-yellow-500 text-[20px]" />
                <strong className="text-gray-700">Grand Total:</strong>
                <span className="ml-2 text-gray-900">
                  ₹{selectedOrder.Amount}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
