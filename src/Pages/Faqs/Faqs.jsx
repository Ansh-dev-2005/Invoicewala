// create a attractive and responsive faq page for the website

import React from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-4">
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
              What is Invoicewala and how does it work?
            </h3>
            <p className="text-gray-700">
              Invoicewala is a software tool designed for seamless invoice
              sharing via WhatsApp, SMS, Email, and In-App messaging. Start by
              registering with your company details, undergoing verification,
              and accessing your web dashboard. Provide POS Location and user
              details in the dashboard. Download the Windows application
              provided in the dashboard, log in, and enter terminal information.
              Once set up, you can efficiently share invoices through multiple
              communication channels.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
              Can I view credit balances using Invoicewala?
            </h3>
            <p className="text-gray-700">
              Yes, both the Windows application and web dashboard provide easy
              access to view credit balances. Monitor your financial standing
              conveniently to track transactions and manage accounts
              effectively.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
              How do I access Invoicewala's features?
            </h3>
            <p className="text-gray-700">
              Simply register with your company details and get verified. Log in
              to the web dashboard to manage POS locations and user accounts.
              Download the Windows application from the dashboard and log in to
              access all features instantly.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
              How can I contact Invoicewala for support?
            </h3>
            <p className="text-gray-700">
              You can contact Invoicewala by sending an email to
              <Link to="mailto:hello@tektisys.in" className="text-blue-500">
                hello@tektisys.in
              </Link>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
              What if I encounter technical issues or require assistance?
            </h3>
            <p className="text-gray-700">
              If you face any technical challenges or need assistance, raise a
              support ticket via our support portal. Our team of engineers is
              dedicated to providing prompt assistance and resolving your
              queries efficiently.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">
Is Invoicewala compatible with multiple POS terminals?
            </h3>
            <p className="text-gray-700">
             
Absolutely, Invoicewala is designed to work seamlessly across multiple POS terminals within your establishment.
Ensure the Windows application is installed and logged in on each POS server system for smooth transaction management across all terminals.

            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
