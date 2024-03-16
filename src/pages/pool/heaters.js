import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageHeaters = () => {
  return (
    <Layout pageTitle="Heaters">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Heaters" page="About" />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageHeaters;
