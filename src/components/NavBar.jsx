import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import X from '../assets/img/X.png';
import utube from '../assets/img/utube.png';
import logo from '../assets/img/logo.svg';
import Button from 'react-bootstrap/Button';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex align-items-center">
                        <div className="social-icon d-flex me-3">
                            <a href="https://www.linkedin.com/in/aarushi-singh-b00553253/"><img src={navIcon1} alt="Social Icon 1" className="me-2" /></a>
                            <a href="https://x.com/Aarushi_builds">
    <img src={X} className="large-icon" alt="Social Icon 2" width="64" height="48" />
</a>

<a href="https://www.youtube.com/@artificialbeing2004"><img src={utube} alt="Social Icon 3" width="64" height="48"/></a>



                            <a href="#"><img src={navIcon2} alt="Social Icon 2" className="me-2" /></a>
                            <a href="#"><img src={navIcon3} alt="Social Icon 3" /></a>
                        </div>
                        <Button variant="primary" className="vvd" onClick={() => console.log('connect')}>
                            Let's Connect
                        </Button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
