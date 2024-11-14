import getLayout from "@/components/layout/layoutSelector";
import { wrapper } from "@/redux/index";
import "@/styles/auth.css";
import "@/styles/custom.css";
import "@/constants/fonts/webfontkit-20241111-043902/stylesheet.css";
import "@/styles/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useEffect, useState } from "react";

export const IsClientContext = createContext()
function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  const Layout = getLayout(Component, pageProps);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <IsClientContext.Provider value={isClient}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={2000}
          hideProgressBar
          newestOnTopF
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </Layout>
      </IsClientContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default wrapper.withRedux(App);
