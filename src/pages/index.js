import AboutSeven from "@/components/AboutSection/AboutSeven";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import SliderSix from "@/components/SliderSection/SliderSix";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <SliderSix />
      <AboutSeven />
      <ServicesSectionOne />
      <SponsorsSection />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default Home;
