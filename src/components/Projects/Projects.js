import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import RayTracer from "../../Assets/Projects/rayTracer.jpg";
import socaCricketLogo from "../../Assets/Projects/socaCricketLogo.png";
import algorithms from "../../Assets/Projects/algorithms.jpg";
import healthy from "../../Assets/Projects/healthy.jpg";
import Chess from "../../Assets/Projects/chess.jpg";
import battleshipImage from '../../Assets/Projects/battleshipphoto.jpg'
import virtualhausImage from '../../Assets/Projects/virtualhausimage.jpg'
import CatsVsDogs from '../../Assets/Projects/catsvsdogs.jpg'
import BookYourShow from '../../Assets/Projects/bookyourshow.png'
import Wallet from '../../Assets/Projects/wallet.jpg'
import vmnexus from '../../Assets/Projects/vmnexusimage.jpeg'

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
              imgPath={vmnexus}
              isBlog={false}
              hasWebsite={false}
              title="VM Nexus"
              description="Engineered VM Nexus, a Dockerized full-stack app for VM management using Django and ReactJS. Integrated Docker, REST API & Webpack for seamless frontend-backend connectivity and CRUD operations. Enhanced security with SSH key fields, enabling scalable, dynamic VM data management on UI."
              linkProject="https://github.com/Ankush7Kumar/VM-Nexus"
            />
          </Col>
        
        <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={CatsVsDogs}
              isBlog={false}
              hasWebsite={false}
              title="CatsVsDogs"
              description="A simple computer vision classification model that predicts if the object in the image is a cat or a dog. Using FastAI library and a pretrained model - ResNet34. The database contains 7390 images containing images of dogs and cats, which is taken from The Oxford-IIIT Pet Dataset."
              linkProject="https://github.com/Ankush7Kumar/CatsVsDogs"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wallet}
              isBlog={false}
              hasWebsite={false}
              title="Wallet"
              description="Created web application for user registration, authentication, fund transfers, withdrawals, and deposits. Implemented core features using Servlets, Sessions, Persistence API, and Hibernate ORM. Managed MySQL database for secure and efficient data storage and retrieval operations."
              linkProject="https://github.com/Ankush7Kumar/Wallet"
            />  
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookYourShow}
              isBlog={false}
              hasWebsite={false}
              title="BookYourShow"
              description="A clone of BookMyShow website. Developed a movie booking platform with Servlets, enabling admin movie management and customer bookings. Implemented seat selection and ticket printing features using HTTP methods and login using Sessions. Admins can add shows & customers can book them."
              linkProject="https://github.com/Ankush7Kumar/BookYourShow"
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualhausImage}
              isBlog={false}
              hasWebsite={false}
              title="VirtualHaus"
              description="Designed and developed an android application written using Kotlin following MVVM design pattern. The app lets you create a house and afterwards, keep track of items in the kitchen, book quiet times, add events happening in future, check expenses, check laundry availability and more. Architectured using Client-Server model where the live data is handled through Firebase Realtime Database."
              linkProject="https://github.com/Ankush7Kumar/VirtualHaus"
            />
          </Col>



        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleshipImage}
              isBlog={false}
              hasWebsite={false}
              title="Battleship"
              description="Created a game of battleship, that could be played between the user and the computer, using user interface concepts such as Graphics, Animation, Hit-Testing, and Transformations. The game is written using the Model-View-Controller design pattern. It is a desktop operating system application written in Kotlin using the JavaFX toolkit."
              linkProject="https://github.com/Ankush7Kumar/The-Game-of-Battleship"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socaCricketLogo}
              isBlog={false}
              hasWebsite={true}
              title="SOCA-Cricket"
              description="Developed an interactive fully responsive website from scratch using react designed for Southern Ontario Cricket League played by 16 teams every season. It displays all the information about the association and the events that takes place in the league. Implemented user centered design using react bootstrap and CSS while also applying multi-page layout and DRY principle."
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
              description="Wrote various algorithms just for fun as I am extremely interested in this field."
              linkProject="https://github.com/Ankush7Kumar/Algorithms/tree/main/questions"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
