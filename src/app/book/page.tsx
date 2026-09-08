import React, { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Phone, Clock, FileCheck } from "lucide-react";

export const metadata = {
  title: "Book a Service | MOTIVE & CO.",
  description:
    "Request a prioritized service appointment or diagnostic bay reservation for your vehicle.",
};

export default function BookPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Book a Motorcycle Service Appointment
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          Reserve your motorcycle check-in date. A dedicated Road Crafters Technical Advisor will review your requirements and confirm your lift bay allocation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Booking Form */}
        <div className="lg:col-span-7 bg-[#FAF8F2] border border-[#D8D1C5] p-6 sm:p-10">
          <Suspense fallback={<div className="p-8 text-center text-xs">Loading Booking Engine...</div>}>
            <BookingForm />
          </Suspense>
        </div>

        {/* Side panel: WHAT HAPPENS NEXT */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#17352D] text-white p-8 border border-[#23443A] space-y-6">
            <h2 className="font-serif text-2xl font-medium">
              What Happens Next?
            </h2>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-7 h-7 bg-[#2B463D] text-[#B47A4A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-white">Advisor Confirmation</h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Our service advisor reviews your request, verifies part availability, and confirms your timing window via phone or email.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-7 h-7 bg-[#2B463D] text-[#B47A4A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-white">Reception & Digital Scan</h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Upon arrival, your vehicle undergoes a baseline diagnostic interrogation and 68-point body and mechanical inspection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-7 h-7 bg-[#2B463D] text-[#B47A4A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-white">Digital Inspection & Estimate</h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    You receive an itemized estimate with photographs on your phone. No work proceeds without your explicit digital approval.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-7 h-7 bg-[#2B463D] text-[#B47A4A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-white">Precision Service & Delivery</h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Work is completed to factory specs, road tested by a master technician, washed, and returned with a 12-month warranty ledger.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-6 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#18352D]">
              Prefer to speak to an Advisor immediately?
            </h3>
            <p className="text-xs text-[#6E706B]">
              Our workshop hotline is available Monday through Saturday.
            </p>
            <a
              href="tel:+442079460912"
              className="inline-flex items-center text-xs font-bold text-[#18352D] hover:text-[#B47A4A] space-x-2 pt-2"
            >
              <Phone className="w-4 h-4 text-[#B47A4A]" />
              <span>+44 20 7946 0912</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
