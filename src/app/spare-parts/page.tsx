import React from "react";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import SparePartsClient from "@/components/SparePartsClient";

export const metadata = {
  title: "Genuine Motorcycle Spare Parts & OEM Components | RoadCrafters Garage",
  description:
    "100% Genuine OEM motorcycle spare parts, Motul synthetic lubricants, Brembo brake pads, SKF seals, and high-performance filters in Porvorim, Goa.",
};

export default function SparePartsPage() {
  return (
    <ConvexClientProvider>
      <SparePartsClient />
    </ConvexClientProvider>
  );
}
