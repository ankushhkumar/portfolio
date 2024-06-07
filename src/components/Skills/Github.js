import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import GitHubCalendar from "react-activity-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    // grade4: "#8400b8",
    // grade3: "#b22ff4",
    // grade2: "#b265f6",
    // grade1: "#c084f5",
    // grade0: "#ecd9fc",
    grade4: "#52307c",
    grade3: "#a3459a",
    grade2: "#e52d8a",
    grade1: "#c695c9",
    grade0: "#dbdde6",
  };


  

  return (
   
   <Row style={{ justifyContent: "center",paddingTop:"150px", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Thanks for <strong className="purple">Visiting!</strong>
      </h1>
    </Row>
    
  );
}

export default Github;
