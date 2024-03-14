import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageOpening = () => {
  return (
    <Layout pageTitle="Opening">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
    </Layout>
  );
};

export default PageOpening;
