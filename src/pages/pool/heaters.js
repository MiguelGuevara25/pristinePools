import PageBanner from "@/components/BannerSection/PageBanner";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewGalleryHeaters from "@/components/NewGalleryHeaters";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";

const PageHeaters = () => {
  return (
    <Layout pageTitle="Heaters">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Heaters" page="About" />
      <FeatureEight />
      {/* <NewGalleryHeaters similar /> */}
      <SponsorsSectionTwo />
      <MainFooter />
    </Layout>
  );
};

export default PageHeaters;
