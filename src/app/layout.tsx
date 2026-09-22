import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RoadCrafters Garage (रोडक्राफ्टर्स गैरेज) | Motorcycle Repair Shop in Porvorim, Goa",
  description:
    "RoadCrafters Garage (रोडक्राफ्टर्स गैरेज) is a top-rated 5.0★ Motorcycle Repair Shop in Porvorim, Goa. Meticulous servicing, OBD diagnostics, brake service, chain & sprocket, and suspension overhauls. Located at Shop - 9, Alcon Regency, Defence Colony, Porvorim, Goa. Call +91 86684 12375.",
  keywords: [
    "RoadCrafters Garage",
    "रोडक्राफ्टर्स गैरेज",
    "Motorcycle Repair Shop",
    "Motorcycle Service Goa",
    "Porvorim Motorcycle Garage",
    "Bike Diagnostics Goa",
    "Shop 9 Alcon Regency Porvorim",
    "Aradi Socorro Goa",
  ],
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "MotorcycleRepair",
  "name": "RoadCrafters Garage",
  "alternateName": "रोडक्राफ्टर्स गैरेज",
  "category": "Motorcycle Repair Shop",
  "telephone": "+91 86684 12375",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro",
    "addressLocality": "Porvorim",
    "addressRegion": "Goa",
    "postalCode": "403521",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "15.539",
    "longitude": "73.834"
  },
  "hasMap": "https://maps.google.com/?q=Shop+-+9,+Alcon+Regency,+Village+Panchayat,+near+Nexa+Showroom,+Defence+Colony,+Aradi+Socorro,+Porvorim,+Goa+403521,+India",
  "openingHours": "Mo-Su 08:00-22:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "55"
  },
  "priceRange": "₹₹",
  "knowsAbout": ["Motorcycle Repair", "OBD Diagnostics", "Periodic Maintenance", "Brake Service", "Suspension Tuning"],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Rider friendly",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1F1E1B] selection:bg-[#C5A059] selection:text-white relative">
        <ConvexClientProvider>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
