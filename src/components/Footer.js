import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/r2-logo.png";      // <-- UPDATED LOGO
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <MailchimpForm />

          <Col size={12} sm={6}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ width: "70px", height: "auto" }} 
            />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/rashique-parvez-306807251"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/rashiqueparvez"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              {/* Dummy */}
              <a href="#" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Social" />
              </a>

            </div>

            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
