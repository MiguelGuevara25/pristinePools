import PageBanner from "@/components/BannerSection/PageBanner";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageGallery = () => {
  return (
    <Layout pageTitle="Gallery">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Gallery" />
      <GallerySectionOne />
      <MainFooter />
    </Layout>
  );
};

export default PageGallery;
