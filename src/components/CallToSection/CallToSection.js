import Link from "next/link";

const CallToSection = ({ className = "", container = true }) => {
  return (
    <section className={`call-to-section ${className}`}>
      <div className={container ? "auto-container" : "inner clearfix"}>
        <div className={container ? "inner clearfix" : ""}>
          <div className="shape-1 animated slideInRight"></div>
          <div className="shape-2 animated fadeInDown"></div>
          <div className={container ? "" : "auto-container clearfix"}>
            <h2>
              What are you waiting{container ? <br /> : ""}
              for, contact us today.
            </h2>
            <div className="link-box">
              <Link href="/contact">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Contact with us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
