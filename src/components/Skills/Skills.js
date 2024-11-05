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
              <div style={{ marginBottom: 20 }}> Python, C++, Java, XML, Kotlin, C, JavaScript, SQL, Bash, Scheme, CSS </div>
              <strong>Databases and Tools</strong>
              <div style={{ marginBottom: 20 }}> MySQL, OracleDB, Firebase Realtime, MongoDB, Redis, SQLLite, PostgreSQL, Git, Docker, Maven, Postman, Jupyter Notebook, JSON, Microsoft Azure Cloud, AWS </div>
              <strong>Framework and Libraries</strong>
              <div style={{ marginBottom: 20 }}> React, Redux, Node.js, Spring Boot, Android, Prisma, PyTorch, Django, ReactJS </div>
              <strong>Architecture Styles</strong>
              <div > Client-Server, MVC, MVVM, Microservices, HTTP </div>
              
            </Card.Text>
          </Card.Body> 
        </Card>
        <Github className="about-section" />
      </Container>
    </Container>
  );
}

export default Skills;
