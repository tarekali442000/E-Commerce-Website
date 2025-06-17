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
    <div>
      <div className="container mx-auto px-4 py-8 mt-20">
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
      <div className="container mx-auto px-4 py-8 mt-20">
        <h2 className="text-3xl font-bold mb-4">Product Ratings & Reviews</h2>
        <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-96 hover:border-indigo-600">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="https://pagedone.io/asset/uploads/1695365794.png"
              alt="Jane avatar"
            />
            <div className="grid gap-1">
              <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                Jane D
              </h5>
              <span className="text-sm leading-6 text-gray-500">CEO </span>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-2 text-amber-500 transition-all duration-500  ">
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p class="text-sm text-gray-500 leading-6 transition-all duration-500  group-hover:text-gray-800">
            {" "}
            The user interface of this pagedone is so intuitive, I was able to
            start using it without any guidance.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
