"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-[#FAF8F3] border border-[#E2DDD5] transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-serif text-lg font-medium text-[#18352D] pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#B47A4A] transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-[#6E706B] leading-relaxed border-t border-[#E2DDD5]/50 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
