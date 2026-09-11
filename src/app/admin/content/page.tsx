"use client";

import React, { useState, useEffect } from "react";
import { Settings, Save, CheckCircle2, Wrench, Clock, Phone, MapPin, Star, HelpCircle, Plus, Trash2 } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { SERVICES_DATA, REVIEWS_DATA } from "@/data/content";

const DEFAULT_BUSINESS_INFO = {
  name: "RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)",
  phone: "+91 86684 12375",
  whatsapp: "+918668412375",
  hours: "Open — Closes at 10:00 PM",
  address: "Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro, Porvorim, Goa 403521",
};

const DEFAULT_FAQ_ITEMS = [
  {
    question: "Do you use genuine OEM spare parts and Motul synthetic oils?",
    answer: "Yes, we exclusively install genuine factory parts and premium Motul/Castrol 100% synthetic engine oils for optimum engine protection and longevity."
  },
  {
    question: "How long does a Periodic Service take?",
    answer: "A standard periodic service takes approximately 2 to 3 hours, including our 32-point rider safety inspection, ultrasonic chain cleaning, and test ride."
  },
  {
    question: "Do you offer motorcycle pick-up and drop-off in Porvorim & nearby Goa areas?",
    answer: "Yes, we offer doorstep motorcycle pick-up and drop-off service across Porvorim, Panjim, Mapusa, and surrounding Goa regions."
  }
];

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState<"services" | "business" | "reviews" | "faqs">("services");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateContentMutation = useMutation(api.content.updateByKey);

  // Queries for Convex content
  const dbServices = useQuery(api.content.getByKey, { key: "services" });
  const dbBusiness = useQuery(api.content.getByKey, { key: "businessDetails" });
  const dbReviews = useQuery(api.content.getByKey, { key: "reviews" });
  const dbFaqs = useQuery(api.content.getByKey, { key: "faqs" });

  // State
  const [services, setServices] = useState<any[]>(SERVICES_DATA);
  const [business, setBusiness] = useState<any>(DEFAULT_BUSINESS_INFO);
  const [reviews, setReviews] = useState<any[]>(REVIEWS_DATA);
  const [faqs, setFaqs] = useState<any[]>(DEFAULT_FAQ_ITEMS);

  useEffect(() => {
    if (dbServices?.value) {
      try { setServices(JSON.parse(dbServices.value)); } catch (e) {}
    }
    if (dbBusiness?.value) {
      try { setBusiness(JSON.parse(dbBusiness.value)); } catch (e) {}
    }
    if (dbReviews?.value) {
      try { setReviews(JSON.parse(dbReviews.value)); } catch (e) {}
    }
    if (dbFaqs?.value) {
      try { setFaqs(JSON.parse(dbFaqs.value)); } catch (e) {}
    }
  }, [dbServices, dbBusiness, dbReviews, dbFaqs]);

  const handleSave = async (key: string, data: any) => {
    setSaving(true);
    setSuccess(false);

    try {
      await updateContentMutation({
        key,
        value: JSON.stringify(data, null, 2),
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(`Failed to save ${key}:`, err);
      alert(`Failed to save ${key}. Check Convex database connection.`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8D1C5] pb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#17352D]">
            Site Content & Business Manager
          </h1>
          <p className="text-xs text-[#6E706B] mt-1">
            Update service packages, shop rates, business hours, contact numbers, and customer reviews.
          </p>
        </div>

        <button
          onClick={() => {
            if (activeTab === "services") handleSave("services", services);
            if (activeTab === "business") handleSave("businessDetails", business);
            if (activeTab === "reviews") handleSave("reviews", reviews);
            if (activeTab === "faqs") handleSave("faqs", faqs);
          }}
          disabled={saving}
          className="px-6 py-2.5 bg-[#17352D] hover:bg-[#23443A] text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center space-x-2 shadow-sm self-start sm:self-auto disabled:opacity-50"
        >
          <Save className="w-4 h-4 text-[#A96F43]" />
          <span>{saving ? "Saving Changes..." : "Save Section"}</span>
        </button>
      </div>

      {success && (
        <div className="bg-emerald-100 border border-emerald-300 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Changes saved to Convex database successfully!</span>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white border border-[#E2DDD5] p-1 flex items-center space-x-1 shadow-sm overflow-x-auto">
        <button
          onClick={() => setActiveTab("services")}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "services" ? "bg-[#17352D] text-[#A96F43]" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Services & Rates</span>
        </button>
        <button
          onClick={() => setActiveTab("business")}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "business" ? "bg-[#17352D] text-[#A96F43]" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>Business Details</span>
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "reviews" ? "bg-[#17352D] text-[#A96F43]" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          <Star className="w-4 h-4" />
          <span>Google Reviews</span>
        </button>
        <button
          onClick={() => setActiveTab("faqs")}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "faqs" ? "bg-[#17352D] text-[#A96F43]" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>FAQs</span>
        </button>
      </div>

      {/* Tab 1: Services */}
      {activeTab === "services" && (
        <div className="space-y-6">
          <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm">
            <h2 className="font-serif text-xl font-medium text-[#17352D] mb-4">
              Workshop Service Packages ({services.length})
            </h2>
            <div className="space-y-6">
              {services.map((srv, idx) => (
                <div key={srv.id || idx} className="p-4 bg-stone-50 border border-[#E2DDD5] space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-[#17352D]">Service Name</label>
                      <input
                        type="text"
                        value={srv.title}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].title = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#E2DDD5] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-[#17352D]">Price (₹)</label>
                      <input
                        type="text"
                        value={srv.startingPrice}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].startingPrice = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#E2DDD5] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-[#17352D]">Est. Time</label>
                      <input
                        type="text"
                        value={srv.estimatedTime}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].estimatedTime = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#E2DDD5] text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-[#17352D]">Short Description</label>
                    <input
                      type="text"
                      value={srv.shortDesc || srv.description}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[idx].shortDesc = e.target.value;
                        setServices(updated);
                      }}
                      className="w-full px-3 py-2 bg-white border border-[#E2DDD5] text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Business Details */}
      {activeTab === "business" && (
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm space-y-6">
          <h2 className="font-serif text-xl font-medium text-[#17352D] border-b border-[#E2DDD5] pb-3">
            Garage Contact & Location Info
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Shop Name
              </label>
              <input
                type="text"
                value={business.name || "RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)"}
                onChange={(e) => setBusiness({ ...business, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Primary Phone Number
              </label>
              <input
                type="text"
                value={business.phone || "+91 86684 12375"}
                onChange={(e) => setBusiness({ ...business, phone: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                WhatsApp Phone Number
              </label>
              <input
                type="text"
                value={business.whatsapp || "+918668412375"}
                onChange={(e) => setBusiness({ ...business, whatsapp: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Working Hours
              </label>
              <input
                type="text"
                value={business.hours || "Open — Closes at 10:00 PM"}
                onChange={(e) => setBusiness({ ...business, hours: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
              Full Workshop Address
            </label>
            <textarea
              rows={2}
              value={business.address || "Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro, Porvorim, Goa 403521"}
              onChange={(e) => setBusiness({ ...business, address: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm"
            />
          </div>
        </div>
      )}

      {/* Tab 3: Reviews */}
      {activeTab === "reviews" && (
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
            <h2 className="font-serif text-xl font-medium text-[#17352D]">
              Customer Reviews ({reviews.length})
            </h2>
            <button
              onClick={() => setReviews([...reviews, { author: "New Customer", badge: "1 review", date: "Recently", rating: 5, comment: "Great service!" }])}
              className="px-3 py-1.5 bg-[#17352D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5 text-[#A96F43]" />
              <span>Add Review</span>
            </button>
          </div>

          <div className="space-y-4">
            {reviews.map((rev, idx) => (
              <div key={idx} className="p-4 bg-stone-50 border border-[#E2DDD5] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="grid grid-cols-2 gap-4 flex-1 mr-4">
                    <input
                      type="text"
                      value={rev.author || rev.name}
                      onChange={(e) => {
                        const updated = [...reviews];
                        updated[idx].author = e.target.value;
                        setReviews(updated);
                      }}
                      className="px-3 py-1.5 bg-white border text-xs font-semibold"
                    />
                    <input
                      type="text"
                      value={rev.badge || rev.vehicle || "5.0 ★ Review"}
                      onChange={(e) => {
                        const updated = [...reviews];
                        updated[idx].badge = e.target.value;
                        setReviews(updated);
                      }}
                      className="px-3 py-1.5 bg-white border text-xs"
                    />
                  </div>
                  <button
                    onClick={() => setReviews(reviews.filter((_, i) => i !== idx))}
                    className="text-stone-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  rows={2}
                  value={rev.comment || rev.text}
                  onChange={(e) => {
                    const updated = [...reviews];
                    updated[idx].comment = e.target.value;
                    setReviews(updated);
                  }}
                  className="w-full px-3 py-1.5 bg-white border text-xs text-stone-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: FAQs */}
      {activeTab === "faqs" && (
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
            <h2 className="font-serif text-xl font-medium text-[#17352D]">
              Frequently Asked Questions ({faqs.length})
            </h2>
            <button
              onClick={() => setFaqs([...faqs, { question: "New Question?", answer: "Answer details..." }])}
              className="px-3 py-1.5 bg-[#17352D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5 text-[#A96F43]" />
              <span>Add FAQ</span>
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-stone-50 border border-[#E2DDD5] space-y-3">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[idx].question = e.target.value;
                      setFaqs(updated);
                    }}
                    className="w-full px-3 py-1.5 bg-white border text-xs font-semibold mr-4"
                  />
                  <button
                    onClick={() => setFaqs(faqs.filter((_, i) => i !== idx))}
                    className="text-stone-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  rows={2}
                  value={faq.answer}
                  onChange={(e) => {
                    const updated = [...faqs];
                    updated[idx].answer = e.target.value;
                    setFaqs(updated);
                  }}
                  className="w-full px-3 py-1.5 bg-white border text-xs text-stone-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
