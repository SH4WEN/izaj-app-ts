import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import light1 from "/src/assets/image/light1.jpg";
import { useSidebar } from "../Sidebar/SidebarContext";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
  status: "Pending" | "Approved" | "Rejected";
  imageUrl: string;
  description: string;
}

interface BranchLocation {
  location: string;
}

function Awaiting_approval() {
  const navigate = useNavigate();
  const { isCollapsed } = useSidebar();

  const initialProduct: Product = {
    id: "001",
    name: "LED Bulb",
    category: "Bulbs",
    price: "Php 599.99",
    quantity: 100,
    status: "Pending",
    imageUrl: light1,
    description:
      "This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb.",
  };

  const branch_location: BranchLocation = {
    location: "Lucena",
  };

  const [product] = useState<Product>(initialProduct);
  const [branch] = useState<BranchLocation>(branch_location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request Accepted!");
  };

  const handleBackToAllStock = () => {
    navigate("/pending_request");
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "ml-5" : "ml-1"
      } p-2 sm:p-4`}
    >
      <div className="p-6 max-w-4xl ml-80 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">{branch.location}</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
              <h5 className="text-lg font-semibold mb-2 text-gray-600">
                {product.category}
              </h5>
              <h5 className="text-lg font-semibold mb-2 text-green-500">
                {product.status}
              </h5>
              <h5 className="text-lg font-semibold mb-2 text-blue-600">
                {product.price}
              </h5>
              <p className="text-sm text-gray-700 mb-4">
                Quantity: {product.quantity}
              </p>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleBackToAllStock}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Awaiting_approval;
