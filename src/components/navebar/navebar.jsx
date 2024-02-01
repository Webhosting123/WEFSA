import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navebar.scss";
import Logo from "../main-logo/Logo";

function HeaderSection() {
  return (
    <Navbar expand="lg" className="farm-header">
      <Container>
        <Navbar.Brand href="#home" className="logo-header">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="home">
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
            </Nav.Link>

            <Nav.Link href="#contact" className="contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderSection;
