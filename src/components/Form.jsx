import axios from "axios";
import React, { useState } from "react";

export const Form = () => {
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
      setErrors((prevErrors) => ({ ...prevErrors, name: "Fältet måste fyllas i" }));
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
            name: '',
            email: '',
            message: '',
          })
          
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
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block w-full">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`block w-full border-2 rounded-md border-cyan-900 ${
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
        <label htmlFor="email" className="block w-full">
          Email
        </label>
        <input
          id="email"
          name="email"
          className={`block w-full border-2 rounded-md border-cyan-900 ${
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
        <label htmlFor="message" className="block w-full">
          Meddelande
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`block w-full border-2 rounded-md border-cyan-900 ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
      {errors.message && <p className="text-red-600 font-semibold">{errors.message}</p>}
      </div>
      <button className="hover:bg-cyan-700 mt-6 uppercase font-semibold border w-full text-white py-2 rounded-md bg-cyan-600">
        Skicka
      </button>
    </form>
  );
};
