import AboutCompany from "@/components/AboutUs/AboutCompany";
import Mission from "@/components/AboutUs/Mission";
import PublicLayout from "@/components/layout/PublicLayout";

export default function About() {
  return (
    <PublicLayout>
      <AboutCompany />
      <Mission />
    </PublicLayout>
  );
}
