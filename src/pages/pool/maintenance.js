import PageBanner from "@/components/BannerSection/PageBanner";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
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

      <MainFooter />
    </Layout>
  );
};

export default PageMaintenance;
