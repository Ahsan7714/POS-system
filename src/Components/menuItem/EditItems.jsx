import React, { useState, useEffect } from "react";
import { RxAvatar, RxUpload } from "react-icons/rx";

const EditItems = ({ isOpen, onClose, item }) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (item) {
      setItemName(item.name);
      setItemCategory(item.category);
      setItemPrice(item.price);

      const itemImage =
        item.images && item.images[0] ? item.images[0].url : null;
      setImage(itemImage || RxAvatar);
    }
  }, [item, isOpen]);

  if (!isOpen) return null;

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  const triggerImageUpload = () => {
    document.getElementById("image").click();
  };

  return (
    <div className="fixed pt-3 pb-3  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative w-[90%] max-w-lg h-full overflow-auto">
        <div
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </div>
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
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
            ) : (null)}
             
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

          <button
            type="submit"
            className="bg-[#22c55e] text-white py-2.5 px-7 font-medium rounded-md mt-4"
          >
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItems;
