import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo2 from "../assets/img/logo2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo2} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atmane-hachimi-25158b294/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/HACHIMIATMANE"><img src={navIcon2} alt="" /></a>
              <a href="hachimiatmane03@gmail.com"><img src={navIcon3} alt="" /></a>
              <a href="https://www.instagram.com/hachimi.atmane/"><img src={navIcon4} alt="" /></a>

            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
