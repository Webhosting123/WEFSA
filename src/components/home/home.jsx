import React from "react";
// import HeaderSection from "../navebar/navebar";
import Wefsa from "../slider/slider";
// import AboutUs from "../about/about-us";
// import Overview from "../overview/overview";
// import Gallery from "../gallery/gallery";
import Statuatory from "../statuatory/statuatory";
import Contact from "../contact/contact";
import "./home.scss";
import Training from "../training/training";
import Puzzle from "../puzzle/puzzle";
import About from "../about-new/about";
import PhotoSlider from "../swiper/swiper";
// import Footer from "../footer/footer";

export default function HomePage() {
  return (
    <div className="main-page-view">
      {/* <HeaderSection /> */}
      <div className="main-page-swiper">
        <Wefsa />
      </div>
      <div className="about-us-main">
        {/* <AboutUs /> */}
        <About />
      </div>
      <div className="puzzle">
        <Puzzle />
      </div>
      {/* <div className="overview-main">
        <Overview />
      </div> */}
      <div className="gallery">
        {/* <Gallery /> */}
        <PhotoSlider />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="statuatory">
        <Statuatory />
      </div>
      <div className="trainings">
        <Training />
      </div>
      {/* <div className="footer">
        <Footer />
        </div> */}
    </div>
  );
}
