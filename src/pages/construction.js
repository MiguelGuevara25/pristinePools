import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";

const PageConstruction = () => {
  return (
    <Layout pageTitle="Construction">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Construction" />
      <FeaturedSection className="featured-section__about-two" />
      <SponsorsSectionTwo />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageConstruction;
