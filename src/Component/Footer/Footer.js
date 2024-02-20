// create a attractive and responsive footer for the website

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/images/invoicewala-logo-copy.png';
import { FaBars, FaCross, FaXRay } from 'react-icons/fa';
import Xmark_cross from "../../assets/svg/Xmark-solid.svg"
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
      <div className="bg-gray-800 text-white">
        <div className="flex justify-between items-center p-8">
          <div>
            <img src={logo} alt="logo" className="h-10" />
          </div>
        </div>
        <div className="flex flex-col  md:flex-row justify-between p-8">
            <div className="flex-1">
                <h1 className="text-2xl">Contact Us</h1>
                <div className="flex space-x-4">
                    <MdEmail className="text-white" />
                    <p> hello@tektisys.in </p>
                </div>
                <div className="flex space-x-4">
                    <FiPhone className="text-white" />
                    <p>+91 9073463848</p>
                </div>
                {/* add address */}
                <div className="flex space-x-4">
                    <FaLocationArrow className="text-white" />
                    <p>1ST-FR, FL-1A, 393 PURBACHAL MAIN RD, Haltu, Kolkata West Bengal 700078</p>

                </div>
                 
                

                
            </div>

            <div className="flex-1">
                <h1 className="text-2xl">About Us</h1>
                <p className="text-white ">
                    Welcome to Invoicewala! In today's digital era, we recognize the
                    importance of streamlining operations, enhancing customer
                    engagement, and embracing eco-friendly billing. With our
                    platform, you can easily share invoices via WhatsApp,
                    revolutionizing e-invoicing while reducing environmental impact.
                    Discover how Invoicewala can optimize your business operations
                    and empower your organization for success. Join us in paving the
                    way for efficiency, effectiveness, and eco-friendly
                    billing solutions.
                </p>
                <p className="text-white">
                    A product from: Tektisys Consultancy Solution Pvt. Ltd.
                </p>
               
            </div>
            
            <div className="flex-1 md:text-right ">
                <h1 className="text-2xl">Quick Links</h1>
                <Link to="/" className="block">
                    Home
                </Link>
                <Link to="/pricing" className="block">
                    Pricing
                </Link>
                <Link to="/faqs" className="block">
                    FAQs
                </Link>
                <Link to="https://app.invoicewala.com" className="block">
                    Portal
                </Link>
                <Link to="/contact" className="block">
                    Contact
                </Link>
            </div>
        </div>
        <div className="text-center p-4 bg-gray-900">
          <p>&copy; 2024 InvoiceWala. All Rights Reserved.</p>
        </div>
      </div>
    );
}

export default Footer;