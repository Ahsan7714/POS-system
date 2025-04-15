import axios from "axios";
import React, { useState } from "react";
import {  RxUpload } from "react-icons/rx";
import { server } from "../../server";
import toast from "react-hot-toast";


const AddItems = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [image, setImage] = useState(null);


  if (!isOpen) return null;

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Restaurant-isris"); // replace this with your preset
  
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dt6skdss9/image/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      setImage(data.secure_url); // set image URL to state
    } catch (error) {
      console.error("Cloudinary upload failed", error);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${server}/menu/createItem`,{name:itemName,category:itemCategory,price:itemPrice,image:image},{withCredentials:true}).then((res)=>{
      toast.success(res.data.message);
      setItemName("");
      setItemCategory("");
      setItemPrice("");
      setImage(null);
      onClose();
      window.location.reload();
    }).catch((error)=>{
      toast.error(error.response.data.message);
    })
  };

  const triggerImageUpload = () => {
    document.getElementById("image").click();
  };

  return (
    <div className="fixed pt-3 pb-3 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  ">
      <div className="bg-white p-6 rounded-md shadow-lg relative w-[90%] max-w-lg  h-full overflow-auto">
        <div
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </div>
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form className="space-x-4" onSubmit={handleSubmit}>
          <div
            className={`flex flex-col justify-center items-center mt-4  rounded-lg cursor-pointer transition-all duration-300 
                ${
                  image
                    ? "border-2 border-solid border-green-500 bg-green-50 shadow-md p-1"
                    : "border-2 border-dashed border-gray-400 hover:border-green-500 hover:bg-green-50 p-4"
                }`}
            onClick={triggerImageUpload}
          >
            {image ? (
              <img
                src={image}
                className="w-full h-auto max-h-[250px] object-contain rounded-lg"
                alt="Uploaded Item"
              />
            ) : (
              <>
                <RxUpload size={40} className="text-green-500 mb-3" />
                <p className="text-gray-600 font-semibold text-center">
                  <span className="block text-lg text-green-600">
                    Click to Upload
                  </span>
                  <span className="block text-sm font-normal text-gray-500">
                    or drag and drop your image here
                  </span>
                </p>
              </>
            )}
            <input
              type="file"
              id="image"
              name="image"
              className="hidden"
              onChange={handleImage}
              accept="image/*"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2 outline-none focus:border-green-500"
              placeholder="Enter item name"
            />
          </div>

          <div className="mt-4">
  <label className="block text-sm font-medium text-gray-700">
    Item Category
  </label>
  <select
    value={itemCategory}
    onChange={(e) => setItemCategory(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded-md mt-2 outline-none focus:border-green-500"
  >
    <option value="">Select a category</option>
    <option value="Burger">Burger</option>
    <option value="Pizza">Pizza</option>
    <option value="Snacks">Snacks</option>
    <option value="Desserts">Desserts</option>
    <option value="Drinks">Drinks</option>
    <option value="Beverages">Beverages</option>
    <option value="Soups">Soups</option>
    <option value="Salads">Salads</option>
  </select>
</div>


          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Price
            </label>
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2 outline-none focus:border-green-500"
              placeholder="Enter item price"
            />
          </div>

          <div className=" mt-4 flex justify-between">
            <div className=" flex gap-2 items-center ">
              <input type="checkbox" className=" w-4 h-4" />
              <span className=" font-semibold">Deliveroo</span>
            </div>
            <div className=" flex gap-2 items-center ">
              <input type="checkbox" className=" w-4 h-4" />
              <span className=" font-semibold">JustEat</span>
            </div>
            <div className=" flex gap-2 items-center ">
              <input type="checkbox" className=" w-4 h-4" />
              <span className=" font-semibold">UberEats</span>
            </div>
            <div className=" flex gap-2 items-center ">
              <input type="checkbox" className=" w-4 h-4" />
              <span className=" font-semibold">IRIS</span>
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
