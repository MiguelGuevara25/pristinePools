import bg from "@/images/background/bgOpening.png";
import bg2 from "@/images/background/bgClosing.png";
import bg3 from "@/images/background/bgMaintenance.png";
import bg4 from "@/images/background/bgUpgrade.png";
import bg5 from "@/images/background/bgLiners.png";
import bg6 from "@/images/background/bgHeaters.png";
import bg7 from "@/images/background/bgPoolSlides.png";
import bg8 from "@/images/background/bgSpaServices.png";
import Link from "next/link";

const PageBanner = ({ title = "" }) => {
  const bgRender = (title) => {
    switch (title) {
      case "Opening":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        );

      case "Closing":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg2.src})` }}
          ></div>
        );

      case "Maintenance":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg3.src})` }}
          ></div>
        );

      case "Upgrade":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg4.src})` }}
          ></div>
        );

      case "Liners":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg5.src})` }}
          ></div>
        );

      case "Heaters":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg6.src})` }}
          ></div>
        );

      case "Pool Slides":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg7.src})` }}
          ></div>
        );

      case "Services":
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg8.src})` }}
          ></div>
        );

      default:
        return (
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        );
    }
  };

  return (
    <section className="page-banner">
      {bgRender(title)}
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
