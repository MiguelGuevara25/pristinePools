import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";

const PageProducts = () => {
  return (
    <Layout pageTitle="Products">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Products" />
      <SponsorsSection />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default PageProducts;
