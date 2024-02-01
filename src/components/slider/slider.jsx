// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.scss";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import paddyImage from "./image/wheat-field-yellow.jpg";
import tractorImage from "./image/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai.jpg";
import Form from "../modal/modal";

export default function Wefsa() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500, // Set the duration of the animation
  //   });
  // }, []);

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        // loop="true"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        className="wefsa-Swiper"
      >
        {/* <SwiperSlide>
          <div className="swiper-image-one">
            <img src={paddyImage} alt="paddyImage" title="main-image-one" />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="swiper-image-two">
            <img src={tractorImage} alt="tractorImage" title="main-image-two" />
            <div className="title">
              <h1>Welcome to WEFSA</h1>
              <h4>Empowering Agriculture, Enriching Lives.</h4>
              <div className="enquiries-button">
                <button className="button-87">
                  <Form />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
