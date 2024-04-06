import {
  sponsorsSectionTwo,
  sponsorsSectionTwoConstruction,
} from "@/data/sponsorsSection";
import { useRouter } from "next/router";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { images, title } = sponsorsSectionTwo;
const { images2, title2 } = sponsorsSectionTwoConstruction;

const SponsorsSectionTwo = () => {
  const { pathname } = useRouter();

  const renderSponsors = (url) => {
    switch (url) {
      case "/pool/liners":
        return (
          <Row className="clearfix">
            <Col xl={5} lg={12} md={12} className="title-col">
              <div className="sec-title animated fadeInLeft">
                <h2>
                  {title}
                  <span className="dot">.</span>
                </h2>
              </div>
            </Col>

            <Col xl={7} lg={12} md={12} className="logo-col">
              <Row className="clearfix">
                {images.map((image, i) => {
                  return (
                    <Col
                      key={i}
                      xl={6}
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      className="logo-block"
                    >
                      <div className="image-box">
                        <a href={image.link} target="_blank">
                          <Image src={image.logo.src} alt="" />
                        </a>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        );

      case "/construction":
        return (
          <Row className="clearfix">
            <Col xl={5} lg={12} md={12} className="title-col">
              <div className="sec-title animated fadeInLeft">
                <h2>
                  {title2}
                  <span className="dot">.</span>
                </h2>
              </div>
            </Col>

            <Col xl={7} lg={12} md={12} className="logo-col">
              <Row className="clearfix">
                {images2.map((image, i) => {
                  return (
                    <Col
                      key={i}
                      xl={4}
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      className="logo-block"
                    >
                      <div className="image-box">
                        <a href={image.link} target="_blank">
                          <Image src={image.logo.src} alt={image.logo} />
                        </a>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        );
    }
  };

  return (
    <section className="sponsors-section-two">
      <div className="auto-container">{renderSponsors(pathname)}</div>
    </section>
  );
};

export default SponsorsSectionTwo;
