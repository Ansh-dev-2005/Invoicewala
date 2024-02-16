import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing bg-gray-100 py-10 md:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing</h2>
        <p className="text-gray-600 mb-8">Choose a plan that works for you</p>
        <div className="plans grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="plan bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-2">Small</h3>
            <p className="text-gray-600 mb-4">
              Game Changer for Small Retail Players.
            </p>
            <ul className="text-gray-600 mb-4 text-left">
              <li>2 Terminal in One Store Location</li>
              <li>3 User License Overall</li>
              <li>WhatsApp Sharing</li>
              <li>SMS Sharing</li>
              <li>Minimum 500 Invoice /Month</li>
              <li>₹ 0.70 / Invoice</li>
            </ul>
          </div>
          <div className="plan bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-2">Medium</h3>
            <p className="text-gray-600 mb-4">
              Growing Aspiration Filler for Medium Scale Retailer
            </p>
            <ul className="text-gray-600 mb-4 text-left">
              <li>4 Terminal in One Store Location</li>
              <li>8 User Per Store Location</li>
              <li>WhatsApp Sharing</li>
              <li>SMS Sharing</li>
              <li>Minimum 1500 Invoice /Month</li>
              <li>₹ 0.60 / Invoice</li>
            </ul>
          </div>
          <div className="plan bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-2">Large</h3>
            <p className="text-gray-600 mb-4">
              Large Enterprise with Difference
            </p>
            <ul className="text-gray-600 mb-4 text-left">
              <li>8 Terminal in One Store Location</li>
              <li>20 User Per Store Location</li>
              <li>WhatsApp Sharing</li>
              <li>SMS Sharing</li>
              <li>Minimum 5000 Invoices /Month</li>
              <li>₹ 0.50 / Invoice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
