// create a attractive and responsive footer for the website

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
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
                <div className="flex space-x-4">
                    <Link to="/" className="text-white">
                        <FaFacebook />
                    </Link>
                    <Link to="/" className="text-white">
                        <FaInstagram />
                    </Link>
                    <Link to="/" className="text-white">
                        <FaTwitter />
                    </Link>
                    <Link to="/" className="text-white">
                        <FaYoutube />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between p-8">
                <div>
                    <h1 className="text-2xl">Contact Us</h1>
                    <div className="flex space-x-4">
                        <MdEmail className="text-white" />
                        <p>
                        invoicewala12@gmail.Com
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <FiPhone className="text-white" />
                        <p>
                        1234567890
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl">About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quos, quae, fugiat, cumque, voluptas distinctio magni
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl">Quick Links</h1>
                    <Link to="/" className="block">
                        Home
                    </Link>
                    <Link to="/pricing" className="block">
                        Pricing
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
                <p>
                    &copy; 2024 InvoiceWala. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;