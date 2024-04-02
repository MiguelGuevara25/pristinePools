import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo1.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
  target: false,
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "Services",
    href: "#services",
    target: false,
  },
  {
    id: 3,
    name: "Products",
    href: "#products",
    target: false,
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
    target: false,
  },
  {
    id: 5,
    name: "Spa",
    href: "",
    subNavItems: [
      { id: 1, name: "Services", href: "/spa/services" },
      { id: 2, name: "Covers", href: "/spa/covers" },
    ],
    target: false,
  },
  {
    id: 6,
    name: "Construction",
    href: "/construction",
    target: false,
  },
  {
    id: 7,
    name: "Gallery",
    href: "/gallery",
    target: false,
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact",
    target: false,
  },
  {
    id: 9,
    name: "Pay Now",
    href: "https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f97136376547c&mfid=1712095836753_f97136376547c#/checkout/openButton",
    target: true,
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "https://www.facebook.com/pristinepoolandspa",
  },
];

const headerData = {
  title: "Pristine Pool & Spa",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "+1 (516) 770-3555",
  phone2: "+ 92 666 888 0000",
  email: "pristinepoolandspas@gmail.com",
  icon,
  socials,
  text: "",
};

export default headerData;
