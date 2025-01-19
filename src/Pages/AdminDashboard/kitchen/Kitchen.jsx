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

const Kitchen = () => {
  const [filter, setFilter] = useState("All");
  const [orders, setOrders] = useState(kitchOrder);

  const filteredOrders = 
  filter == "All" ? orders : orders.filter((order) => order.status === filter);
  

  // Toggle status on click
  const toggleStatus = (index) => {
    const updatedOrders = orders.map((order, i) =>
      i === index
        ? { ...order, status: order.status === "Pending" ? "Ready" : "Pending" }
        : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] mt-10 pr-10">
        {/* Filter Buttons */}
        <div className="flex gap-8">
        <button
            onClick={() => setFilter("All")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "All"
                ? "text-red-500 border-b-4 border-red-500 rounded-md"
                : "hover:text-red-500 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Pending")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "Pending"
                ? "text-red-500 border-b-4 border-red-500 rounded-md"
                : "hover:text-red-500 hover:bg-gray-50"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("Ready")}
            className={`bg-white flex text-[19px] px-10 py-2.5 shadow-sm ${
              filter === "Ready"
                ? "text-red-500 border-b-4 border-red-500 rounded-md"
                : "hover:text-red-500 hover:bg-gray-50"
            }`}
          >
            Ready
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
                        Order Item
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                        Order Type
                    </TableCell>
                    <TableCell className="text-white font-semibold"
                    sx={{ bgcolor: "#22c55e" ,fontWeight: "bold",fontSize: "19px", color: "white" }}
                    >
                        Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell><div className="flex text-[15px]">{index + 1}</div></TableCell>
                      <TableCell><div className="flex text-[15px]"> {order.platform}</div></TableCell>
                      <TableCell><div className="flex text-[15px]">{order.orderItem}</div></TableCell>
                      <TableCell><div className="flex text-[15px]">{order.orderType}</div></TableCell>
                      <TableCell>
                        <button
                          onClick={() => toggleStatus(index)}
                          className={`${
                            order.status === "Pending" ? "text-red-500 text-[15px]" : "text-green-500 text-[15px]"
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
