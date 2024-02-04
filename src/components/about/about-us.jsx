import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wheetImage from ".././slider/image/paz-arando-zwZusrYAGoM-unsplash.jpg";
import "./about-us.scss";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the duration of the animation
    });
  }, []);
  return (
    <section>
      <div className="about-us-full" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="about-image" data-aos="fade-up">
                <img src={wheetImage} alt="wheetImage" title="wheetImage" />
              </div>
            </Col>

            <Col md={6}>
              <div className="about-cnt">
                <div className="title">
                  <div data-aos="fade-up">
                    {" "}
                    <h1>About Us</h1>
                  </div>
                </div>
                <div className="cnt">
                  <div data-aos="fade-up">
                    <h4>
                      Established in 2014 by a dynamic group of young farmers
                      committed to uplifting marginalized communities, WEFSA
                      envisions a future where farmers break free from
                      intergenerational poverty. Our mission is to equip the
                      underprivileged with technical, organizational, marketing,
                      and networking skills, creating prosperity from farm gate
                      to food plate.
                    </h4>
                  </div>

                  <div data-aos="fade-up">
                    {" "}
                    <h4>
                      Established in 2014 by a dynamic group of young farmers
                      committed to uplifting marginalized communities, WEFSA
                      envisions a future where farmers break free from
                      intergenerational poverty. Our mission is to equip the
                      underprivileged with technical, organizational, marketing,
                      and networking skills, creating prosperity from farm gate
                      to food plate.
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
