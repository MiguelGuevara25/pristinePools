import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import MainFooter from "@/components/MainFooter/MainFooter";
import TextSplit from "@/components/Reuseable/TextSplit";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import { Col, Row } from "react-bootstrap";

const PageSpaServices = () => {
  return (
    <Layout pageTitle="Services">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      <div className="process-one">
        <div className="auto-container">
          <div className="sec-title">
            <Row className="clearfix">
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <h2>
                  <TextSplit text="Spa Services" />
                  <span className="dot">.</span>
                </h2>
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <div className="lower-text">
                  At Pristine Pool & Spa we offer a full line of quality
                  products and services to keep your spa running throughout the
                  year. With great package deals to choose from and the best
                  products available, we will take the worry out of owning and
                  maintaining your spa
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <MainFooter />
    </Layout>
  );
};

export default PageSpaServices;
