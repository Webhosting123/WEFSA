import React, { useState } from "react";
import "./training.scss";
import tick from "../assets/price-tick.svg";
import { Container, Row } from "react-bootstrap";
import Form from "../modal/modal";
import Join from "../join/join";

function Training() {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => setDisplay(true);
  const displayClose = () => setDisplay(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const free = [
    "Free Training",
    "Fixed Time",
    "Fixed Topic",
    "Daily Meet",
    "4:30-5:30 AM",
  ];
  const onfarm = [
    "Customized ",
    "Customizable Time",
    "Customize Topic",
    "Doubt Session",
    "Planning",
  ];
  const group = [
    "Preferable Location",
    "Onspot Training",
    "Live demo",
    "Crop guidance",
    "Organic  Practices",
  ];
  return (
    <div className="trainings" id="training">
      <Container>
        <Row>
          <span className="train-span">Training</span>
        </Row>
        <Row>
          <div className="main-train">
            <div className="column-1">
              <div className="free-train">
                <h3>Free Training</h3>
                {free.map((item, index) => {
                  return (
                    <div className="features" key={index}>
                      <img src={tick} alt="right" />
                      <span>{item}</span>
                    </div>
                  );
                })}
                <button onClick={handleDisplay}> Join Us</button>
              </div>
            </div>
            <div className="column-1">
              <div className="free-train">
                <h3>Onfarm Training</h3>
                {onfarm.map((item, index) => {
                  return (
                    <div className="features" key={index}>
                      <img src={tick} alt="right" />
                      <span>{item}</span>
                    </div>
                  );
                })}
                <button onClick={handleShow}>Enquire</button>
              </div>
            </div>
            <div className="column-1">
              <div className="free-train">
                <h3>Group Training</h3>
                {group.map((item, index) => {
                  return (
                    <div className="features" key={index}>
                      <img src={tick} alt="right" />
                      <span>{item}</span>
                    </div>
                  );
                })}
                <button onClick={handleShow}>Enquire</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Form show={show} handleClose={handleClose} />
      <Join show={display} handleClose={displayClose} />
    </div>
  );
}

export default Training;
