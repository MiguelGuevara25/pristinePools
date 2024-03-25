import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PagePoolSlides = () => {
  return (
    <Layout pageTitle="Pool Slides">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Pool Slides" page="About" />
      <ProcessOne />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PagePoolSlides;
