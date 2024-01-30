import React from "react";
import axios from "axios";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    let formIsValid = true;

    if (!name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Fältet måste fyllas i",
      }));
      formIsValid = false;
    }

    if (!email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Fältet måste fyllas i",
      }));
      formIsValid = false;
    }

    if (!message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Fältet måste fyllas i",
      }));
      formIsValid = false;
    }

    if (formIsValid) {
      const apiUrl = "https://js2-ecommerce-api.vercel.app/api/messages";

      try {
        const response = await axios.post(apiUrl, formData);

        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          console.log("Form submitted successfully");
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  return (
    <>
    <h1 className="text-center text-3xl font-semibold">Kontakta Oss</h1>
      <form
        className=" w-[500px] p-8"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block w-full uppercase font-bold">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={`text-black block w-full border-2 py-2 rounded-md border-blue-700 ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-600 font-semibold">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block w-full uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            name="email"
            className={`text-black block w-full border-2 py-2 rounded-md border-blue-700 ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 font-semibold">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block w-full uppercase font-bold">
            Meddelande
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`text-black block w-full border-2 rounded-md border-blue-700 ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 font-semibold">{errors.message}</p>
          )}
        </div>
        <button className="hover:bg-blue-700 mt-6 uppercase font-semibold border w-full text-white py-2 rounded-md bg-blue-600">
          Skicka
        </button>
      </form>
    </>
  );
};
