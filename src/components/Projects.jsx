import React from 'react'
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pc1 from "../assets/img/pc1.jpg";
import pc2 from "../assets/img/pc2.jpg";
import pc3 from "../assets/img/pc3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc1,
      githubUrl: "https://github.com/example1",
      deployedUrl: "https://example1.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc2,
      githubUrl: "https://github.com/example2",
      deployedUrl: "https://example2.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc3,
      githubUrl: "https://github.com/example3",
      deployedUrl: "https://example3.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc1,
      githubUrl: "https://github.com/example4",
      deployedUrl: "https://example4.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc2,
      githubUrl: "https://github.com/example5",
      deployedUrl: "https://example5.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pc3,
      githubUrl: "https://github.com/example6",
      deployedUrl: "https://example6.com"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <br />
              <br />
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <p key={index}>{project.title}</p>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <p key={index}>{project.title}</p>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
