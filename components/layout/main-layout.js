import { useEffect, useState } from "react";
import LandingPage from "../landing-page";
import Navbaar from "../navbar";

const MainLayout = ({ children }) => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //     const handleScroll = () => setIsScrolled(window.scrollY > 40);
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
    <h1>Sidebar</h1>
    {children}
    </>
  );
};

export default MainLayout;
