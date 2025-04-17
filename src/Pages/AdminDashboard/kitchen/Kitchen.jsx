import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { kitchOrder } from "../../../data/kitchen";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../../server";
import toast from "react-hot-toast";

const Kitchen = () => {
  const { orders } = useSelector((state) => state.order);
  const [filter, setFilter] = useState("All");
  const [type, setType] = useState("");

  const filteredOrders = orders.filter((order) => {
    const statusMatch = filter === "All" || order.status === filter;
    const typeMatch = type === "" || order.orderType === type;
    return statusMatch && typeMatch;
  });

  const statusChange = (id) => {
    axios
      .put(`${server}/order/changeStatus/${id}`, {}, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] mt-10 pr-10">
        {/* Filter Buttons */}
        <div className="flex gap-8">
          <button
            onClick={() => {
              setFilter("All");
              setType("");
            }}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "All"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Pending")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "Pending"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("Ready")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "Ready"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            Ready
          </button>

          <button
            onClick={() => setType("dine-in")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              type === "dine-in"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            Dine In
          </button>

          <button
            onClick={() => setType("takeaway")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              type === "takeaway"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            Takeaway
          </button>

          <button
            onClick={() => setType("Delivery")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              type === "Delivery"
                ? "text-green-500 border-b-4 border-green-500 rounded-md"
                : "hover:text-green-500 hover:bg-gray-50"
            }`}
          >
            Delivery
          </button>
        </div>

        {/* Orders Table */}
        <div className="pt-10">
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
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      S.No
                    </TableCell>
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      Platform
                    </TableCell>
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      Order Item
                    </TableCell>
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      Order Type
                    </TableCell>
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      Order Time
                    </TableCell>
                    <TableCell
                      className="text-white font-semibold"
                      sx={{
                        bgcolor: "#22c55e",
                        fontWeight: "bold",
                        fontSize: "19px",
                        color: "white",
                      }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex text-[15px]">{index + 1}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex text-[15px]">
                          {" "}
                          {order.platforms}
                        </div>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <div className="flex flex-col gap-1 text-sm">
                          {order.items.map((orderItem, idx) => (
                            <div key={idx} className="flex justify-between">
                              <span>
                                {orderItem.quantity} {orderItem.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex text-[15px]">
                          {order.orderType}
                        </div>
                      </TableCell>
                      <TableCell>
  <div className="flex text-[15px]">
    {new Date(`1970-01-01T${order.customerDetails.ordertime}:00`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })}
  </div>
</TableCell>

                      <TableCell>
                        <button
                          onClick={() => statusChange(order._id)}
                          className={`${
                            order.status === "Pending"
                              ? "text-red-500 text-[15px]"
                              : "text-green-500 text-[15px]"
                          }`}
                        >
                          {order.status}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
