import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageGallery = () => {
  return (
    <Layout pageTitle="Gallery">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Gallery" />
      <GallerySectionOne />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default PageGallery;
