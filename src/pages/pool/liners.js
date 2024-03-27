import PageBanner from "@/components/BannerSection/PageBanner";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
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
      <MainFooter/>
    </Layout>
  );
};

export default PageLiners;
