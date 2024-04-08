import { Col, Image } from "react-bootstrap";
import Link from "next/link";

const NewGalleryItem = ({ item = {} }) => {
  const { image, link } = item;

  return (
    <Col lg={6} md={6} sm={12} className={`gallery-item position-absolute`}>
      {/* <Link href={link} target="_blank"> */}
        <div className="inner-box">
          <figure className="image">
            <Image
              src={require(`@/images/gallery/${image}`).default.src}
              alt=""
            />
          </figure>
          <a href={link} target="_blank" className="lightbox-image overlay-box"></a>
        </div>
      {/* </Link> */}
    </Col>
  );
};

export default NewGalleryItem;
