import { Inter } from "next/font/google";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";
import ExportSection from "@/components/home/ExportSection";
import WholesaleSection from "@/components/home/WholesaleSection";
import FoodParcelsSection from "@/components/home/FoodParcelsSection";
import Gallery from "@/components/home/Gallery";
import Brands from "@/components/home/Brands";
import ImageCarousel from "@/components/home/Carousel";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <Gallery />
        {/* <ImageCarousel /> */}
        <ExportSection />
        <WholesaleSection />
        <FoodParcelsSection />
        <Brands />
      </PublicLayout>
    </>
  );
}
