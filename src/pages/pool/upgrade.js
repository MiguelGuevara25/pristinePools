import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PagePoolUpgrade = () => {
  return (
    <Layout pageTitle="Upgrade">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Upgrade" />
      <ProcessOne />
      <MainFooter />
    </Layout>
  );
};

export default PagePoolUpgrade;
