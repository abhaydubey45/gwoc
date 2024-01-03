"use client"
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const plainFormData = { ...formData };

      await emailjs.send(
        "service_1znkv58",
        "template_7we09xa", plainFormData, "wHjBoxTJFPvmUuAMs"
      );

      setLoading(false);
      alert("Thank you for your submission!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center mt-4   text-text-700">
      <form onSubmit={handleSubmit} className=" backdrop-blur-[10px]  bg-background-100/60 z-50 w-3/4 p-8 justify-center rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <label className="flex flex-col mb-4">
          <span className="font-medium mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="py-4 px-3 rounded-xl w-full md:w-3/4 outline-none border-none"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span className="font-medium mb-2">Your Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="py-4 px-3 rounded-xl w-full md:w-3/4 block  outline-none border-none"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span className="font-medium mb-2">Your Message</span>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="py-2 px-3 rounded-xl w-full md:w-3/4 outline-none border-none"
          />
        </label>
        <button
          type="submit"
          className="bg-background-700 py-2 px-4 mt-3 rounded-md text-white font-bold hover:bg-background-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
