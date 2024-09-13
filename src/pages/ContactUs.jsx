import React from "react";

const ContactUs = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4 outline-none rounded-lg focus-visible:border-blue-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 outline-none rounded-lg focus-visible:border-blue-700"
        />
        <textarea
          placeholder="Message"
          className="border p-2 w-full mb-4 resize-none outline-none rounded-lg focus-visible:border-blue-700"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 outline-none text-black px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
      <div className="mt-6 mb-24">
        <p>Email: gocinga@ngo.org</p>
        <p>Phone: +233(0)59-241-2145</p>
        <p>Address: Accra, Ghana</p>
      </div>
    </div>
  );
};

export default ContactUs;
