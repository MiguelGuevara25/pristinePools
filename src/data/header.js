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
    // subNavItems: [
    //   { id: 1, name: "About Two", href: "/about-2" },
    //   { id: 2, name: "About Me", href: "/about-me" },
    //   { id: 3, name: "Our Mission", href: "/mission" },
    //   { id: 4, name: "Our History", href: "/history" },
    //   {
    //     id: 5,
    //     name: "Our Team",
    //     href: "/team",
    //     subItems: [
    //       { id: 1, name: "Team 01", href: "/team" },
    //       { id: 2, name: "Team 02", href: "/team-2" },
    //       { id: 3, name: "Team 03", href: "/team-3", isNew: true },
    //     ],
    //     isNew: true,
    //   },
    //   { id: 6, name: "Our Process", href: "/process", isNew: true },
    //   { id: 7, name: "Our Partner", href: "/partners", isNew: true },
    // ],
  },
  {
    id: 3,
    name: "Products",
    href: "#products",
    // subNavItems: [
    //   { id: 1, name: "Our Pricing", href: "/pricing" },
    //   { id: 2, name: "Pricing 02", href: "/pricing-2", isNew: true },
    //   { id: 3, name: "How it Works", href: "/how-it-works" },
    //   { id: 4, name: "Coming Soon", href: "/coming-soon" },
    //   { id: 5, name: "Testimonials", href: "/testimonials" },
    //   { id: 6, name: "Testimonials Two", href: "/testimonials-2" },
    //   { id: 7, name: "FAQs", href: "/faqs" },
    //   { id: 8, name: "Events", href: "/events" },
    //   { id: 9, name: "Event Details", href: "/event-details" },
    //   { id: 10, name: "Clients Page", href: "/clients" },
    //   { id: 11, name: "404 Page", href: "/404" },
    //   { id: 12, name: "Login Page", href: "/login" },
    //   { id: 13, name: "Register Page", href: "/register" },
    //   { id: 14, name: "Forget Page", href: "/forgot-password" },
    //   {
    //     id: 15,
    //     name: "Under Construction",
    //     href: "/under-construction",
    //     isNew: true,
    //   },
    // ],
  },
  {
    id: 4,
    name: "Pool",
    href: "/services",
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
    href: "/portfolio",
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
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
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
  phone: "631 206 0704",
  phone2: "+ 92 666 888 0000",
  email: "needhelp@linoor.com",
  icon,
  socials,
  text: "Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.",
};

export default headerData;
