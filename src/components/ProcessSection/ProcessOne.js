import { processOne, processThree, processTwo } from "@/data/processSection";
import { Col, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import TextSplit from "../Reuseable/TextSplit";

const ProcessOne = () => {
  const { pathname } = useRouter();

  const title = "Pool Slides";
  const text =
    "Pristine Pool & Spa offers you a variety of slides from the smaller slides like the Cyclone to more of a thrilling experience like the Turbo Twister. With many different slides to choose from we guarantee you will find the one that will work with your backyard paradise. Give us a call and we would be glad to go over the different slide options and help you determine what would work best for you.";

  const replaceInfo = (pathname) => {
    switch (pathname) {
      case "/pool/upgrade":
        return;

      case "/pool/pool-slides":
        return (
          <div className="sec-title">
            <Row className="clearfix">
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <h2>
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <div className="lower-text">{text}</div>
              </Col>
            </Row>
          </div>
        );

      case "/spa/services":
        return (
          <div className="sec-title">
            <Row className="clearfix">
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <h2>
                  <TextSplit text="Spa Services" />
                  <span className="dot">.</span>
                </h2>
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} className="column">
                <div className="lower-text">
                  At Pristine Pool & Spa we offer a full line of quality
                  products and services to keep your spa running throughout the
                  year. With great package deals to choose from and the best
                  products available, we will take the worry out of owning and
                  maintaining your spa
                </div>
              </Col>
            </Row>
          </div>
        );
    }
  };

  const replaceInfo2 = (pathname) => {
    switch (pathname) {
      case "/pool/pool-slides":
        return processTwo.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={
                    require(`@/images/update-01-10-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>{title}</h2>
                </div>
                <p className="process-one__summery">{text}</p>
                <ul className="list-unstyled process-one__list">
                  {lists?.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ));

      case "/pool/upgrade":
        return processOne.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={
                    require(`@/images/update-01-10-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>
                    {title} <span className="dot">.</span>
                  </h2>
                </div>
                <p className="process-one__summery">{text}</p>
                <ul className="list-unstyled process-one__list">
                  {lists?.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ));

      case "/spa/services":
        return processThree.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={
                    require(`@/images/update-01-10-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>

            <Col md={12} lg={6}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>
                    {title}
                  </h2>
                </div>
                <p className="process-one__summery" style={{fontSize: "25px"}}>{text}</p>
                <ul className="list-unstyled process-one__list">
                  {lists?.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ));
    }
  };

  return (
    <section className="process-one">
      <div className="auto-container">
        {replaceInfo(pathname)}
        {replaceInfo2(pathname)}
      </div>
    </section>
  );
};

export default ProcessOne;
