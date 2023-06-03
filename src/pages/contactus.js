import ContactForm from "@/components/ContactUs/ContactForm";
import MapOffice from "@/components/ContactUs/MapOffice";
import PublicLayout from "@/components/layout/PublicLayout";

export default function ContactUS() {
  return (
    <>
      <PublicLayout>
        <ContactForm />
        <MapOffice />
      </PublicLayout>
    </>
  );
}
