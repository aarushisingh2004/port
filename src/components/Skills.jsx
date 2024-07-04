import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
    { name: "C++", percentage: 85 },
    { name: "HTML", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "SQL", percentage: 75 },
    { name: "Git/GitHub", percentage: 80 },
    { name: "Visual Studio Code", percentage: 85 },
    { name: "Firebase", percentage: 70 },
    { name: "Unity", percentage: 65 },
    { name: "Figma", percentage: 80 },
    { name: "React Js", percentage: 95 },
    { name: "Bootstrap CSS", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
];

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>Architecting robust solutions with code that powers tomorrow's innovations, while continuously expanding skills in new technologies and frameworks to stay ahead
                                in the ever-evolving tech landscape.</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <svg width="0" height="0">
                                            <defs>
                                                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="rgba(62, 152, 199)" />
                                                    <stop offset="100%" stopColor="rgba(142, 45, 226)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <CircularProgressbar
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            styles={buildStyles({
                                                pathColor: `url(#gradient-${index})`,
                                                textColor: '#fff',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}

export default Skills;
