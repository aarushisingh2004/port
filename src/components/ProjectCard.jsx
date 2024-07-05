import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, deployedUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub  </a>
            <br></br>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Site</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
