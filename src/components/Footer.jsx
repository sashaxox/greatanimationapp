import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import teleimg from "../assets/img/tele-img.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/саша-хох-077a92190/">
                <img alt="logo" src={navIcon1} />
              </a>
              <a href="https://www.instagram.com/sasha_xox123/">
                <img alt="logo" src={navIcon3} />
              </a>
              <a className="telegram" href="https://t.me/Sashaxox">
                <img alt="logo" src={teleimg} />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
