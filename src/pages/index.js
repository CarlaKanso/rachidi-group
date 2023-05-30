import { Inter } from "next/font/google";
import Services from "@/components/home/Services";
import PublicLayout from "@/components/layout/PublicLayout";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <Button>click me</Button>
        <Services />
      </PublicLayout>
    </>
  );
}
