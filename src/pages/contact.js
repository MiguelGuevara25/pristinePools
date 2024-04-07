import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MapBox from "@/components/MapSection/MapBox";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      {/* <ContactSection form /> */}
      <div className="container" style={{marginTop: "40px", marginBottom: "40px"}}>
        <ContactInfoTwo />
        <MapBox />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default Contact;
