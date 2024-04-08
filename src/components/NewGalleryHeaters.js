import { galleryHeaters } from "@/data/gallerySection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import Masonry from "react-masonry-component";
import NewGalleryItem from "./NewGalleryItem";

const masonryOptions = {
  transitionDuration: 500,
};

const NewGalleryHeaters = ({ portfolio = false, similar = false }) => {
  const ref = useActive("#portfolio");

  return (
    <section
      ref={ref}
      className={`gallery-section${similar ? " similar-gallery" : ""}`}
      id="portfolio"
    >
      <div className="auto-container">
        <div className="mixitup-gallery">
          <div className={portfolio || similar ? "" : "upper-row clearfix"}>
            {!portfolio && (
              <div className={`sec-title${similar ? " centered" : ""}`}>
                <h2>
                  {similar ? "Pool heaters " : title}
                  <span className="dot">.</span>
                </h2>
              </div>
            )}
          </div>
          <Masonry
            options={masonryOptions}
            className="row position-relative filter-list"
          >
            {galleryHeaters.map((item) => (
              <NewGalleryItem item={item} key={item.id} />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default NewGalleryHeaters;
