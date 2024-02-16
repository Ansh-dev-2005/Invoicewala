// create contact us page according to home page only use tilwindcss

import React from "react";
import { Link } from "react-router-dom";

const Contactus = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            {/* add company details and address */}
            <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                <div className="mt-4">
                    <p className="text-gray-700">
                        A product from: Tektisys Consultancy Solution Pvt. Ltd.
                    </p>
                    <p className="text-gray-700">
                        Address: 1ST-FR, FL-1A, 393 PURBACHAL MAIN RD, Haltu, Kolkata West
                        Bengal 700078
                    </p>
                    <p className="text-gray-700">Phone: +91 9073 4638 48</p>
                    <p className="text-gray-700">Email: hello@tektisys.in</p>
                </div>
            </div>

            <form className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg mt-4">
                <h2 className="text-3xl font-bold text-center">Message Us</h2>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="message" className="block text-gray-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    ></textarea>
                </div>
                <div className="mt-8">
                    <button className="w-full py-2 px-3 bg-gray-800 text-white rounded hover:bg-blue-400">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contactus;