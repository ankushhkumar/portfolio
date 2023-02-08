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
          I love working on projects such as Web Apps and Mobile Apps, from design to development. In my spare time I like to learn more about algorithms.
            <br />
            <br />
            Current software interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Algorithms driving Automation
            </li>
            <li className="about-activity">
              <ImPointRight /> Cyber Security
            </li>
            <li className="about-activity">
              <ImPointRight /> Operating Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Low Level Developments
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
