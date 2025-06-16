import { Link } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer">
        <div className="h-48 overflow-hidden rounded-t-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="text-base font-semibold text-gray-800 mb-2 line-clamp-1">
            {product.title.substring(0, 25) + "..."}
          </h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">${product.price}</p>
            <p className="text-sm">View Details{" >>"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
