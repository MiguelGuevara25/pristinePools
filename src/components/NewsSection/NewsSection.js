import newsSection from "@/data/newsSection";
import useActive from "@/hooks/useActive";
import { Image, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";
import logoBobe from "../../../public/logoBobe.png";

const { newsData } = newsSection;

const NewsSection = ({ className = "", showTitle = true }) => {
  const ref = useActive("#blog");

  return (
    <section
      ref={ref}
      className={`news-section ${className}`}
      style={{ paddingTop: "0px" }}
      id="blog"
    >
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              <a href="https://www.grandeffects.com/en" target="_blank">
                <Image src={logoBobe.src} alt="icon" width={250} height={250} />
              </a>
            </h2>
          </div>
        )}

        <Row className="clearfix">
          {newsData.slice(0, showTitle ? 3 : undefined).map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default NewsSection;
