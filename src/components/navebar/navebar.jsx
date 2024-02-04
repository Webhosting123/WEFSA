import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navebar.scss";
import Logo from "../main-logo/Logo";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
function HeaderSection() {
  // const [Contactshow, setContactshow] = useState(false);
  // const ContacthandleShow = () => setContactshow(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const MenuData = [
    {
      menu: "Home",
      url: "#home",
      as: HashLink,
    },

    {
      menu: "About Us",
      url: "#about",
      as: HashLink,
    },

    {
      menu: "Overview",
      url: "#overview",
      as: HashLink,
    },
    {
      menu: "Gallery",
      url: "#gallery",
      as: HashLink,
    },
    {
      menu: "Training",
      url: "#training",
      as: HashLink,
    },
    {
      menu: "Contact Us",
      url: "#foot",
      as: HashLink,
    },
  ];
  return (
    <Navbar expand="lg" className="farm-header" data-sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="logo-header">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {MenuData.map((data, index) => (
              <Nav.Link
                as={data.as}
                to={data.url}
                key={index}
                className={data.menu.toLowerCase()}
                eventKey={index}
                smooth
                scroll={(el) => scrollWithOffset(el)}
                active={index === activeIndex}
                onClick={() => handleNavLinkClick(index)}
              >
                {data.menu}
              </Nav.Link>
            ))}
            {/* <Nav.Link href="#home" className="home">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="about">
              About us
            </Nav.Link>
            <Nav.Link href="#moto" className="moto">
              Overview
            </Nav.Link>
            <Nav.Link href="#gallery" className="gallery">
              Gallery
            </Nav.Link>

            <Nav.Link href="#training" className="training">
              Training
            </Nav.Link> */}

            {/* <Nav.Link href="#contact" className="contact">
              Contact us
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderSection;
