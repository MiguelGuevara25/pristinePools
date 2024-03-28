import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

const {
  title,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo9,
  title2,
  navItems,
  navItemsTwo,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch } = useRootContext();
  const newNavItems = onePage ? navItemsTwo : navItems;
  let Logo =
    logo === 2
      ? logo2
      : logo === 3
      ? logo3
      : logo === 5
      ? logo5
      : logo === 9
      ? logo9
      : logo1;

  if (logo === 4) {
    if (scrollTop) {
      Logo = logo1;
    } else {
      Logo = logo4;
    }
  }
  const navItems2 = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Services",
      href: "/",
    },
    {
      id: 3,
      name: "Products",
      href: "/",
    },
    {
      id: 4,
      name: "Pool",
      href: "",
      subNavItems: [
        { id: 1, name: "Opening", href: "/pool/opening" },
        { id: 2, name: "Closing", href: "/pool/closing" },
        { id: 3, name: "Maintenance", href: "/pool/maintenance" },
        { id: 4, name: "Up Grade", href: "/pool/upgrade" },
        { id: 5, name: "Liners", href: "/pool/liners" },
        { id: 6, name: "Heaters", href: "/pool/heaters" },
        { id: 7, name: "Pool Slides", href: "/pool/pool-slides" },
      ],
    },
    {
      id: 5,
      name: "Spa",
      href: "",
      subNavItems: [
        { id: 1, name: "Services", href: "/spa/services" },
        { id: 2, name: "Covers", href: "/spa/covers" },
      ],
    },
    {
      id: 6,
      name: "Construction",
      href: "/construction",
    },
    {
      id: 7,
      name: "Gallery",
      href: "/gallery",
    },
    {
      id: 8,
      name: "Contact",
      href: "/contact",
    },
  ];
  const { pathname } = useRouter();

  return (
    <header
      className={`main-header${
        scrollTop ? " fixed-header" : ""
      } ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
              </div>
              <ul className="list-unstyled social-links">
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="header-upper">
        <div className={autoContainer ? "inner-container clearfix" : ""}>
          <div
            className={
              autoContainer ? "auto-container" : "inner-container clearfix"
            }
          >
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <a title={title}>
                    <Image
                      id="thm-logo"
                      src={Logo.src}
                      alt={title}
                      title={title}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={
                    autoContainer
                      ? ""
                      : "collapse navbar-collapse show clearfix"
                  }
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  {pathname !== "/" ? (
                    <ul className="navigation clearfix">
                      {navItems2.map((navItem) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                        />
                      ))}
                    </ul>
                  ) : (
                    <ul className="navigation clearfix">
                      {newNavItems.map((navItem) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                <div className="cart-btn">
                  <Link href="/cart">
                    <a className="theme-btn cart-toggler"></a>
                  </Link>
                </div>

                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  ></button>
                </div>

                <div className="link-box">
                  <div className="call-us">
                    <a
                      className="link"
                      href={`tel:${phone.split(" ").join("")}`}
                    >
                      <span className="icon"></span>
                      <span className="sub-text">Call Today</span>
                      <span className="number">{phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className="right-menu">
                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-loupe"></span>
                  </button>
                </div>
                <div onClick={toggleMenu} className="mobile-nav-toggler">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="txt">Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
