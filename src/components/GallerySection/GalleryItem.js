import React from "react";
import { Col, Image } from "react-bootstrap";

const GalleryItem = ({ item = {} }) => {
  const { image, filter } = item;

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className={`gallery-item position-absolute ${filter.join(" ")}`}
    >
      <div className="inner-box">
        <figure className="image">
          <Image
            src={require(`@/images/gallery/${image}`).default.src}
            alt=""
          />
        </figure>
        <a className="lightbox-image overlay-box"></a>
      </div>
    </Col>
  );
};

export default GalleryItem;
