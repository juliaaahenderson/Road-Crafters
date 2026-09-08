import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, Wrench, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Road Crafters Garage",
  description:
    "Terms of Service for Road Crafters Garage Ltd. Standard workshop operating terms, repair authorization, warranty conditions, and motorcycle drop-off policies.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#F3EFE6] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#A96F43] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="bg-[#17352D] text-[#FAF8F2] p-8 sm:p-12 mb-10 border border-[#23443A] shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-6 h-6 text-[#A96F43]" />
            <span className="text-xs uppercase tracking-widest text-[#A96F43] font-semibold">
              Legal Agreement
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            Effective Date: September 1, 2026. These terms govern all motorcycle diagnostic, maintenance, engine overhaul, and transport services provided by Road Crafters Garage Ltd.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-[#FAF8F2] p-8 sm:p-12 border border-[#D8D1C5] shadow-sm space-y-10 text-[#202321]">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              1. Repair Authorization & Work Scope
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              By checking in a motorcycle at any Road Crafters Garage location or confirming an online booking, you authorize our certified technicians to perform diagnostic scans, road testing, and mechanical servicing as detailed on your Job Card. Any additional work or replacement components identified during inspection will require owner authorization prior to execution.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              2. 12-Month / 10,000 KM Warranty Terms
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              All OEM and premium aftermarket replacement parts installed by Road Crafters Garage are backed by our 12-Month or 10,000 km warranty (whichever comes first).
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-stone-700">
              <li>Warranty covers mechanical failure resulting from manufacturing defects or installation labor error.</li>
              <li>Warranty does not cover normal wear items (such as racing brake pad wear, track-day tyre wear, or clutch burn due to misuse).</li>
              <li>Modifications or third-party tampering post-handover will void warranty coverage on affected assemblies.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              3. Motorcycle Drop-Off, Storage & Handover
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              Motorcycles completed and ready for pickup must be collected within 3 business days of notification. Storage fees of £15 per day will accrue after 3 grace days unless prior arrangements have been confirmed with workshop management.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              4. Payment & Pricing Transparency
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              All package prices and labor estimates are quoted transparently. Complete payment is due upon vehicle collection or prior to dispatch for enclosed transport delivery. We accept major credit/debit cards, bank transfers, and official fleet accounts.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              5. Valuables & Personal Belongings
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              Owners are requested to remove personal belongings, helmets, intercom units, and luggage boxes prior to workshop check-in. Road Crafters Garage is not responsible for non-factory loose accessories left in storage compartments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-[#D8D1C5]">
            <h2 className="font-serif text-lg font-semibold text-[#17352D]">
              Legal Inquiries & Workshop Management
            </h2>
            <p className="text-sm text-stone-700">
              For legal inquiries or workshop service agreement details, contact our management team:
            </p>
            <div className="text-xs bg-[#F3EFE6] p-4 border border-[#D8D1C5] space-y-1 font-mono text-[#17352D]">
              <p>Road Crafters Garage Ltd – Workshop Management</p>
              <p>14 Apex Industrial Estate, Park Royal, London NW10 77AQ</p>
              <p>Email: legal@roadcraftersgarage.com | Phone: +44 20 7946 0912</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
