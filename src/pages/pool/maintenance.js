import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
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

      <div style={{ margin: "80px 0" }}>
        <FeatureSix />
      </div>

      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageMaintenance;
