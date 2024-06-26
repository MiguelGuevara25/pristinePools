import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/logo1.png";
import logo3 from "@/images/logo-3.png";
import logo6 from "@/images/update-01-10-2021/logo-6-light.png";
import logo7 from "@/images/update-01-10-2021/logo-7-light.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5-light.png";

export const footer = { year: new Date().getFullYear(), author: "Pristine Pool & Spa" };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase linoor Template Now",
  templateLink: "#",
};

export const mainFooter = {
  logo,
  logo3,
  logo5,
  logo6,
  logo7,
  logo8,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Social Networks:",
  address: "148 Edgewood Ave",
  address3: "66 Mark Street, New Town DC 5752, Lo New York",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "631 206 0704",
  phone2: "+92 3333 222 000",
  email: "pristinepoolandspas@gmail.com",
  textBottom:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "https://www.facebook.com/pristinepoolandspa",
      icon: "fab fa-facebook-square",
    }
  ],
  links: [
    {
      id: 1,
      href: "/pool/opening",
      title: "Pool Opening",
    },
    {
      id: 2,
      href: "/pool/closing",
      title: "Pool Closing",
    },
    {
      id: 3,
      href: "/pool/maintenance",
      title: "Pool Maintenance",
    },
    {
      id: 4,
      href: "/pool/upgrade",
      title: "Pool Upgrade",
    },
    {
      id: 5,
      href: "/pool/liners",
      title: "Pool Liners",
    },
    {
      id: 6,
      href: "/pool/heaters",
      title: "Pool Heaters",
    },
    {
      id: 7,
      href: "/pool/pool-slides",
      title: "Pool Slides",
    },
    {
      id: 8,
      href: "/spa/services",
      title: "Spa Services",
    },
    {
      id: 9,
      href: "/spa/covers",
      title: "Spa Covers",
    },
    {
      id: 10,
      href: "/construction",
      title: "Construction",
    },
    {
      id: 11,
      href: "/gallery",
      title: "Gallery",
    },
    {
      id: 12,
      href: "/contact",
      title: "Contact",
    },
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
