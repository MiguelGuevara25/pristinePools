import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageClosing = () => {
  return (
    <Layout pageTitle="Closing">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
    </Layout>
  );
};

export default PageClosing;
