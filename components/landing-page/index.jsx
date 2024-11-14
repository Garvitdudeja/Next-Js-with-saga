// "use client";

import Discover from "./discover";
// import WhyLabas from "./why-labas";
// import Featured from "./featured";
// import HowWorks from "./how-works";
// import CustomersSay from "./customers-say";
// import Questions from "./questions";
// import SendEmail from "./send-email";
import OurProducts from "../ourProducts";
import PopularTools from "../popularTools";
import LatestBlogs from "../latestBlogs";
import Subscribe from "../subscribe";
import Footer from "../footer";

const LandingPage = () => {
  return (
    <>
      <Discover />
      <OurProducts />
      <PopularTools />
      <LatestBlogs />
      <Subscribe />
      <Footer />
      {/* <WhyLabas /> */}
      {/* <Featured /> */}
      {/* <HowWorks /> */}
      {/* <CustomersSay /> */}
      {/* <Questions /> */}
      {/* <SendEmail /> */}
    </>
  );
};

export default LandingPage;
