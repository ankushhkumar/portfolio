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

        <div style={{ paddingTop: 50 }}></div>
        <ExperienceCard
          title="SOCA"
          position="Web Developer"
          timePeriod="June 2021 - August 2021"
          description1="Created an interactive fully responsive website from scratch using react designed for an Ontario Cricket League played by 16 teams"
          description2="Enhanced load time by 15% by implementing website’s state using redux library and lazy loading pattern for the images"
          description3="Wrote clean, efficient, and easily testable code by incorporating website architecture and following good code practices"
          description4="Implemented user-centered design using React-Bootstrap and CSS while also applying multi-page layout and DRY principle"
          linkProject="https://github.com/ankush7kumar"
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="PetroWagon"
          position="Android Developer"
          timePeriod="August 2019 - January 2020"
          description1="Developed an Android App from scratch using Java and XML for a fuel delivery-based startup allowing simultaneous multiple orders"
          description2="Pioneered company’s successful pilot project and started with making beta version of the application"
          description3="Maintained clean and structured code using MVVM architecture to enhance reusability and optimized performance"
          description4="Built onboarding flow to collect user information for customized suggestions"
          linkProject="https://github.com/ankush7kumar"
        />

        <div style={{ paddingTop: 40}}></div>
        <ExperienceCard
          title="TechT Solutions"
          position="Quality Assurance Analyst"
          timePeriod="January 2019 - April 2020"
          description1="Effectively wrote clean and reusable code for designing templates for clients and performed troubleshooting"
          description2="Wrote to over 40 UI automation tests and debugged UI/UX issues, ensuring 100% compliance with quality"
          description3="Assist efforts to install and set-up instrumentation at the sites to log data and execute the tests as directed"
          description4="Provide general status and information about specific project risks to the Manager"
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
