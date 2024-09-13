import React, { useState } from "react";

const DonateForm = ({ isOpen, handleIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you for your donation, ${name}!`);
  };

  return (
    <>
      {isOpen ? (
        <div
          className="absolute bg-[rgba(83,86,93,0.64)] flex justify-center items-center min-h-screen w-full z-10"
          onClick={() => handleIsOpen()}
        >
          <div
            className="bg-gray-100 rounded-lg m-5 lg:w-1/2 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                Make a Donation
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mt-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mt-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Donation Amount Field */}
                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 font-semibold"
                  >
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 mt-2 border text-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Amount (in GH₵)"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-green-500 w-full p-3 rounded-lg text-white font-semibold hover:bg-green-600 transition duration-300"
                >
                  Donate Now
                </button>
              </form>

              {/* Message Display */}
              {message && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DonateForm;
