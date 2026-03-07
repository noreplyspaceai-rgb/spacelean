"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "17652713686"; // country code + number (no + sign)
  const message =
    "Hello! I am interested in space lean and would like to learn more about SPACE LEAN. Could you please provide me with more information?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}