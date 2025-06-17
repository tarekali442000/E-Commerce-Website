import { ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "/assets/imgs/nav-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Top row for mobile - logo and icons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start ">
            <Link to="/" className="block">
              <img
                src={navLogo}
                alt="logo"
                className="md:w-72 md:h-16 w-40 h-10 object-contain rounded-md cursor-pointer"
              />
            </Link>
          </div>

          {/* Icons for mobile */}
          <div className="flex gap-4 md:hidden">
            <div className="relative">
              <User
                size={32}
                className="bg-gray-200 p-1.5 rounded cursor-pointer hover:bg-zinc-400"
                onClick={handleUser}
              />
              {isOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
                  <li>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      Sign
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      My Account
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="relative">
              <Link to="/cart">
                <ShoppingCart
                  size={32}
                  className="bg-gray-100 p-1.5 rounded-full cursor-pointer hover:bg-zinc-400"
                />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links - hidden on mobile, shown on desktop */}
        <ul className="flex justify-center gap-12 font-medium  flex-wrap md:flex-nowrap text-md border-t pt-4 border-gray-200 md:border-none md:pt-0 border-b md:border-b-0 pb-4 md:pb-0">
          <li>
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-600">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Input - shown on both mobile and desktop */}
        <form className="w-full lg:w-1/5">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-2 px-3 w-full text-sm"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </form>

        {/* Icons for desktop - hidden on mobile */}
        <div className="hidden md:flex justify-end md:order-3 gap-4">
          <div className="relative">
            <User
              size={32}
              className="bg-gray-200 p-1.5 rounded cursor-pointer hover:bg-zinc-400"
              onClick={handleUser}
            />
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Sign
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    My Account
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="relative">
            <Link to="/cart">
              <ShoppingCart
                size={32}
                className="bg-gray-100 p-1.5 rounded-full cursor-pointer hover:bg-zinc-400"
              />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
