"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { classNamesImages } from "@/data/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Contact Technical Service
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          Have a question about a specific motorcycle OBD fault, chain service, or doorstep pickup? Contact our technical advisors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#E2DDD5] p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-[#18352D] text-[#B47A4A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#18352D]">
                Message Sent Successfully
              </h3>
              <p className="text-xs text-[#6E706B] max-w-md mx-auto">
                Thank you for contacting Motive & Co. A technical advisor will respond to your inquiry within two business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#B47A4A] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl font-medium text-[#18352D]">
                Send an Inquiry
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18352D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#B47A4A]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18352D] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#B47A4A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18352D] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7700 900000"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#B47A4A]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18352D] mb-1">
                    Vehicle Make & Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2021 Porsche Macan"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#B47A4A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18352D] mb-1">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your inquiry, vehicle issue, or service request..."
                  className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#B47A4A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#18352D] hover:bg-[#2B463D] text-white text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Technical Inquiry</span>
                <Send className="w-3.5 h-3.5 text-[#B47A4A]" />
              </button>
            </form>
          )}
        </div>

        {/* Right Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#18352D] text-white p-8 border border-[#2B463D] space-y-6">
            <h3 className="font-serif text-2xl font-medium">
              Direct Contact Lines
            </h3>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Headquarters Workshop</span>
                  <p>14 Apex Industrial Estate, Park Royal, London NW10 77AQ</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Hotline & Valet Support</span>
                  <p>+44 20 7946 0912</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Service Desk Email</span>
                  <p>service@motiveco.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#E2DDD5] bg-white p-2">
            <img
              src={classNamesImages.exteriorFront}
              alt="Motive & Co. Facility Exterior"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
