import React from "react";
import "./gallery.scss";
import { Container, Row, Col } from "react-bootstrap";
import imageone from "../assets/paddy.jpg";
import imageTwo from "../assets/close-up-portrait-cute-cow-grazing-meadow-generated-by-artificial-intelligence.jpg";
import imageThree from "../assets/kian-hao-ng-44s10tNvXK4-unsplash.jpg";
import imageFour from "../assets/krishna-k-maiti-PbIFcYpB230-unsplash.jpg";
import imageFive from "../assets/krishna-kant-02P9SveWru4-unsplash.jpg";
import imageSix from "../assets/sandy-zebua-a7n65pmnJ4Q-unsplash.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section>
      <div className="gallery-full" id="gallery">
        <div className="title" data-aos="fade-up">
          {" "}
          <h1>Gallery</h1>{" "}
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="image-one" data-aos="flip-left">
                <img src={imageone} alt="imageone" title="imageone" />
              </div>
            </Col>
            <Col md={4}>
              <div className="image-one" data-aos="flip-right">
                <img src={imageTwo} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="image-one" data-aos="flip-down">
                <img src={imageThree} alt="" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div className="image-one" data-aos="flip-down">
                <img src={imageFour} alt="imageFour" title="imageFour" />
              </div>
            </Col>
            <Col md={4}>
              <div className="image-one" data-aos="flip-right">
                <img src={imageFive} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="image-one" data-aos="flip-left">
                <img src={imageSix} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
