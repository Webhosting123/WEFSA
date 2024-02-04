import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import photo from "./swiper-photo";
import "swiper/css/pagination";
import Container from "react-bootstrap/Container";
import "./swiper.scss";

import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
export default function PhotoSlider() {
  return (
    <>
      <section>
        <div className="gallery-full" id="gallery">
          <div className="title">
            <h1>Gallery</h1>
          </div>
          <Container>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Autoplay, EffectCoverflow]} // Include Autoplay and EffectCoverflow modules
              className="mySwiper"
              autoplay={{ delay: 2000 }}
              slidesPerView={3}
              spaceBetween={10}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 10,
                stretch: 10,
                depth: 100,
                modifier: 0,
                slideShadows: true,
              }}
            >
              {photo.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.image} alt="swiper" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
      </section>
    </>
  );
}
