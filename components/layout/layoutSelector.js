import MainLayout from "./main-layout";
import AuthLayout from "./auth-layout";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbaar from "../navbar";

const getLayout = (Component, pageProps) => {

  const [scrolltopdata, setscrolltopdata] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
        setscrolltopdata('');
      } else {
        setscrolltopdata('scrolled');
      }
    });
  }, [])
  const router = useRouter()



  const authPages = ["/login", "/verify"]
  const navbarPages = ["/", "/blogs", "/blogs/[id]","/privacypolicy","/cookiepolicy","/terms-conditions"]

  const authenticatedPages = ['/dashboard']

  if (authPages.includes(router.pathname)) {
    return (pageProps) => (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    );
  }


  if (authenticatedPages.includes(router.pathname)) {
    return (pageProps) => (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }


  return (pageProps) => (
    <>
      {/* <div className="position-relative"> */}
        {navbarPages.includes(router.pathname) && (
          <div className={`header-wrapper ${scrolltopdata}`}>
            <div className="container-fluid p-0">
              <div className="header-part">
                <Navbaar />
              </div>
            </div>
          </div>
        )}
        <Component {...pageProps} />
      {/* </div> */}
    </>
  );
};

export default getLayout;