import React from "react";
import "./about.scss";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import all from "./contents";
import Readmore from "../readmore/readmore";

function About() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(null);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (index) => {
    setStep(index);
    setShow(true);
  };
  return (
    <section>
      <div className="about-uss" id="about">
        <Container>
          <Row>
            <Col sm={12} className="colomn">
              <div className="title">
                <h1>About Us</h1>
              </div>
              <div className="overall-content">
                {all.map((item, index) => {
                  return (
                    <div className="line" key={index}>
                      <div className="images">
                        <img src={item.icon} alt="cow" />
                      </div>
                      <h5>{item.title}</h5>
                      <span>{item.desc}</span>
                      <div
                        className="read_more"
                        onClick={() => handleShow(index)}
                      >
                        <span className="read">READ MORE</span>
                        <span className="plus">{item.img}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Readmore show={show} handleClose={handleClose} step={step} />
    </section>
  );
}

export default About;
