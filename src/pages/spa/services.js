import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import TextSplit from "@/components/Reuseable/TextSplit";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import { Col, Row } from "react-bootstrap";

const PageSpaServices = () => {
  return (
    <Layout pageTitle="Services">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      <ProcessOne />
      <MainFooter />
    </Layout>
  );
};

export default PageSpaServices;
