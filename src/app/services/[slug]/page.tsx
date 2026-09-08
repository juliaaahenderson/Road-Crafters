import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, ShieldCheck, Wrench } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | MOTIVE & CO.`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="text-xs text-[#6E706B] flex items-center space-x-2">
        <Link href="/" className="hover:text-[#18352D]">Home</Link>
        <span>/</span>
        <Link href="/services" className="hover:text-[#18352D]">Services</Link>
        <span>/</span>
        <span className="text-[#18352D] font-medium">{service.title}</span>
      </div>

      {/* Main Service Header & Image Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B47A4A] bg-[#18352D] px-2.5 py-1 inline-block">
            {service.category} SERVICE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#18352D] leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-[#6E706B] leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-6 grid grid-cols-2 gap-6 my-6">
            <div>
              <span className="text-xs text-[#6E706B] block">Estimated Duration</span>
              <span className="font-serif text-xl font-semibold text-[#18352D] flex items-center gap-1.5 mt-1">
                <Clock className="w-4 h-4 text-[#B47A4A]" />
                {service.estimatedTime}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#6E706B] block">Starting Investment</span>
              <span className="font-serif text-xl font-semibold text-[#B47A4A] mt-1 block">
                {service.startingPrice}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/book?service=${service.slug}`}
              className="inline-flex items-center px-8 py-4 bg-[#18352D] hover:bg-[#2B463D] text-white text-xs font-semibold uppercase tracking-widest transition-colors space-x-2 group"
            >
              <span>Book {service.title}</span>
              <ArrowRight className="w-4 h-4 text-[#B47A4A] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-[#E2DDD5] bg-white p-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="mt-4 bg-[#18352D] text-white p-6 space-y-2">
            <div className="flex items-center space-x-2 text-xs text-[#B47A4A] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>MOTIVE & CO. GUARANTEE</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              12-Month or 15,000 km full warranty on all replaced parts and technical labor associated with this service.
            </p>
          </div>
        </div>
      </div>

      {/* Inclusions / Checklist */}
      <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-8 md:p-12">
        <SectionHeading
          eyebrow="SERVICE SCOPE"
          title="What is Included in This Service"
          subtitle="Detailed checklist performed during every procedure."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-white p-4 border border-[#E2DDD5]">
              <Check className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#202522] font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step by step process */}
      <div>
        <SectionHeading
          eyebrow="PROCEDURAL STEPS"
          title="Execution & Quality Assurance"
          subtitle="Step-by-step workflow followed by our technician team."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {service.processSteps.map((p) => (
            <div key={p.step} className="bg-[#FAF8F3] border border-[#E2DDD5] p-6 space-y-2">
              <span className="text-xs font-bold text-[#B47A4A]">{p.step}</span>
              <h4 className="font-serif text-lg font-medium text-[#18352D]">{p.title}</h4>
              <p className="text-xs text-[#6E706B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
