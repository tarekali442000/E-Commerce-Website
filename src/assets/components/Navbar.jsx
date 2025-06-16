// import { ShoppingCart, User } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../imgs/logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../../features/products/ProductSlice";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state.products.searchTerm);

//   //cart
//   const cartItems = useSelector((state) => state.cart.items);
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   // user toggle
//   const handleUser = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <header className="bg-w shadow-md">
//       <>
//         <div className="py-4 shadow-md">
//           <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
//             <div className="flex gap-4">
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   FAQs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   Contact
//                 </Link>
//               </li>
//             </div>
//             <div
//               className={`${
//                 isOpen
//                   ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 rounded"
//                   : "hidden"
//               }`}
//             >
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   Sign
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-gray-600">
//                   My Account
//                 </Link>
//               </li>
//             </div>
//             <User
//               size={40}
//               className="bg-gray-200 p-2 text-black rounded cursor-pointer hover:bg-zinc-400"
//               onClick={handleUser}
//             />
//           </ul>
//         </div>

//         <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
//           <div className="flex items-center">
//             <Link to="/" className="py-2 pr-4 rounded">
//               <img src={logo} alt="logo" className="w-48 h-12 rounded" />
//             </Link>
//           </div>
//           <form className="w-1/2 sm:block hidden">
//             <input
//               type="text"
//               placeholder="Search Product"
//               className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-3 px-3 w-full"
//               value={searchTerm}
//               onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//             />
//           </form>
//           <div className="relative">
//             <Link to={"/cart"}>
//               <ShoppingCart
//                 size={54}
//                 className="bg-gray-100 px-3 py-2  rounded-full cursor-pointer hover:bg-zinc-400"
//               />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </nav>
//       </>
//     </header>
//   );
// }

// export default Navbar;

// import { ShoppingCart, User } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../imgs/logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../../features/products/ProductSlice";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state.products.searchTerm);
//   const cartItems = useSelector((state) => state.cart.items);
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const handleUser = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white shadow-md w-full">
//       <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         {/* icons at the top on mobile */}
//         <div className="flex justify-between">
//           {/* Logo */}
//           <div className="flex justify-center md:justify-start">
//             <Link to="/" className="block">
//               <img src={logo} alt="logo" className="w-40 h-10 object-contain" />
//             </Link>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex justify-center gap-6 flex-wrap md:flex-nowrap text-sm">
//           <li>
//             <Link to="/" className="hover:text-gray-600">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="hover:text-gray-600">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="hover:text-gray-600">
//               FAQs
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="hover:text-gray-600">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Search Input */}
//         <form className="w-full md:w-1/3">
//           <input
//             type="text"
//             placeholder="Search Product"
//             className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-2 px-3 w-full text-sm"
//             value={searchTerm}
//             onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//           />
//         </form>
//         <div className="flex justify-end md:order-3 gap-4">
//           <div className="relative">
//             <User
//               size={32}
//               className="bg-gray-200 p-1.5 rounded cursor-pointer hover:bg-zinc-400"
//               onClick={handleUser}
//             />
//             {isOpen && (
//               <ul className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
//                 <li>
//                   <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
//                     Sign
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
//                     My Account
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className="relative">
//             <Link to="/cart">
//               <ShoppingCart
//                 size={32}
//                 className="bg-gray-100 p-1.5 rounded-full cursor-pointer hover:bg-zinc-400"
//               />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import brandLogo from "../imgs/brandLogo.jpg";
import technoLogo from "../imgs/image-removebg-preview.png";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../features/products/ProductSlice";

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
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Top row for mobile - logo and icons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start ">
            <Link to="/" className="block">
              <img
                src={technoLogo}
                alt="logo"
                className="md:w-80 md:h-20 w-40 h-10 object-contain rounded-md"
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
        <ul className="flex justify-center gap-8 font-medium  flex-wrap md:flex-nowrap text-md border-t pt-4 border-gray-200 md:border-none md:pt-0 border-b md:border-b-0 pb-4 md:pb-0">
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
        <form className="w-full md:w-1/3">
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
