import React from "react";
import { ContactForm } from "../components/ContactForm";

function ContactPage() {
  return (
    <div
      className=" flex justify-center mx-auto mt-10 px-5 bg-red-500 w-[90%] rounded-md"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
