import sponsors from "@/data/sponsorsSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: false,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    600: {
      items: 2,
      gutter: 30,
    },
    768: {
      items: 3,
      gutter: 30,
    },
    992: {
      items: 4,
      gutter: 30,
    },
    1200: {
      items: 5,
      gutter: 30,
    },
  },
};

const SponsorsSection = ({ className = "" }) => {
  const listRef = useRef(null);
  const ref = useActive("#products");

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const targetId = "#products";
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // Ajuste para dejar espacio para el título

        window.scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href="#products"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href="#products"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`sponsors-section ${className}`}
      id="products"
    >
      <div className="sec-title centered">
        <h2>
          Our Products
          <span className="dot">.</span>
        </h2>
      </div>

      <div className="sponsors-outer">
        <div className="auto-container">
          <div className="sponsors-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-15` }}
              ref={listRef}
            >
              {sponsors.map((image, index) => {
                return (
                  <div
                    ref={listRef}
                    key={index}
                    className="slide-item text-center"
                  >
                    <figure className="image-box">
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={
                            require(`@/images/clients/${
                              className.includes("dark")
                                ? "dark-1.png"
                                : image.src
                            }`).default.src
                          }
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
