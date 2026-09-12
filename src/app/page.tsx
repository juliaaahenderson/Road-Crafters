import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Award, Wrench, Clock, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import { SERVICES_DATA, PACKAGES_DATA, FAQ_DATA, classNamesImages } from "@/data/content";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-10 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#17352D] leading-[1.12]">
              Precision Service for Every Ride.
            </h1>
            <p className="text-base sm:text-lg text-[#6E706B] leading-relaxed max-w-xl">
              Professional motorcycle servicing, diagnostics and repairs performed by experienced technicians who understand what your machine demands.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/book"
                className="px-7 py-3.5 bg-[#17352D] text-[#FAF8F2] hover:bg-[#23443A] text-xs font-semibold uppercase tracking-widest transition-all inline-flex items-center justify-center space-x-2 group shadow-sm border border-[#17352D]"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 text-[#A96F43] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 bg-[#FAF8F2] text-[#17352D] hover:bg-white text-xs font-semibold uppercase tracking-widest transition-all inline-flex items-center justify-center space-x-2 border border-[#D8D1C5]"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Quick metrics */}
            <div className="pt-8 border-t border-[#D8D1C5] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-[#17352D]">
                  10+
                </span>
                <span className="text-xs text-[#6E706B]">Years Motorcycle Expertise</span>
              </div>
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-[#17352D]">
                  15,000+
                </span>
                <span className="text-xs text-[#6E706B]">Bikes Serviced</span>
              </div>
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-[#17352D]">
                  25+
                </span>
                <span className="text-xs text-[#6E706B]">Master Bike Technicians</span>
              </div>
            </div>
          </div>

          {/* Right Column Image Frame */}
          <div className="lg:col-span-6">
            <div className="relative border-8 border-white shadow-xl overflow-hidden bg-stone-200">
              <img
                src={classNamesImages.hero}
                alt="Premium Motorcycle inside Road Crafters Workshop"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#17352D]/90 backdrop-blur-sm text-white p-4 flex items-center justify-between border border-stone-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium tracking-wide">
                    Live Workshop Status: <span className="text-[#A96F43]">Lift Bay 02 Open</span>
                  </span>
                </div>
                <Link
                  href="/workshop"
                  className="text-[11px] uppercase tracking-wider text-stone-300 hover:text-white underline"
                >
                  View Facility
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Trust Bar */}
        <div className="mt-16 bg-[#FAF8F2] border border-[#D8D1C5] py-6 px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#D8D1C5]">
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-5 h-5 text-[#A96F43] mb-1" />
            <span className="font-semibold text-xs text-[#17352D]">5.0 ★ Rated Garage</span>
            <span className="text-[11px] text-[#6E706B]">55 Verified Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Shield className="w-5 h-5 text-[#A96F43] mb-1" />
            <span className="font-semibold text-xs text-[#17352D]">12-Month Warranty</span>
            <span className="text-[11px] text-[#6E706B]">Parts & Labor Guarantee</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Wrench className="w-5 h-5 text-[#A96F43] mb-1" />
            <span className="font-semibold text-xs text-[#17352D]">LGBTQ+ Friendly</span>
            <span className="text-[11px] text-[#6E706B]">Inclusive Rider Community</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <Clock className="w-5 h-5 text-[#A96F43] mb-1" />
            <span className="font-semibold text-xs text-[#17352D]">Open — Closes 10:00 PM</span>
            <span className="text-[11px] text-[#6E706B]">Daily Operations</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MOTORCYCLE SPECIALTIES"
          title="Bespoke Care. Comprehensive Capability."
          subtitle="From periodic maintenance to ECU diagnostics, chain sync, and fork servicing, every job is performed to exacting standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#17352D] hover:text-[#A96F43] border-b border-[#17352D] pb-1 transition-colors"
          >
            View All 8 Specialized Motorcycle Services
            <ArrowRight className="w-4 h-4 ml-2 text-[#A96F43]" />
          </Link>
        </div>
      </section>

      {/* 3. FEATURED SERVICE - ENGINE DIAGNOSTICS */}
      <section className="bg-[#17352D] text-[#FAF8F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 relative">
              <div className="border border-[#23443A] p-2 bg-[#23443A]/30">
                <img
                  src={classNamesImages.diagnostics}
                  alt="Motorcycle Diagnostics Scan"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#A96F43] text-white p-6 hidden sm:block max-w-xs shadow-lg">
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
              <p className="text-base text-stone-300 leading-relaxed">
                Find the problem before it becomes an expensive breakdown. Our motorcycle technicians correlate fault codes with live sensor telemetry and fuel injection parameters.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Advanced motorcycle OBD diagnostic scanning equipment",
                  "Live parameter logging for fuel injection, O2, & TPS sensors",
                  "Transparent digital inspection report sent to your phone",
                  "Clear itemized recommendations prior to any work"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-stone-200">
                    <Check className="w-4 h-4 text-[#A96F43] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/book?service=engine-diagnostics"
                  className="inline-flex items-center px-7 py-3.5 bg-[#A96F43] hover:bg-[#8C572E] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 border-t border-[#D8D1C5] pt-12">
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
              <span className="font-serif text-3xl font-semibold text-[#A96F43] block">
                {item.num}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#17352D]">
                {item.title}
              </h3>
              <p className="text-sm text-[#6E706B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORKSHOP SHOWCASE */}
      <section className="bg-[#FAF8F2] border-y border-[#D8D1C5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#17352D]">
                Professional Equipment. Meticulous Workmanship.
              </h2>
            </div>
            <Link
              href="/workshop"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#A96F43] inline-flex items-center gap-1.5"
            >
              Explore Full Workshop →
            </Link>
          </div>

          {/* Grid of Workshop Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#D8D1C5]">
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
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#D8D1C5]">
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
            <div className="relative h-72 group overflow-hidden bg-stone-200 border border-[#D8D1C5]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-[#D8D1C5] pt-12">
          {[
            { step: "01", title: "Book", desc: "Select your preferred motorcycle service date online or by phone." },
            { step: "02", title: "Inspect", desc: "Complete 32-point rider safety audit and computer OBD scan." },
            { step: "03", title: "Approve", desc: "Review digital estimate with transparent pricing on your phone." },
            { step: "04", title: "Service", desc: "Factory specs applied using JASO MA2 synthetic oils and OEM parts." },
            { step: "05", title: "Deliver", desc: "Road test by master rider, wash, and key handover with digital ledger." }
          ].map((item) => (
            <div key={item.step} className="bg-[#FAF8F2] border border-[#D8D1C5] p-6 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A96F43] bg-[#17352D] px-2 py-0.5 inline-block">
                Step {item.step}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#17352D]">
                {item.title}
              </h3>
              <p className="text-xs text-[#6E706B] leading-relaxed">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#FAF8F2] border p-8 flex flex-col justify-between relative ${
                pkg.popular ? "border-[#A96F43] shadow-md" : "border-[#D8D1C5]"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#A96F43] text-white text-[10px] uppercase font-semibold tracking-widest px-3 py-1">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#17352D]">
                  {pkg.name}
                </h3>
                <div className="mt-4 mb-2 flex items-baseline space-x-2">
                  <span className="font-serif text-4xl font-bold text-[#17352D]">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#6E706B]">/ service</span>
                </div>
                <p className="text-xs text-[#6E706B] mb-6 border-b border-[#D8D1C5] pb-4">
                  {pkg.subtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-[#202321]">
                      <Check className="w-3.5 h-3.5 text-[#A96F43] flex-shrink-0 mr-2.5 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/book?package=${pkg.id}`}
                className={`w-full py-3 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                  pkg.popular
                    ? "bg-[#17352D] text-white hover:bg-[#23443A]"
                    : "bg-[#F3EFE6] text-[#17352D] hover:bg-[#D8D1C5] border border-[#D8D1C5]"
                }`}
              >
                Select {pkg.name}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6E706B] mt-6">
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
            className="text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#A96F43] border-b border-[#17352D] pb-0.5"
          >
            View All Rider Questions →
          </Link>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17352D] text-[#FAF8F2] p-10 sm:p-16 border border-[#23443A] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Schedule Your Motorcycle Service Today.
            </h2>
            <p className="text-sm text-stone-300">
              Speak directly with a Road Crafters Technical Advisor or submit an online request for prioritized lift bay allocation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/book"
              className="px-8 py-4 bg-[#A96F43] hover:bg-[#8C572E] text-white text-xs font-semibold uppercase tracking-widest text-center transition-colors shadow-sm"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+918668412375"
              className="px-8 py-4 bg-transparent border border-stone-400 hover:border-white text-white text-xs font-semibold uppercase tracking-widest text-center transition-colors"
            >
              Call +91 86684 12375
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
