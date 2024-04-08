import featuredSection from "@/data/featuredSection";
import { Col, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import imageContruction from "@/images/resource/photoContruction.png";

const { imageLiner, title, text, features } = featuredSection;

const FeaturedSection = ({ className = "" }) => {
  const { pathname } = useRouter();

  return (
    <section className={`featured-section ${className}`}>
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                {pathname === "/construction" ? (
                  <Image src={imageContruction.src} alt="" />
                ) : (
                  <Image src={imageLiner.src} alt="" />
                )}
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              {pathname === "/construction" ? (
                <div className="sec-title">
                  <h2 style={{ marginBottom: "30px" }}>
                    Construction
                    <span className="dot">.</span>
                  </h2>
                  <div className="lower-text">
                    Pool construction encompasses many projects and the
                    complexity of each can vary greatly. From the basic
                    installation of a diving board stand, slide, or step rails
                    to more complex projects like installing or replacing steps,
                    adding a swim out lounger, or having an existing pool
                    reconstructed. We know that owning and maintaining a
                    swimming pool can be a lot of work so whether your project
                    is small, large or in between -- we are here to help! We
                    want to make sure that your pool has everything you want.
                    With manufactures like Cardinal, Alps, Quaker, and Triac we
                    can offer both top quality products and service at an
                    affordable rate.
                  </div>
                </div>
              ) : (
                <div className="sec-title">
                  <h2 style={{ marginBottom: "30px" }}>
                    Our Liners
                    <span className="dot">.</span>
                  </h2>
                  <div className="lower-text">
                    Liners don't last forever but the good news is we are here
                    to help. We will bring you dozens of liner patterns to
                    choose from so you can find the perfect design for your pool
                    right from the comfort of your very own home. From start to
                    finish we are there to make the process as easy as possible.
                    We will gladly answer any questions you may have because we
                    want you to feel comfortable knowing that you made the right
                    choice.
                    <br />
                    <br />
                    To view all the liners each brand offers simply click on the
                    logos below.
                  </div>
                </div>
              )}

              <div className="features">
                {/* <Row className="clearfix">
                  {features.map(({ id, title, text }) => (
                    <Col key={id} md={6} sm={12} className="feature">
                      <div className="inner-box">
                        <h6>{title}</h6>
                        <div className="text">{text}</div>
                      </div>
                    </Col>
                  ))}
                </Row> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeaturedSection;
