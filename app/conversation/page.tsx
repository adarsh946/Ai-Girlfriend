"use client";

import React, { useState } from "react";

function Conversation() {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("speech recognition is not supported in this browser!");
  } else {
    const sr = new SpeechRecognition();
    sr.continuous = false;
    sr.interimResults = false;
    sr.maxAlternatives = 1;
    sr.onstart = function () {
      console.log("speech recoginition started!");
    };

    sr.onresult = function (event) {
      console.log(event.results);
    };
  }
  return (
    <div className="fixed w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative w-72 h-72">
        <div className="absolute inset-0 rounded-full border-8 border-gray-300 animate-ping-soft"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-ping-soft"></div>

        <div className="absolute inset-12 rounded-full bg-black shadow-xl shadow-gray-500/40 animate-pulse"></div>
      </div>
      {isSpeaking && (
        <h2 className="text-4xl font-bold pt-10">💖💖Kuch to bolo💖💖....</h2>
      )}
      (
      <style jsx>{`
        @keyframes pingSoft {
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          0% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-soft {
          animation: pingSoft 2s ease-in infinite;
        }
      `}</style>
      )
    </div>
  );
}

export default Conversation;
