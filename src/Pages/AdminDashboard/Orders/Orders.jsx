import React, { useState } from "react";
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

function Orders() {
  const platformLogos = {
    Zomato: "🍽️",
    Swiggy: "🛵",
    UberEats: "🚗",
    FoodPanda: "🐼",
  };

  const [filteredOrders, setFilteredOrders] = useState(orderData);

  // Function to filter orders based on status
  const filterOrders = (status) => {
    if (status === "All") {
      setFilteredOrders(orderData); // Reset to all orders
    } else {
      setFilteredOrders(orderData.filter((order) => order.Status === status));
    }
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        {/* OrderNav component for filtering */}
        <OrderNav setOrderStatus={filterOrders} />
        <div className="p-9">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ bgcolor: "#FF1493" ,fontWeight: "bold",fontSize: "19px", color: "white" }}>
                  <TableRow>
                    <TableCell
                      align="center"
                      className="text-white  font-semibold"
                      sx={{ bgcolor: "#FF1493" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Platform
                    </TableCell>
                    <TableCell
                      className="text-[24px] font-semibold"
                      sx={{ bgcolor: "#FF1493" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Customer Details
                    </TableCell>
                    <TableCell
                      className="text-[24px] font-semibold"
                      sx={{ bgcolor: "#FF1493" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      Order Details
                    </TableCell>
                    <TableCell
                      className="text-white text-[24px] font-semibold"
                      sx={{ bgcolor: "#FF1493" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                      View
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map(
                    (
                      order,
                      index // Use filteredOrders instead of orderData
                    ) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          <div className="flex items-center justify-center text-[20px]">
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
                              <FaClock className="text-green-700" />
                              {order.Date} @ {order.Time}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <button className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md gap-1">
                            <FaRegEye />
                            View
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Orders;
