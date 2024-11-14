import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const FooterLinks = [
    { title: "About", link: "/about" },
    { title: "Products", link: "/Products" },
    { title: "Services", link: "/services" },
    { title: "Help", link: "/Help" },
    { title: "Privacy Policy", link: "/privacypolicy" },
    { title: "Cookie Policy", link: "/cookiepolicy" },
    { title: "Terms and Conditions", link: "/terms-conditions" },
  ];
  return (
    <div className="footerBg">
      <Container>
        <div className="item_center flex-column">
          <img
            className="img-fluid"
            src="./images/logo.svg"
            alt="footer-logo"
          />
          <ul className="footerList mt-3 mt-lg-4 mb-3 mb-lg-5">
            {FooterLinks.map(item => <Link href={item.link} className="text-decoration-none"><li>{item.title}</li></Link>)}
            
          </ul>
          <div className="footerLine mb-3 mb-lg-5"></div>
          <div className="d-flex justify-content-between w-100">
            <p className=" m-0 text-start text-[#333333] text-base font-normal">
              @ 2024 IDECISION SCIENCE . All rights reserved
            </p>
            <img
              className="pointer ms-2"
              src="./images/instagram.svg"
              alt="instagram-logo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
