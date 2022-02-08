import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Github from "./Github"
function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Card className="project-card-view">
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              <strong>Languages</strong>
              <div style={{ marginBottom: 20 }}> Python • C++ • Java • Kotlin • Golang • C • JavaScript • SQL • Scheme • HTML/CSS </div>
              <strong>Tools</strong>
              <div > Git • Android Studio • React • Bash • Docker • Heroku • Node.js • JavaFX </div>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Github className="about-section" />
      </Container>
    </Container>
  );
}

export default Skills;
