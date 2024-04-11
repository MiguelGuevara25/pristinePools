import { featureSeven, featureSeven1 } from "@/data/featuresSection";
import { Col, Row, Image } from "react-bootstrap";

const { features } = featureSeven;
const { features1 } = featureSeven1;

const FeatureSeven = () => {
  return (
    <>
      <section className="feature-seven">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Spa Maintenance</h2>
          </div>

          <div className="d-flex justify-content-center">
            <Image src="/spaMaintenance.jpg" className="w-50 h-50" />
          </div>

          <Row>
            {features.map(({ id, title, list }) => (
              <Col key={id} md={12} lg={4}>
                <div className="feature-seven-card">
                  <div className="feature-seven-card__inner">
                    <div className="feature-seven-card__content">
                      <h3 className="feature-seven-card__title">{title}</h3>
                      <ul className="list-unstyled process-one__list">
                        {list?.map((text, i) => (
                          <li key={i}>
                            <i className="flaticon-check"></i>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="feature-seven">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Spa Detailing Packages</h2>
          </div>

          <div className="d-flex justify-content-center">
            <Image src="/spaService.jpg" className="w-50 h-50 mb-5 rounded-3" />
          </div>

          <Row>
            {features1.map(({ id, title, list }) => (
              <Col key={id} md={12} lg={4}>
                <div className="feature-seven-card">
                  <div className="feature-seven-card__inner">
                    <div className="feature-seven-card__content">
                      <h3 className="feature-seven-card__title">{title}</h3>
                      <ul className="list-unstyled process-one__list">
                        {list?.map((text, i) => (
                          <li key={i}>
                            <i className="flaticon-check"></i>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default FeatureSeven;
