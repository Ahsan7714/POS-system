import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSearch,
} from "react-icons/ai";
import AddItems from "../../../Components/menuItem/AddItems";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditItems from "../../../Components/menuItem/EditItems";
import { useDispatch, useSelector } from "react-redux";
import { allMenuItems } from "../../../redux/action/menu";
// import { menuItems } from "../../../data/menuItems";
import axios from "axios";
import { server } from "../../../server";
import toast from "react-hot-toast";
import Loader from "../../../Components/Spinner/Loader";

const MenuItems = () => {
  const { menuItems, loading } = useSelector((state) => state.menu);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMenuItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    axios
      .delete(`${server}/menu/deleteItem/${id}`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        setDeleteItem(false);
        dispatch(allMenuItems());
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setSearchData([]);
    } else {
      const filteredItems = menuItems.filter((menu) =>
        menu.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(filteredItems);
    }
  };

  const filteredItems = searchTerm
    ? menuItems.filter((menu) =>
        menu.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : menuItems;

  const handleSuggestionClick = (itemName) => {
    setSearchTerm(itemName);
    setSearchData([]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditClose = () => {
    setEditOpen(false);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditOpen(true);
  };

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] mt-10 pr-10">
        <div className="flex justify-between">
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#22c55e] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData.length > 0 && (
              <div className="absolute min-h-[30vh] max-h-[50vh] overflow-auto bg-slate-50 shadow-md z-[9] p-4">
                {searchData.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(item.name)}
                  >
                    <img
                      src={item ? item.image : null}
                      alt={item.name}
                      className="w-[40px] h-[40px] mr-[10px] rounded"
                    />
                    <h1 className="text-sm font-medium">{item.name}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            className="bg-[#22c55e] flex  text-white py-2.5 px-7 font-medium rounded-md"
            onClick={() => setOpen(true)}
          >
            Add Item
          </button>
        </div>
        <AddItems isOpen={open} onClose={handleClose} />
        <div className="mt-10">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead
                  sx={{
                    bgcolor: "",
                    fontWeight: "bold",
                    fontSize: "19px",
                    color: "black",
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
                      Name
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
                      Category
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
                      Price
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
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <Loader />
                  ) : filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>£{item.price}</TableCell>
                        <TableCell>
                          <div className="flex gap-4">
                            <button
                              className="text-green-700"
                              onClick={() => handleEditClick(item)}
                            >
                              <AiOutlineEdit size={20} />
                            </button>
                            <button
                              className="text-red-700"
                              onClick={() =>
                                setDeleteItem(true) || setDeleteItem(item)
                              }
                            >
                              <AiOutlineDelete size={20} />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        No Data Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>

      <EditItems isOpen={editOpen} onClose={EditClose} item={selectedItem} />
      <DeleteItem
        isOpen={deleteItem}
        onClose={() => setDeleteItem(false)}
        handleDelete={handleDelete}
        item={deleteItem}
      />
    </div>
  );
};

export const DeleteItem = ({ isOpen, onClose, handleDelete, item }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-[999] flex justify-center items-center">
          <div className="bg-white p-10 rounded-md">
            <h1 className="text-2xl font-semibold">
              Are you sure you want to delete this item?
            </h1>
            <div className="flex justify-center gap-4 mt-5">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md transition hover:scale-105"
                onClick={onClose}
              >
                No
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md transition hover:scale-105"
                onClick={() => handleDelete(item._id)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
