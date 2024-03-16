import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
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
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PagePoolUpgrade;
