import React from "react";
import ContactForm from "../sub/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className=" relative  flex flex-col items-center justify-center py-20 scroll-mt-[100px]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact Me
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
