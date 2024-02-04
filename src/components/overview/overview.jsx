import React from "react";
import "./overview.scss";
import { Container, Row, Col } from "react-bootstrap";

import paddyImageOne from "./image/farmer-holds-rice-hand.jpg";
import thumbsUp from "./image/portrait-asian-middle-aged-man-wearing-straw-hat-loincloth-write-clipboard-with-young-woman-farmer.jpg";
import girl from "./image/farmers-are-working-vegetable-farm-checking-vegetable-plants-using-digital-tablet.jpg";
import hand from "./image/environmental-conservation-plant-sustainability.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Overview() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section>
      <div className="overview-full" id="overview">
        <div className="title" data-aos="fade-up">
          <h1>Overview</h1>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="overview-cnt">
                <div className="vision">
                  <div className="title" data-aos="fade-up">
                    Our Vision
                  </div>
                  <div className="cnt" data-aos="fade-up">
                    Professionalizing the informal trade channel of fresh farm
                    produce (FFP) and creating gainful, dignified
                    self-employment for families dependent on the agriculture
                    sector is at the core of our vision.
                  </div>
                </div>
                <div className="mission">
                  {" "}
                  <div className="title" data-aos="fade-up">
                    Mission Statement
                  </div>
                  <div className="cnt" data-aos="fade-up">
                    Equipping marginalized and poor individuals with technical,
                    organizational, marketing, negotiating, and networking
                    skills is our mission. We believe that empowering these
                    individuals will break the cycle of intergenerational
                    poverty.
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="overview-image">
                <div className="image-one" data-aos="fade-up">
                  <img
                    src={paddyImageOne}
                    alt="paddyImageOne"
                    title="paddyImageOne"
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <div className="overview-image">
                <div className="image-one" data-aos="fade-up">
                  <img src={thumbsUp} alt="thumbsUp" title="thumbsUp" />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="holistic">
                <div className="title" data-aos="fade-up">
                  Holistic Approach to Agriculture
                </div>

                <div className="cnt">
                  <div className="sub-cnt" data-aos="fade-up">
                    WEFSA takes a holistic view of the vegetable and produce
                    supply chain, organizing both ends by:
                  </div>
                  <ul>
                    <li className="listed" data-aos="fade-up">
                      Forming farmer groups for collective and planned farming.
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Establishing a robust supply chain infrastructure.
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Organizing vendors into marketing groups.
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Linking marketing and farming groups for mutual growth.
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Advocating agricultural training for rural women, who form
                      a significant portion of agricultural laborers.
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Incorporating the latest technology in agriculture and its
                      supply chain. Integrated Supply Chain
                    </li>
                    <li className="listed" data-aos="fade-up">
                      Our company ensures product integrity from source to
                      customer by establishing a totally integrated supply
                      chain. This reduces waste, extends shelf life, and lowers
                      the cost of agri-produce from hinterlands to markets.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <div className="Empowering">
                <div className="title" data-aos="fade-up">
                  Empowering Stakeholders
                </div>
                <div className="cnt" data-aos="fade-up">
                  WEFSA empowers stakeholders by:
                  <ul>
                    <li data-aos="fade-up">
                      Providing crop protection services through experienced
                      agriculture graduates.
                    </li>
                    <li data-aos="fade-up">
                      Offering social, financial, and information security.
                    </li>
                    <li data-aos="fade-up">
                      Issuing identity cards to vendors and company members.
                    </li>
                    <li data-aos="fade-up">
                      Providing insurance and credit facilities to small and
                      marginal farmers and vendors.
                    </li>
                    <li data-aos="fade-up">
                      Innovative marketing strategies, such as direct home
                      delivery services and assigning new roles to vendors,
                      demonstrate our commitment to thinking outside the box.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="focus">
                <div className="title" data-aos="fade-up">
                  Our Focus Areas
                </div>
                <div className="cnt" data-aos="fade-up">
                  <ul>
                    <li data-aos="fade-up">
                      Sustainable farmer's business enterprises.
                    </li>
                    <li data-aos="fade-up">
                      Financial literacy to empower farmers.
                    </li>
                    <li data-aos="fade-up">
                      Robust vegetable/agriculture supply chain from field to
                      retail outlet.
                    </li>
                    <li data-aos="fade-up">
                      Collaboration with agri-input suppliers and research
                      institutions.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="overview-image">
                <div className="image-one" data-aos="fade-up">
                  <img src={girl} alt="girl" title="girl" />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <div className="overview-image">
                <div className="image-one" data-aos="fade-up">
                  <img src={hand} alt="hand" title="hand" />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="Objectives">
                <div className="title" data-aos="fade-up">
                  Objectives
                </div>
                <div className="cnt" data-aos="fade-up">
                  <ul>
                    <li data-aos="fade-up">
                      Enhance identity and provide life dignity.
                    </li>
                    <li>
                      Increase profitability and sustainability for both urban
                      poor and rural growers.
                    </li>
                    <li data-aos="fade-up">
                      Provide quality, fresh, and hygienic fruit & vegetables at
                      reasonable prices.
                    </li>
                    <li data-aos="fade-up">
                      Introduce a broad range of social security and financial
                      services to vendors and growers.
                    </li>
                    <li data-aos="fade-up">
                      Join WEFSA in its transformative journey towards creating
                      a thriving, sustainable agricultural ecosystem that
                      benefits all stakeholders.
                    </li>
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
