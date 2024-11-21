import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FiCamera } from "react-icons/fi"; // Camera icon for upload
import { AiOutlineCamera } from "react-icons/ai";

const AddItems = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [image, setImage] = useState(null);

  if (!isOpen) return null;

  const handleImage = (e) => {
    e.preventDefault();
    const file = new FileReader();

    file.onload = () => {
      setImage(file.result);
    };

    file.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log("Item Added:", itemName, itemCategory, itemPrice, image);
    onClose(); // Close the modal after submitting the item
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative w-[90%] max-w-lg">
        <div
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </div>
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form className="space-x-4" onSubmit={handleSubmit}>
          <div className="flex justify-center w-full">
            <div className="relative">
              {image ? (
                <img
                  src={image}
                  className="w-[100px] h-[100px] rounded-full object-cover border-[3px] border-[#3ad132]"
                  alt="Avatar"
                />
              ) : (
                <RxAvatar className="w-[100px] h-[100px] rounded-full border-[3px] border-[#3ad132]" />
              )}
              <div className="w-[25px] h-[25px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter item name"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Category
            </label>
            <input
              type="text"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter item category"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Price
            </label>
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter item price"
            />
          </div>

          <div className=" mt-4 flex justify-between">
            <div className=" flex gap-2 items-center ">
                <input type="checkbox" className=" w-4 h-4" />
                <span className=" font-semibold">🍴 Deliveroo</span>
            </div>
            <div className=" flex gap-2 items-center ">
                <input type="checkbox" className=" w-4 h-4" />
                <span className=" font-semibold">🍔 JustEat</span>
            </div>
            <div className=" flex gap-2 items-center ">
                <input type="checkbox" className=" w-4 h-4" />
                <span className=" font-semibold">🍕 UberEats</span>
            </div>
          </div>
          <div className=" mt-4 flex justify-between">
            
            <div className=" flex gap-2 items-center ">
                <input type="checkbox" className=" w-4 h-4" />
                <span className=" font-semibold">🚙 Lyft</span>
            </div>
            <div className=" flex gap-2 items-center ">
                <input type="checkbox" className=" w-4 h-4" />
                <span className=" font-semibold">🍳 BiteHub</span>
            </div>
          </div>


          <button
            type="submit"
            className="bg-[#22c55e] text-white py-2.5 px-7 font-medium rounded-md mt-4"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
