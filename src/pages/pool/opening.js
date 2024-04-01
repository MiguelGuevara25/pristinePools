import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";

const PageOpening = () => {
  return (
    <Layout pageTitle="Opening">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Opening" />
      <WeWorkSection />
      <MainFooter />
    </Layout>
  );
};

export default PageOpening;
