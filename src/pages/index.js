import { Inter } from "next/font/google";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";
import ExportSection from "@/components/home/ExportSection";
import WholesaleSection from "@/components/home/WholesaleSection";
import FoodParcelsSection from "@/components/home/FoodParcelsSection";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <ExportSection />
        <WholesaleSection />
        <FoodParcelsSection />
      </PublicLayout>
    </>
  );
}
