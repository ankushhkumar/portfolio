import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import RayTracer from "../../Assets/Projects/rayTracer.jpg";
import socaCricketLogo from "../../Assets/Projects/socaCricketLogo.png";
import algorithms from "../../Assets/Projects/algorithms.jpg";
import healthy from "../../Assets/Projects/healthy.jpg";
import Chess from "../../Assets/Projects/chess.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

       

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socaCricketLogo}
              isBlog={false}
              hasWebsite={true}
              title="SOCA-Cricket"
              description="Created an interactive fully responsive website from scratch using react designed for Southern Ontario Cricket League played by 16 teams every season. It displays all the information about the association and the events that takes place in the league. Implemented user centered design using react bootstrap and CSS while also applying multi-page layout and DRY principle."
              linkProject="https://github.com/Ankush7Kumar/SOCA-Cricket"
              link="http://www.socacricket.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              hasWebsite={false}
              title="Chess - Three Levels"
              description="Created a command line chess game from scratch using C++ with upto three levels of human versus computer variations available. Implemented min-max algorithm to generate next optimal move of the computer in human vs computer version of the game. Used design patterns for efficient code, the game could be upgrade to the graphical version from command line version."
              linkProject="https://github.com/Ankush7Kumar/The-Game-of-Chess"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthy}
              isBlog={false}
              hasWebsite={false}
              title="Healthy 24/7"
              description="Developed an android app using Java and XML that lets you set up a diet chart and calculate your body's BMI as well as BMR. Integrated USDA nutrition database API using retrofit HTTP client library to search nutrition of around 200,000+ food items. Implemented data storage using SQL database as the user can create a log of his/her BMI or BMR at a specific data and time."
              linkProject="https://github.com/Ankush7Kumar/Healthy-24-7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RayTracer}
              isBlog={false}
              hasWebsite={false}
              title="Ray Tracer"
              description="A raytracer written in C++ to render and produce highly realisitic images of geometric data like spheres in a scene. Provided multi-threading support using OpenMP API and implemented advanced features like anti-aliasing."
              linkProject="https://github.com/Ankush7Kumar/RayTracer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algorithms}
              isBlog={false}
              hasWebsite={false}
              title="Algorithms"
              description="Wrote various algorithms just for fun as I am extremely interested in this field.                                                                                                                                           "
              linkProject="https://github.com/Ankush7Kumar/Algorithms/tree/main/questions"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
