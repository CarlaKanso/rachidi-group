import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
