import AboutSeven from "@/components/AboutSection/AboutSeven";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PartnerOne from "@/components/PartnerSection/PartnerOne";
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
      {/* <SponsorsSection /> */}
      <PartnerOne />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default Home;
