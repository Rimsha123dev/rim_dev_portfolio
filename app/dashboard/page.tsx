"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

const DashboardPage = () => {
  const [auth, setAuth] = useState(false); // admin check
  const [passwordInput, setPasswordInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASS;

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuth(true);
    } else {
      alert("❌ Wrong password");
    }
  };

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error.message);
    } else {
      console.log("✅ Messages fetched:", data);
      setMessages(data || []);
    }
  };

  // 🗑️ Delete message
const deleteMessage = async (id: number) => {
  const { error } = await supabase.from("contacts").delete().eq("id", id);
  if (error) {
    console.error("❌ Error deleting message:", error.message);
  } else {
    console.log("✅ Deleted from Supabase:", id);
    setMessages(messages.filter((msg) => msg.id !== id));
  }
};


  useEffect(() => {
    if (auth) fetchMessages();
  }, [auth]);

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white relative z-50 mt-10">
        <div className="p-8 bg-[#111] rounded-xl border border-gray-700 relative z-50 shadow-xl">
          <h2 className="text-2xl mb-4">🔒 Admin Login</h2>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Enter password"
            className="px-4 py-2 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleLogin}
            className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white relative z-50 hover:opacity-90 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10 mt-10 relative z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          📬 Contact Messages
        </h1>
        {/* 🏠 Home button */}
        <Link
          href="/"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition"
        >
          🏠 Home
        </Link>
      </div>

      {/* Messages */}
      <div className="grid gap-6 relative z-50">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="p-6 rounded-xl bg-[#111] border border-gray-800 hover:border-purple-500/60 transition shadow-md relative z-50"
            >
              <div className="flex justify-between items-start relative z-50">
                <div>
                  <h2 className="font-semibold text-lg">{msg.name}</h2>
                  <p className="text-sm text-gray-400">{msg.email}</p>
                  <p className="mt-2">{msg.message}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
                {/* 🗑️ Delete button (same style as Home) */}
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
