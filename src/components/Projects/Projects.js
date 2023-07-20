import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import WebChat from "../../Assets/Projects/webchat.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Simon Game"
              description="Simon is a classic electronic memory game that tests your ability to recall and repeat a sequence of colors and sounds. This uses JavaScript to randomly generate numbers assosiated with the four different colors. Follow the pattern as it gets increasingly complex, challenging your memory and concentration."
              ghLink="https://github.com/KJD07/Simon-Game"
              demoLink="https://kjd07.github.io/Simon-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Virtual Canvas"
              description="Virtual Canvas is an innovative technology that transforms any surface into an interactive touch-sensitive canvas. It is done by importing the OpenCV libraries in C++. This helps to draw anything with just your finger in the air and can Auto-adapt to the color presented in the front of the camera"
              ghLink="https://github.com/KJD07/Virtual-Painter"
              // demoLink="put your demo link here."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Website Clone"
              description="Introducing Website Clone remarkable website replication solution that enables you to effortlessly recreate the essence of any website. This is applied by using HTML, CSS, JavaScript"
              ghLink="https://github.com/KJD07/Tindog-clone"
              demoLink="https://kjd07.github.io/Tindog-clone/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebChat}
              isBlog={false}
              title="Web Chat"
              description="Introducing Web Chat a chatting WebApp for chatting with your friends in different rooms. This is made using Node.js, React.js & Firebase is used as Backend Software"
              ghLink="https://github.com/KJD07/Web-Chat"
              demoLink="https://web-chat03.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
