import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serifFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Road Crafters Garage | Premium Motorcycle Service & Repair",
  description:
    "Precision service for every ride. Independent motorcycle workshop, OBD diagnostics, periodic maintenance, brake service, and suspension tuning.",
  keywords: [
    "motorcycle service",
    "bike garage",
    "motorcycle repair",
    "bike diagnostics",
    "chain sprocket service",
    "motorcycle detailing",
    "Road Crafters Garage",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F3EFE6] text-[#202321] selection:bg-[#A96F43] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
