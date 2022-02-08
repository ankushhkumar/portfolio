import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn ,FaFacebookF} from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
           
        </Col>
        <Col md="4" className="footer-copywright">
           
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ankush7kumar"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ankush7chhokar"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ankushkumar7906/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:ankushchhokar7906@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
