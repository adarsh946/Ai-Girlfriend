"use client";

import React from "react";

function Conversation() {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center bg-white">
      <div className="relative w-72 h-72">
        <div className="absolute inset-0 rounded-full border-8 border-gray-300 animate-ping-soft"></div>
        <div className="absolute inset-0 rounded-full border-6 border-gray-300 animate-ping-soft"></div>
        <div className="absolute inset-0 rounded-full border-6 border-gray-300 animate-ping-soft"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-ping-soft"></div>
        <div className="absolute inset-0 rounded-full border-8 border-gray-300 animate-ping-soft"></div>

        <div className="absolute inset-12 rounded-full bg-black shadow-xl shadow-gray-500/40 animate-pulse"></div>
      </div>
    </div>
  );
}

export default Conversation;
