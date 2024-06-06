import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCards";
import { height } from "dom-helpers";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Experience
        </h1>

        <div style={{ paddingTop: 40}}></div>
        <ExperienceCard
          title="NexDew Technologies"
          position="Software Developer"
          timePeriod="November 2022 - January 2024"
          description1="Contributed to the development of RESTful APIs and key features of various web applications"
          description2="Enhanced response time by 15% and significantly improved web functionality by performing detailed reviews"
          description3="Worked with Hibernate ORM and Spring Boot framework in Java using MySQL database"
          description4="Instrumented code over 3 work streams in a Microservice architecture"
          linkProject="https://github.com/ankush7kumar"
        />

        <div style={{ paddingTop: 50 }}></div>
        <ExperienceCard
          title="SOCA"
          position="Web Developer"
          timePeriod="May 2021 - August 2021"
          description1="Created an interactive fully responsive website from scratch using react designed for an Ontario Cricket League played by 16 teams"
          description2="Enhanced load time by 15% by implementing website’s state using redux library and lazy loading pattern for the images"
          description3="Implemented user-centered design, applied multi-page layout, DRY principle using React-Bootstrap and CSS"
          description4="Built a scalable UI capable of handling big traffic load by reducing UI re-renderings which decreased data processing cost by 20%"
          linkProject="https://github.com/ankush7kumar"
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="PetroWagon"
          position="Software Engineer"
          timePeriod="August 2019 - January 2020"
          description1="Developed an Android App from scratch using Java and XML for a fuel delivery-based startup allowing simultaneous multiple orders"
          description2="Programmed app’s local database using Android Room and implemented SQL queries to store mutable live data"
          description3="Built onboarding flow to collect user information for customized suggestions"
          description4="Maintained structured code using MVVM architecture to enhance reusability and optimized app performance"
          linkProject="https://github.com/ankush7kumar"
        />

        
        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="ICSD Tech Labs"
          position="C++ Tutor"
          timePeriod="May 2018 - August 2018"
          description1="Worked closely with multiple batches of high school computer science students to tutor in Object Oriented Programming"
          description2="Successfully analyzed and debugged code written by many different individuals, provided feedback and helped them with queries"
          description3="Reviewed, evaluated, and resolved technical support requests in a timely and effective manner"
          description4="Helped students meet deadlines."
          linkProject="https://github.com/ankush7kumar"
        />

      </Container>
    </Container>
  );
}

export default Experience;
