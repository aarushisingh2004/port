import React from 'react';
import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import pc1 from '../assets/img/pc1.jpg';
import pc2 from '../assets/img/pc2.jpg';
import pc3 from '../assets/img/pc3.jpg';
import pc4 from '../assets/img/pc4.jpg';
import pc5 from '../assets/img/pc5.jpg';
import pc6 from '../assets/img/pc6.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'EmpowerHer',
      description: 'Women Empowerment',
      imgUrl: pc1,
      githubUrl: 'https://github.com/aarushisingh2004/EmpowerHer',
      deployedUrl: 'https://empowerher4.netlify.app/',
    },
    {
      title: 'Yaatri',
      description: 'Travel & Taj Mahal Tour',
      imgUrl: pc2,
      githubUrl: 'https://github.com/aarushisingh2004/Web_development',
      deployedUrl: 'https://yatriitourism.netlify.app/',
    },
    {
      title: 'SustainHub',
      description: 'Recycling',
      imgUrl: pc3,
      githubUrl: 'https://github.com/aarushisingh2004/Recycling-Website',
      deployedUrl: 'https://rainbow-churros-2c9d95.netlify.app/',
    },
    {
      title: 'Library Management System',
      description: 'CRUD',
      imgUrl: pc4,
      githubUrl: 'https://github.com/aarushisingh2004/Library-management-system',
      deployedUrl: 'https://www.youtube.com/watch?v=C6GEcnV98IE',
    },
    {
      title: 'Animated  Pg',
      description: 'Animation',
      imgUrl: pc5,
      githubUrl: 'https://github.com/example5',
      deployedUrl: 'https://github.com/aarushisingh2004/Motion-Art-Effect',
    },
    {
      title: 'My Portfolio',
      description: 'exploring myself',
      imgUrl: pc6,
      githubUrl: 'https://github.com/aarushisingh2004/port',
      deployedUrl: 'https://github.com/aarushisingh2004/port',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Delving into diverse topics with precision and creativity.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">ML</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Games</Nav.Link>
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
                    <p>Coming Soon</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <p>Coming Soon</p>
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
