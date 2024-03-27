import PageBanner from "@/components/BannerSection/PageBanner";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageHeaters = () => {
  return (
    <Layout pageTitle="Heaters">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Heaters" page="About" />
      <FeatureEight />
      <MainFooter />
    </Layout>
  );
};

export default PageHeaters;
