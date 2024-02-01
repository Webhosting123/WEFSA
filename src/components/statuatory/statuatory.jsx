import React from "react";
import "./statuatory.scss";
import { Container, Row, Col } from "react-bootstrap";

import data from "./founder.json";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Statuatory() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the duration of the animation
    });
  }, []);
  return (
    <section>
      <div className="statuatory-full">
        <div className="title" data-aos="fade-up">
          Statuatory Details
        </div>
        <div className="cnt" data-aos="fade-up">
          A Farmers Producer Company Limited Registered under Registration
          Companies Act 1956.
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="details" data-aos="fade-up">
                <ul>
                  <li>
                    {" "}
                    <b>Year of Establishment : 2014</b>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="details" data-aos="fade-up">
                <ul>
                  <li>
                    {" "}
                    <b>Date of Incorporation: 10.11.2014</b>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="details" data-aos="fade-up">
                <ul>
                  <li>
                    {" "}
                    <b>CIN : U01400TN2014PTC097959</b>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="details" data-aos="fade-up">
                <ul>
                  <li>
                    <b>
                      Crops covered : Citrus (Acid lime), Onion-small onion,
                      Vegetables, Traditional Paddy, Ground nut, Pulses and
                      organic jeggary.
                    </b>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="details" data-aos="fade-up">
                <ul>
                  <li>
                    {" "}
                    <b>No. of Producer Members : 614 members at present</b>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="districts" data-aos="fade-up">
                <ul>
                  <li>
                    <b>No. of Districts Covered : 14 districts</b>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="districts" data-aos="fade-up">
                <ul>
                  <li>
                    <b>No. of Villages Covered : 27 villages</b>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="founders">
                {data.map((founder, index) => (
                  <div key={index} className="founders">
                    <div className="title" data-aos="fade-up">
                      <b>{founder.title}</b>
                    </div>
                    <div className="name" data-aos="fade-up">
                      <ul>
                        <li>{founder.name}</li>
                      </ul>
                    </div>
                    <div className="location" data-aos="fade-up">
                      <ul>
                        <li>{founder.location}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col md={4}>
              <div className="co">
                <div className="title" data-aos="fade-up">
                  <b>Coordinators</b>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. K.V.Palanivel</div>
                  <ul>
                    <li>Perambalur</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Sivakumar</div>
                  <ul>
                    <li>Cuddalore</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Wilson Arokiyaraj</div>
                  <ul>
                    <li>Villupuram</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Sundaram</div>
                  <ul>
                    <li>Kallakuruchi</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Mohamad Saleem</div>
                  <ul>
                    <li>Salem</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Palanisamy</div>
                  <ul>
                    <li>Erode</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Gunasekaran</div>
                  <ul>
                    <li>Dharmapuri</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Siva</div>
                  <ul>
                    <li>Krishnagiri</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Balasubramanian</div>
                  <ul>
                    <li>Karur</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="co-co">
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Feddrick Nixson</div>
                  <ul>
                    <li>Trichy</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. M.Karthikeyan</div>
                  <ul>
                    <li>Thanjavur</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. S.Murugan</div>
                  <ul>
                    <li>Ariyalur</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Selvaraj</div>
                  <ul>
                    <li data-aos="fade-up">Thiruvarur</li>
                  </ul>
                </div>
                <div className="mamber" data-aos="fade-up">
                  <div className="name">Mr. Arun</div>
                  <ul>
                    <li>Dindigul</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
