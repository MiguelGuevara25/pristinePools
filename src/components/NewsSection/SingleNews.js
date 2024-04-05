import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { image } = news;

  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box">
          <Image
            src={require(`@/images/resource/${image}`).default.src}
            alt=""
          />
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
