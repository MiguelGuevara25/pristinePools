import { partnerOne } from "@/data/partnerSection";
import { Col, Image, Row } from "react-bootstrap";

const PartnerOne = () => {
  return (
    <section className="partner-one">
      <div className="auto-container">
        <div className="sec-title">
          <h2>Our Products</h2>
        </div>
        <Row>
          {partnerOne.map(({ id, image, title, text, link }) => (
            <Col key={id} md={6} lg={4}>
              <div className="partner-one__card">
                <div className="partner-one__image">
                  <a href={link} target="_blank">
                    <Image
                      src={require(`@/images/update-01-10-2021/sponsor/${image}`)
                        .default.src}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PartnerOne;
