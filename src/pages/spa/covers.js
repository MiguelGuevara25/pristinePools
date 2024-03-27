import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import AgencySection from "@/components/AgencySection/AgencySection";
import MainFooter from "@/components/MainFooter/MainFooter";

const PageSpaCovers = () => {
  return (
    <Layout pageTitle="Covers">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Covers" />
      <AgencySection />
      <MainFooter />
    </Layout>
  );
};

export default PageSpaCovers;
