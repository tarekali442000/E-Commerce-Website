import React from "react";
// import logo from "/assets/imgs/logo.png";
import technoLogo from "/assets/imgs/image-removebg-preview.png";
import footerLogo from "/assets/imgs/footer-logo.jpg";

import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center flex-col md:flex-row py-10">
          <h2 className="text-3xl font-bold text-white ">
            Subscribe to Get the Latest Updates
          </h2>
          <form className="w-full md:w-1/3 mt-8 md:mt-0 relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full py-4 px-4 rounded shadow-md"
            />
            <button
              type="submit"
              className="bg-gray-200 px-4 py-3 rounded-full cursor-pointer absolute top-1 right-3"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="mx-4">
              <a href="/">
                <img
                  src={footerLogo}
                  alt="logo"
                  className="my-4 w-48 h-15 rounded cursor-pointer  "
                />
              </a>
              <p className="text-sm">
                We offer top brands like ASUS, MSI, Gigabyte, and more—all
                curated for gamers, creators, and professionals who demand the
                best. Shop now and build the ultimate rig!
              </p>
              <div className="flex items-center mt-5 gap-8 ">
                <div className="cursor-pointer bg-white text-black rounded-md hover:bg-zinc-400 ">
                  <Facebook
                    size={35}
                    className="cursor-pointer  rounded-md p-2"
                  />
                </div>
                <div className="cursor-pointer bg-white text-black rounded-md hover:bg-zinc-400 ">
                  <Github
                    size={35}
                    className="cursor-pointer  rounded-md p-2"
                  />
                </div>
                <div className="cursor-pointer bg-white text-black rounded-md hover:bg-zinc-400 ">
                  <Linkedin
                    size={35}
                    className="cursor-pointer  rounded-md p-2"
                  />
                </div>
                <div className="cursor-pointer bg-white text-black rounded-md hover:bg-zinc-400 ">
                  <Twitter
                    size={35}
                    className="cursor-pointer  rounded-md p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mx-4">
              <h2 className="text-2xl font-semibold my-4">Quick Links</h2>
              <ul>
                <li className="text-sm">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">About</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">FAQs</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="mx-4">
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <ul>
                <li className="text-sm">
                  <Link to="/">Monitors</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">Laptops</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">GPUs</Link>
                </li>
                <li className="text-sm">
                  <Link to="/">PowerSupply</Link>
                </li>
              </ul>
            </div>
            <div className="mx-4">
              <h2 className="text-2xl font-semibold my-4">Contact Info</h2>
              <p className="text-sm">your address</p>
              <p className="text-sm ">your phone</p>
              <p className="text-sm ">your email</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-4 mx-auto ">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Tarek Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
