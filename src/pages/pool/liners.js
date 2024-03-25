import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";

const PageLiners = () => {
  return (
    <Layout pageTitle="Liners">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Liners" page="About" />
      <FeaturedSection className="featured-section__about-two" />
      <SponsorsSectionTwo />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageLiners;
