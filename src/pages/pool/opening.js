import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";

const PageOpening = () => {
  return (
    <Layout pageTitle="Opening">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Opening" page="About" />
      <WeWorkSection />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageOpening;
