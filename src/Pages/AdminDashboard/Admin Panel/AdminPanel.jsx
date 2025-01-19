import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AiOutlineUser } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { userData } from "../../../data/user";

const AdminPanel = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex min-h-screen font-outfit bg-gray-100">
      
      <div className="w-64 bg-green-500 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 hover:text-green-200 cursor-pointer">
            <AiOutlineUser size={20} />
            <span className="text-lg font-medium">Users</span>
          </div>
        </nav>
      </div>

      
      <div className="pt-10 w-full px-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">All User</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
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
                    sx={{
                      bgcolor: "#22c55e",
                      fontWeight: "bold",
                      fontSize: "19px",
                      color: "white",
                    }}
                  >
                    Owner Name
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#22c55e",
                      fontWeight: "bold",
                      fontSize: "19px",
                      color: "white",
                    }}
                  >
                    Restaurent Name
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#22c55e",
                      fontWeight: "bold",
                      fontSize: "19px",
                      color: "white",
                    }}
                  >
                    Email Address
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#22c55e",
                      fontWeight: "bold",
                      fontSize: "19px",
                      color: "white",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex text-[15px]">{index + 1}</TableCell>
                    <TableCell className="flex text-[15px]">{user.ownerName}</TableCell>
                    <TableCell className="flex text-[15px]">{user.restaurantName}</TableCell>
                    <TableCell className="flex text-[15px]">{user.email}</TableCell>
                    <TableCell>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => setOpen(true)}
                      >
                        <MdDeleteOutline size={32} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      {open && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-[90%] md:w-[40%] p-5 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setOpen(false)}
            >
              <RxCross1 size={25} />
            </button>
            <h3 className="text-center text-[22px] font-semibold text-gray-800 py-4">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex items-center justify-center gap-4">
              <button
                className="bg-gray-700 text-white px-6 py-2 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
