import AboutTen from "@/components/AboutSection/AboutTen";
import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageMaintenance = () => {
  return (
    <Layout pageTitle="Maintenance">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Maintenance" />

      <div className="my-5">
        <AboutTen />
      </div>

      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageMaintenance;
