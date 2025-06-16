import React from "react";
import ProductCard from "./ProductCard";
import NotFound from "../imgs/undraw_file-search_cbur.svg";

import { useSelector } from "react-redux";

function ProductGrid() {
  const products = useSelector((state) => state.products?.filteredItems || []);

  //Handle Not Found Product
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 my-10 py-10 text-center">
        {/* SVG Image */}
        <img src={NotFound} alt="no results" className="w-52 h-52 mb-4" />

        <p className="text-xl font-semibold text-gray-600">Product Not Found</p>
        <p className="text-sm text-gray-400 mt-1">
          Try searching with another word or check your spelling.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24 animate-fade-in delay-200">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductGrid;
