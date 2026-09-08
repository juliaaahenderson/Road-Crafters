import React from "react";
import Metadata from "next";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Road Crafters Garage",
  description:
    "Privacy Policy for Road Crafters Garage Ltd. Learn how we handle customer bike telemetry data, booking details, and payment information.",
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-6 h-6 text-[#A96F43]" />
            <span className="text-xs uppercase tracking-widest text-[#A96F43] font-semibold">
              Legal & Compliance
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            Effective Date: September 1, 2026. This policy outlines how Road Crafters Garage Ltd collects, uses, and safeguards information regarding your motorcycle, bookings, and personal data.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-[#FAF8F2] p-8 sm:p-12 border border-[#D8D1C5] shadow-sm space-y-10 text-[#202321]">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              When you book a service, request diagnostic support, or drop off your motorcycle at Road Crafters Garage, we collect necessary operational details to perform mechanical service:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-stone-700">
              <li><strong>Contact Information:</strong> Full name, phone number, email address, and billing address.</li>
              <li><strong>Motorcycle Telemetry & Details:</strong> Make, model, VIN/registration number, odometer reading, ECU diagnostic fault codes, service history, and custom modifications.</li>
              <li><strong>Service Logs:</strong> Diagnostic scan reports, technician notes, high-definition inspection photo logs, and replacement component serial numbers.</li>
              <li><strong>Transport Details:</strong> Pickup and drop-off address location data for enclosed motorcycle transport requests.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              Your data is strictly used to deliver high-precision motorcycle care and warranty verification:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-stone-700">
              <li>To perform requested diagnostics, engine rebuilds, suspension tuning, and scheduled maintenance.</li>
              <li>To issue electronic inspection reports and digital health certificates before handover.</li>
              <li>To validate our 12-Month / 10,000 km parts and craftsmanship warranty.</li>
              <li>To notify you via SMS/Email regarding workshop status, parts approval requests, and pickup readiness.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              3. Data Security & Storage
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              We implement enterprise-grade security protocols. Electronic diagnostic logs and owner contact records are encrypted at rest and in transit. We do not sell, rent, or trade customer information or motorcycle telemetry data to third-party advertisers or insurance brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              4. Payment & Billing Privacy
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              All payment transactions processed at our workshop reception counter or online portal use PCI-DSS compliant payment gateways. Road Crafters Garage does not store raw credit card numbers or banking PINs on local workshop servers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#17352D] border-b border-[#D8D1C5] pb-2">
              5. Your Legal Rights
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              Under UK GDPR and international data protection laws, motorcycle owners have the right to request a complete copy of their vehicle’s digital diagnostic logs, update contact preferences, or request data deletion subject to statutory invoice record-keeping retention periods.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-[#D8D1C5]">
            <h2 className="font-serif text-lg font-semibold text-[#17352D]">
              Contact Data Protection Officer
            </h2>
            <p className="text-sm text-stone-700">
              If you have any questions regarding this Privacy Policy or your bike data records, contact our privacy desk at:
            </p>
            <div className="text-xs bg-[#F3EFE6] p-4 border border-[#D8D1C5] space-y-1 font-mono text-[#17352D]">
              <p>Road Crafters Garage Ltd – Legal & Compliance</p>
              <p>14 Apex Industrial Estate, Park Royal, London NW10 77AQ</p>
              <p>Email: privacy@roadcraftersgarage.com | Phone: +44 20 7946 0912</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
