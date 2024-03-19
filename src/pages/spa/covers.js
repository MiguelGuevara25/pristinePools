import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import AgencySection from "@/components/AgencySection/AgencySection";

const PageSpaCovers = () => {
  return (
    <Layout pageTitle="Covers">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Covers" />
      <AgencySection />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageSpaCovers;
