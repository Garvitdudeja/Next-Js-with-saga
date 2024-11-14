import { IsClientContext } from "@/pages/_app";
import { useAuthSelector } from "@/redux/selector/auth";
import * as images from "@/utilities/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbaar() {
  const [active, setActive] = useState(false);
  const isClient = useContext(IsClientContext)
  const pathname = usePathname();
  const router = useRouter();
console.log(images)
  const handleActive = () => {
    setActive(!active);
    console.log(active, "active");
  };
  const authSelector = useAuthSelector();

  console.log(authSelector, "data");

  // const headerLinks = [
  //   {
  //     name: 'Home',
  //     path: '/',
  //   },
  //   {
  //     name: 'Our Product',
  //     path: '/ourprducts',
  //   },

  // ];

  return (
    <>
      {/* <Navbar expand={'lg'} className="py-3 navBg sticky-top"> */}
      <Navbar className="w-100 " expand={"lg"}>
        <Container>
          <Navbar.Brand href="#">
            <Image
              className="img-fluid logo"
              src={images.companyLogo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Image
                  className=" logo max-w-[160px]"
                  src={images.companyLogo}
                  alt="logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <hr className="leftMenuLine" />
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navHeaderLink">
                <Link
                  className={
                    !active && pathname === "/"
                      ? "activeLink headerLink me-0 me-lg-5 text-decoration-none"
                      : "headerLink me-0 me-lg-5 text-decoration-none"
                  }
                  href={"/"}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  className={
                    !active && pathname === "/blogs"
                      ? "activeLink headerLink me-0 me-lg-5 text-decoration-none"
                      : "headerLink me-0 me-lg-5 text-decoration-none"
                  }
                  href={"/blogs"}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Blogs
                </Link>
                <Link
                  className={
                    active
                      ? "activeLink headerLink me-0 me-lg-5 text-decoration-none"
                      : "headerLink me-0 me-lg-5 text-decoration-none"
                  }
                  href={"/#our_product"}
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  Our Product
                </Link>
                {isClient && authSelector.isLoggedIn ? (
                  <button
                    className=" borderBtn"
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                  >
                    Dashboard
                    </button>
                ) : (
                  <button
                    className=" borderBtn"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    SIGN IN
                  </button>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;
