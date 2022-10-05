import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I recently graduated from the <span className="purple">University of Waterloo </span> with an undergraduate degree in Honors Computer Science.
          I love working on projects such as Mobile Apps and Web Apps, from design to development. In my spare time I like to learn more about algorithms, and blockchains.
            <br />
            <br />
            Current software interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> React
            </li>
            <li className="about-activity">
              <ImPointRight /> Android Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Operating Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> C++ Applications
            </li>
          </ul>

          <p style={{  textAlign: "justify" ,marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Testing leads to failure, and failure leads to understanding."{" "}
          </p>
          <footer style={{  textAlign:"end" }} className="blockquote-footer">Burt Rutan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
