import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import photoPrueba from "@/images/logo1.png";

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
        <Image width={"100%"} src={icon} style={{height: "130px"}} />

        <h6 style={{marginTop: "25px"}}>
          <TextSplit text={title} />
        </h6>
      </div>
    </Col>
  );
};

export default SingleServiceOne;
