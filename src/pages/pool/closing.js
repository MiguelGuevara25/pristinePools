import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";

const PageClosing = () => {
  return (
    <Layout pageTitle="Closing">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Closing" />
      <WeWorkSection />
      <MainFooter />
    </Layout>
  );
};

export default PageClosing;
