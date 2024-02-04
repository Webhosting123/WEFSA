import React from "react";
import "./puzzle.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import overview from "../assets/overview.jpg";
import supply from "../assets/supply.jpg";
import vision from "../assets/vision.jpg";
import program from "../assets/program.jpg";

function Puzzle() {
  return (
    <section>
      <div className="tabs" id="overview">
        <div className="container">
          <div className="title">
            {" "}
            <h1>Overview</h1>{" "}
          </div>
          <div className="inner">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="whole-row">
                <Col sm={3} className="left_side">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Supply Chain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Vision</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Programs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="right-side">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="left-tab">
                        <div className="content">
                          <h4>Overview</h4>
                          <p>
                            WEFSA FARMERS PRODUCER COMPANY LIMITED was
                            envisioned in 2014 by a group of young and energetic
                            farmers with empathy for the marginalized and
                            underprivileged mass of the farming society.
                          </p>
                          <ul className="unlist">
                            <li className="listed">
                              <h5>Our Vision</h5>
                              <p>
                                Professionalizing the informal trade channel of
                                fresh farm produce (FFP) and creating gainful,
                                dignified self-employment for families dependent
                                on the agriculture sector is at the core of our
                                vision.
                              </p>{" "}
                            </li>
                            <li className="listed">
                              <h5>Mission Statement</h5>
                              <p>
                                Equipping marginalized and poor individuals with
                                technical, organizational, marketing,
                                negotiating, and networking skills is our
                                mission. We believe that empowering these
                                individuals will break the cycle of
                                intergenerational poverty.
                              </p>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="image-half">
                          <img src={overview} alt="Girl" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="left-tab">
                        <div className="content">
                          <h4>Organizing the Chain</h4>
                          <p>
                            Formation of farmer groups for collective and
                            planned farming. Establishment of a robust supply
                            chain infrastructure. Organization of vendors into
                            marketing groups.
                          </p>
                          <ul className="unlist">
                            <li className="listed">
                              <h5>Linking Interests</h5>
                              <p>
                                Attractive partnerships between farmers and
                                vendors have been formed, emphasizing shared
                                interests and mutual growth. A totally
                                integrated supply chain ensures product
                                integrity from source to customer, reducing
                                waste and costs.
                              </p>{" "}
                            </li>
                            <li className="listed">
                              <h5>Holistic Approach</h5>
                              <p>
                                WEFSA has been diligently working towards
                                professionalizing farm produce and empowering
                                vegetable street vendors and marginal growers.
                                The focus is on creating wealth and prosperity
                                from the farm gate to the food plate through a
                                holistic view of the produce supply chain.
                              </p>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="image-half">
                          <img src={supply} alt="Girl" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="left-tab">
                        <div className="content">
                          <h4>Professionalization Vision</h4>
                          <p>
                            WEFSA envisions professionalizing the informal trade
                            channel of fresh farm produce (FFP) to create
                            gainful, dignified self-employment for families
                            dependent on the agriculture sector.
                          </p>
                          <ul className="unlist">
                            <li className="listed">
                              <h5>Collaboration & Organization</h5>
                              <p>
                                Collaboration, organization, and
                                professionalization with small and marginal
                                farmers. Collaboration with rural diaspora
                                serving as street vendors, forming an organized
                                link with farmers.
                              </p>{" "}
                            </li>
                            <li className="listed">
                              <h5>Livelihood Empowerment</h5>
                              <p>
                                Social and livelihood empowerment of street
                                vendors and growers, connecting them to urban
                                consumption markets through a safe and
                                accountable food supply.
                              </p>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="image-half">
                          <img src={vision} alt="Girl" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="left-tab">
                        <div className="content">
                          <h4>Core Objectives</h4>
                          <p>
                            Enhance identity and provide life dignity. Increase
                            profitability and sustainability for urban poor and
                            rural growers. Provide quality, fresh, and hygienic
                            fruits & vegetables at reasonable prices. Introduce
                            a broad range of social security and financial
                            services to vendors and growers.
                          </p>
                          <ul className="unlist">
                            <li className="listed">
                              <h5>Development Programs</h5>
                              <p>
                                Promotion of sustainable farmer’s business
                                enterprises. Facilitation of a robust
                                vegetable/agriculture supply chain from field to
                                retail outlet. Empowerment of farmers through
                                financial literacy. Strong collaboration with
                                agri-input suppliers and research institutions.
                              </p>{" "}
                            </li>
                            <li className="listed">
                              <h5>Our Focus Areas</h5>
                              <p>
                                Sustainable farmer's business enterprises.
                                Financial literacy to empower farmers. Robust
                                vegetable/agriculture supply chain from field to
                                retail outlet. Collaboration with agri-input
                                suppliers and research institutions.
                              </p>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="image-half">
                          <img src={program} alt="Girl" />
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Puzzle;
