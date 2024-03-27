import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleServiceOne = ({ service = {} }) => {
  const { icon, href, title } = service;

  return (
    <Col
      xl={3}
      lg={6}
      md={6}
      sm={12}
      className="service-block animated fadeInLeft"
    >
      <div className="inner-box">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <Image width={64} src={icon} />
        </div>
        <h6>
          <a href={href}>
            <TextSplit text={title} />
          </a>
        </h6>
      </div>
    </Col>
  );
};

export default SingleServiceOne;
