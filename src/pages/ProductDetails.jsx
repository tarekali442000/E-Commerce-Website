import React from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "/assets/imgs/undraw_file-search_cbur.svg";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-80  mt-20 py-20 text-center ">
        {/* SVG Image */}
        <img src={NotFound} alt="no results" className="w-60 h-60 mb-4" />

        <p className="text-xl font-semibold text-gray-600">Product Not Found</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <Link to="/" className="mb-8 inline-block  hover:text-gray-600">
          ◀ Back to Home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* صورة المنتج */}
          <div className="shadow-md py-4 rounded w-full max-w-md mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* التفاصيل */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <span className="inline-block bg-gray-200 py-1 px-3 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <button
              className="w-full md:w-auto bg-black text-white py-4 px-8 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
