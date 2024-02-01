import React from "react";
import "./contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import speech from "./image/large-group-people-sitting-auditorium-watching-presentation-generated-by-ai.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the duration of the animation
    });
  }, []);

  return (
    <section>
      <div className="contact-full">
        <h1 className="title" data-aos="fade-up">
          About Managing Director
        </h1>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="contact-details">
                <div className="name" data-aos="fade-up">
                  Mahendra M Manivaasan
                </div>
                <div className="cnt" data-aos="fade-up">
                  Founder & Managing Director, Agriculture Scientist Global
                  Organic Leader by IFOAM Germany.
                </div>
                <div className="sub-cnt" data-aos="fade-up">
                  Has been vast experience in Organic Agriculture plant
                  protections for past 19 years 6 months. Now he is doing
                  research(Ph.D) in Management of Insect Pest and Diseeases by
                  using Organic Inputs( Organic Farming).
                </div>
                <div className="sub-cnt" data-aos="fade-up">
                  He is the Global Organic Leader by <b>IFOAM</b>, Germany. He
                  is the Honourable Board member of Board of Management of
                  Tamilnadu Agricultural University ( Agriculture Scientist,
                  Governor nominee) He is the Executive Director of A National
                  level Federated farmer producer company of{" "}
                  <b>MEGA AGRI BUSINESS CONSORTIUM PRODUCER COMPANY LIMITED.</b>
                </div>

                <div className="sub-cnt" data-aos="fade-up">
                  He is providing service to more than 25000 farmers directly
                  and also talking in <b>ALL INDIA RADIO(936 KHZ)</b> Trichy and
                  103.0 MHZ Coimbatore FM and also 100.3 Karaikkal FM channels
                  every Friday morning at 6.30 AM to 6.45 AM{" "}
                  <b>( உன்னால் முடியும் தோழா)</b>. For more than 500 weeks.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="contact-image" data-aos="fade-up">
                <img src={speech} alt="speech" title="speech" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
