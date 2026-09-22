import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Award, Wrench, Clock, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import HomeServicesSection from "@/components/HomeServicesSection";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import PricingClient from "@/components/PricingClient";
import { SERVICES_DATA, PACKAGES_DATA, FAQ_DATA, classNamesImages } from "@/data/content";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION: PREMIUM DUAL-COLUMN WITH LUXURY FLOATING BADGES & PHOTO PRESENTATION */}
      <section className="pt-2 lg:pt-6 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Tagline, Subtitle, Modern CTAs & Key Metrics */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Main H1 Headline: Official Tagline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1B14] leading-[1.1] max-w-xl">
              You Say It and <br className="hidden sm:inline" />
              <span className="text-[#C5A059] relative inline-block">
                We Do It.
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#C5A059]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle Left */}
            <p className="text-base sm:text-lg text-[#524F4A] leading-relaxed max-w-xl font-sans">
              Precision motorcycle servicing, diagnostics, engine overhauls & genuine OEM spare parts performed by master technicians at our flagship Porvorim garage.
            </p>

            {/* Action Buttons Left */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/book"
                className="px-8 py-4 bg-[#1F1B14] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#1F1B14] text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center space-x-2.5 group shadow-lg rounded-md"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-[#1F1B14] group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918668412375"
                className="px-8 py-4 bg-[#FAF8F5] text-[#1F1B14] hover:bg-white text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center space-x-2 border border-[#E6D7BC] shadow-sm hover:shadow-md rounded-md"
              >
                <span>Call Workshop</span>
              </a>
            </div>

            {/* Key Metrics Left */}
            <div className="pt-6 border-t border-[#E6D7BC] grid grid-cols-3 gap-4 text-left divide-x divide-[#E6D7BC]">
              <div>
                <span className="block font-sans text-2xl lg:text-3xl font-extrabold text-[#1F1B14]">
                  10+
                </span>
                <span className="text-xs font-medium text-[#6E6B65]">Years Expertise</span>
              </div>
              <div className="pl-4">
                <span className="block font-sans text-2xl lg:text-3xl font-extrabold text-[#1F1B14]">
                  15,000+
                </span>
                <span className="text-xs font-medium text-[#6E6B65]">Bikes Serviced</span>
              </div>
              <div className="pl-4">
                <span className="block font-sans text-2xl lg:text-3xl font-extrabold text-[#1F1B14]">
                  25+
                </span>
                <span className="text-xs font-medium text-[#6E6B65]">Master Techs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Garage Storefront Card with Modern Floating Badges */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#FAF8F5] to-[#E6D7BC]/40 p-2.5 sm:p-3.5 border border-[#E6D7BC] shadow-2xl overflow-hidden group">
              {/* Photo Frame Container - Display Full Image (Including Top Banner Signboard) */}
              <div className="relative rounded-xl overflow-hidden bg-[#1F1B14] shadow-inner border border-[#2C2316]">
                <img
                  src={classNamesImages.exteriorFront}
                  alt="Road Crafters Garage Official Front Storefront Signboard & Entrance"
                  className="w-full h-auto max-h-[520px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 right-3 bg-[#1F1B14]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 flex items-center space-x-2 text-[11px] font-semibold text-[#FAF8F5] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <span>Official Porvorim Garage</span>
                </div>

                {/* Bottom Floating Bar */}
                <div className="bg-[#1F1B14] p-3.5 border-t border-[#2C2316] flex items-center justify-between text-xs text-[#FAF8F5]">
                  <div>
                    <p className="font-bold text-[#FAF8F5] tracking-wide">Road Crafters Garage</p>
                    <p className="text-[11px] text-[#C5A059]">Shop No. 9, Alcon Regency, Porvorim</p>
                  </div>
                  <Link
                    href="/workshop"
                    className="px-3 py-1.5 bg-[#C5A059] text-[#1F1B14] hover:bg-white text-[11px] font-bold rounded uppercase tracking-wider transition-colors"
                  >
                    View Facility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Trust Bar */}
        <div className="bg-[#FAF8F5] border border-[#E6D7BC] rounded-xl py-5 px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E6D7BC] shadow-sm">
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-5 h-5 text-[#C5A059] mb-1" />
            <span className="font-semibold text-xs text-[#1F1B14]">5.0 ★ Rated Garage</span>
            <span className="text-[11px] text-[#6E6B65]">Verified Customer Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Shield className="w-5 h-5 text-[#C5A059] mb-1" />
            <span className="font-semibold text-xs text-[#1F1B14]">12-Month Guarantee</span>
            <span className="text-[11px] text-[#6E6B65]">Parts & Workmanship</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Wrench className="w-5 h-5 text-[#C5A059] mb-1" />
            <span className="font-semibold text-xs text-[#1F1B14]">Rider Focused</span>
            <span className="text-[11px] text-[#6E6B65]">Master Two-Wheeler Techs</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Clock className="w-5 h-5 text-[#C5A059] mb-1" />
            <span className="font-semibold text-xs text-[#1F1B14]">Open Daily</span>
            <span className="text-[11px] text-[#6E6B65]">Quick Turnaround Service</span>
          </div>
        </div>
      </section>


      {/* 2. SERVICES SECTION */}
      <HomeServicesSection />

      {/* 3. FEATURED SERVICE - ENGINE DIAGNOSTICS */}
      <section className="bg-[#1F1B14] text-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 relative">
              <div className="border border-[#2C2316] p-2 bg-[#2C2316]/30">
                <img
                  src={classNamesImages.diagnostics}
                  alt="Motorcycle Diagnostics Scan"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-white p-6 hidden sm:block max-w-xs shadow-lg">
                <span className="block text-xs uppercase tracking-widest font-semibold mb-1">
                  MOTORCYCLE OBD SCANNER
                </span>
                <p className="text-xs leading-relaxed">
                  Direct diagnostic interface for Ducati, BMW Motorrad, Triumph, KTM & Japanese OEMs.
                </p>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Motorcycle Engine Diagnostics
              </h2>
              <p className="text-base text-[#D4C4A8] leading-relaxed">
                Find the problem before it becomes an expensive breakdown. Our motorcycle technicians correlate fault codes with live sensor telemetry and fuel injection parameters.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Advanced motorcycle OBD diagnostic scanning equipment",
                  "Live parameter logging for fuel injection, O2, & TPS sensors",
                  "Transparent digital inspection report sent to your phone",
                  "Clear itemized recommendations prior to any work"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-[#D4C4A8]">
                    <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/book?service=engine-diagnostics"
                  className="inline-flex items-center px-7 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Book Motorcycle Diagnostics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US - EDITORIAL STYLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR STANDARDS"
          title="Built Around Precision & Trust."
          subtitle="Care that goes beyond the service checklist. Because your ride deserves meticulous attention."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 border-t border-[#E6D7BC] pt-12">
          {[
            {
              num: "01",
              title: "Experienced Bike Technicians",
              desc: "Master mechanics with over 10 years of training across street, sport, cruiser, and adventure motorcycle platforms."
            },
            {
              num: "02",
              title: "Transparent Digital Estimates",
              desc: "Detailed digital inspection reports with photographs and fixed quotes before a single bolt is turned."
            },
            {
              num: "03",
              title: "100% OEM & JASO MA2 Oils",
              desc: "We exclusively fit original manufacturer parts and premium ester synthetic oils built specifically for motorcycle wet clutches."
            },
            {
              num: "04",
              title: "Digital Service Ledger",
              desc: "Comprehensive maintenance history logged digitally to protect your bike's long-term resale provenance."
            },
            {
              num: "05",
              title: "Doorstep Pickup & Drop",
              desc: "Complimentary covered van transport for your bike within 15 km of our workshop centers."
            },
            {
              num: "06",
              title: "12-Month Service Warranty",
              desc: "Complete warranty protection on all mechanical labor and installed components for 12 months or 10,000 km."
            }
          ].map((item) => (
            <div key={item.num} className="space-y-3">
              <span className="font-serif text-3xl font-semibold text-[#C5A059] block">
                {item.num}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#1F1B14]">
                {item.title}
              </h3>
              <p className="text-sm text-[#6E6B65] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORKSHOP SHOWCASE */}
      <section className="bg-[#FAF8F5] border-y border-[#E6D7BC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1F1B14]">
                Professional Equipment. Meticulous Workmanship.
              </h2>
            </div>
            <Link
              href="/workshop"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#1F1B14] hover:text-[#C5A059] inline-flex items-center gap-1.5"
            >
              Explore Full Workshop →
            </Link>
          </div>

          {/* Grid of Workshop Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#E6D7BC]">
              <img
                src={classNamesImages.workshopMain}
                alt="Motorcycle on hydraulic lift"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-serif font-medium text-white">
                  Heavy-Duty Motorcycle Hydraulic Lift Stations
                </span>
              </div>
            </div>
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#E6D7BC]">
              <img
                src={classNamesImages.chainSprocket}
                alt="Chain maintenance station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-serif font-medium text-white">
                  Laser Rear Axle Alignment & Chain Station
                </span>
              </div>
            </div>
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#E6D7BC]">
              <img
                src={classNamesImages.detailing}
                alt="Motorcycle detailing studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-serif font-medium text-white">
                  Ceramic Paint Protection & Detailing Suite
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSPARENT WORKFLOW"
          title="How We Service Your Motorcycle."
          subtitle="A structured 5-step workflow designed to keep you fully informed from drop-off to final handover."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-[#E6D7BC] pt-12">
          {[
            { step: "01", title: "Book", desc: "Select your preferred motorcycle service date online or by phone." },
            { step: "02", title: "Inspect", desc: "Complete 32-point rider safety audit and computer OBD scan." },
            { step: "03", title: "Approve", desc: "Review digital estimate with transparent pricing on your phone." },
            { step: "04", title: "Service", desc: "Factory specs applied using JASO MA2 synthetic oils and OEM parts." },
            { step: "05", title: "Deliver", desc: "Road test by master rider, wash, and key handover with digital ledger." }
          ].map((item) => (
            <div key={item.step} className="bg-white border border-[#E6D7BC] p-6 space-y-3 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#1F1B14] px-2 py-0.5 inline-block">
                Step {item.step}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#1F1B14]">
                {item.title}
              </h3>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRICING SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HONEST PRICING"
          title="Motorcycle Packages & Inclusions."
          subtitle="Fixed transparent packages tailored for routine care, street tuning, and superbike upkeep."
        />

        <ConvexClientProvider>
          <PricingClient />
        </ConvexClientProvider>
        <p className="text-center text-xs text-[#6E6B65] mt-6">
          * Prices vary depending on engine displacement (cc) and synthetic oil capacity requirements.
        </p>
      </section>

      {/* 8. CUSTOMER REVIEWS */}
      <ReviewsSection />

      {/* 9. TECHNICAL JOURNAL / BLOG */}
      <LatestArticlesSection />

      {/* 10. FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RIDER QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking, warranty, JASO oil standards, and workshop procedures."
          align="center"
        />
        <FAQAccordion items={FAQ_DATA.slice(0, 5)} />
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-xs font-semibold uppercase tracking-wider text-[#1F1B14] hover:text-[#C5A059] border-b border-[#1F1B14] pb-0.5"
          >
            View All Rider Questions →
          </Link>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F1B14] text-[#FAF8F5] p-10 sm:p-16 border border-[#2C2316] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Schedule Your Motorcycle Service Today.
            </h2>
            <p className="text-sm text-[#D4C4A8]">
              Speak directly with a Road Crafters Technical Advisor or submit an online request for prioritized lift bay allocation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/book"
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-white text-xs font-semibold uppercase tracking-widest text-center transition-colors shadow-sm"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+918668412375"
              className="px-8 py-4 bg-transparent border border-[#D4C4A8] hover:border-white text-white text-xs font-semibold uppercase tracking-widest text-center transition-colors"
            >
              Call +91 86684 12375
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
