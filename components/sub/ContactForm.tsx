


// "use client";
// import React, { useState } from "react";

// const ContactForm: React.FC = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//   };

//   return (
//  <form
//   onSubmit={handleSubmit}
//   className="relative z-20 flex flex-col gap-5 w-full md:w-2/3 lg:w-1/2 p-8 rounded-2xl bg-[#0a0a0a]/95 border border-gray-800 shadow-lg transition hover:border-purple-500/60"
// >

//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={form.name}
//         onChange={handleChange}
//         className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         value={form.email}
//         onChange={handleChange}
//         className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
//       />
//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={form.message}
//         onChange={handleChange}
//         rows={5}
//         className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
//       />
//       <button
//   type="submit"
//   className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-md 
//              hover:from-purple-600 hover:to-cyan-600 hover:shadow-cyan-500/50 transition-all duration-300"
// >
//   Send Message
// </button>

//     </form>
//   );
// };

// export default ContactForm;


"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      setStatus("❌ Something went wrong. Please try again.");
    } else {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex flex-col gap-5 w-full md:w-2/3 lg:w-1/2 p-8 rounded-2xl bg-[#0a0a0a]/95 border border-gray-800 shadow-lg transition hover:border-purple-500/60"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        required
        className="px-4 py-3 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-md 
          hover:from-purple-600 hover:to-cyan-600 hover:shadow-cyan-500/50 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="mt-3 text-sm text-center text-gray-300">{status}</p>
      )}
    </form>
  );
};

export default ContactForm;
