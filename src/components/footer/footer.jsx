import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Footer() {
  return (
    <section>
      <div className="footer-full">
        <Container>
          <Row>
            <Col md={4}>
              <div className="address">
                <div className="icon-add">
                  <div className="gif">
                    <IoLocationOutline />
                  </div>
                  <div className="cnts">
                    <div className="title">Address</div>
                    <div className="cnt">
                      134 A, First Floor, Ramachara Complex,
                    </div>
                    <div className="cnt">Bazaar St, Perambalur - 621212, </div>
                    <div className="cnt">Tamil Nadu, India.</div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="ways">
                <div className="phone">
                  <div className="image">
                    <FiPhone />
                  </div>

                  <div className="cont">
                    <div className="title">Phone</div>
                    <div className="one">
                      {" "}
                      <a href="tel:+91 4328 277 955">+91 4328 277 955</a>
                    </div>
                    <div className="two">
                      <a href="tel:+91 9965 737 555">+91 9965 737 555</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="mail">
                <div className="mail-cnt">
                  <div className="image">
                    <CiMail />
                  </div>
                  <div className="cnt">
                    <div className="title">E-Mail</div>
                    <div className="to">
                      <a href="mailto:md@wefsa.com">md@wefsa.com</a>
                    </div>
                    <div className="to-to">
                      <a href="mailto:wefsa2014@gmail.com">
                        wefsa2014@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={2}>
              <div className="map">
                <div className="frame">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.347443918836!2d78.86280167496433!3d11.235831388942277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1b68a3b07203%3A0x41604c417f7710c8!2sWEFSA%20Farmers%20Producer%20Company%20Limited!5e0!3m2!1sen!2sin!4v1706785271946!5m2!1sen!2sin"
                    width="100"
                    height="100"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="wefas"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="social">
                <div className="fb">
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                </div>
                <div className="insta">
                  <a href="#">
                    <CiInstagram />
                  </a>
                </div>

                <div className="twitter">
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </div>

                <div className="linkedin">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </div>

                <div className="google">
                  <FcGoogle />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
