import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/invoicewala-logo-copy.png';
import { FaBars, FaCross, FaXRay } from 'react-icons/fa';
import Xmark_cross from "../../assets/svg/Xmark-solid.svg"

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        
        setShowSidebar(!showSidebar);
    };

    return (
      <nav
        className="flex justify-between items-center h-16 bg-gray-800 text-white relative shadow-sm"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className={`pr-8 md:block hidden `}>
          <Link to="/" className="p-4">
            Home
          </Link>
          <Link to="/pricing" className="p-4">
            Pricing
          </Link>
          <Link to="https://app.invoicewala.com" className="p-4">
            Portal
          </Link>
          <Link to="/contact" className="p-4">
            Contact
          </Link>
        </div>
        {/* sidebar view for smal devices */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <img src={Xmark_cross} alt="close" className="h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Link to="/" className="p-4">
              Home
            </Link>
            <Link to="/services" className="p-4">
              Services
            </Link>
            <Link to="/products" className="p-4">
              Products
            </Link>
            <Link to="/contact" className="p-4">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
