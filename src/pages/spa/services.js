import PageBanner from "@/components/BannerSection/PageBanner";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageSpaServices = () => {
  return (
    <Layout pageTitle="Services">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      {/* <ProcessOne /> */}
      <FeatureSeven />
      <MainFooter />
    </Layout>
  );
};

export default PageSpaServices;
