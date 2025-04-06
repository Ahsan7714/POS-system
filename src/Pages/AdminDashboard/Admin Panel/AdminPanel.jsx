import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allUser } from "../../../redux/action/user";
import axios from "axios";
import { server } from "../../../server";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(allUser());
  }, [dispatch]);

  const logoutHandler = () =>{
    axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
      toast.success(res.data.message);
      navigate("/login")
    }).catch((error)=>{
      toast.error(error.response.data.message);
    })
  }

  const handleDelete = async (id) => {
    axios
      .delete(`${server}/user/deleteUser/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        setOpen(false);
        dispatch(allUser());
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="flex min-h-screen font-outfit bg-gray-100">
      <div className="w-64 bg-gradient-to-b from-green-600 to-green-800 text-white flex flex-col py-8 px-6 shadow-lg rounded-r-xl">
  <h2 className="text-3xl font-bold mb-10 tracking-wide text-center">Admin</h2>
  <nav className="space-y-4">
    <Link
      to="/admin"
      className={`${
        location.pathname === "/admin"
          ? "bg-white text-green-700 font-semibold"
          : "text-white hover:bg-green-700 hover:bg-opacity-70"
      } flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300`}
    >
      <AiOutlineUser size={22} />
      <span className="text-lg">Users</span>
    </Link>

    <button
      onClick={logoutHandler}
      className="flex items-center gap-3 py-3 px-4 rounded-lg text-white"
    >
      <AiOutlineLogout size={22} />
      <span className="text-lg">Logout</span>
    </button>
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
                    Restaurant Name
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
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex text-[15px]">
                      {index + 1}
                    </TableCell>
                    <TableCell className="flex text-[15px]">
                      {user.name}
                    </TableCell>
                    <TableCell className="flex text-[15px]">
                      {user.restaurantName}
                    </TableCell>
                    <TableCell className="flex text-[15px]">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => {
                          setOpen(true);
                          setId(user._id);
                        }}
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
                onClick={() => setOpen(false) || handleDelete(id)}
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
