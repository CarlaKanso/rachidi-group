import AboutCompany from "@/components/AboutUs/AboutCompany";
import Mission from "@/components/AboutUs/Mission";
import PublicLayout from "@/components/layout/PublicLayout";
import { withAuth } from "@/hooks/routes";

function About() {
  return (
    <PublicLayout>
      <AboutCompany />
      <Mission />
    </PublicLayout>
  );
}

export default withAuth(About);
