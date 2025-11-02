import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/mail2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled modern-navbar" : "modern-navbar"}>
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-name">
            <span className="brand-name">HACHIMI ATMANE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto modern-nav">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('home')}>
                <span className="nav-text">Accueil</span>
              </Nav.Link>
              <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('experiences')}>
                <span className="nav-text">Expériences</span>
              </Nav.Link>
              <Nav.Link href="#academic" className={activeLink === 'academic' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('academic')}>
                <span className="nav-text">Education</span>
              </Nav.Link>
              
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('skills')}>
                <span className="nav-text">Compétences</span>
              </Nav.Link>
              
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('projects')}>
                <span className="nav-text">Projets</span>
              </Nav.Link>
              <Nav.Link href="#certifications" className={activeLink === 'certifications' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('certifications')}>
                <span className="nav-text">Certifications</span>
              </Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link modern-link' : 'navbar-link modern-link'} onClick={() => onUpdateActiveLink('contact')}>
                <span className="nav-text">Contact</span>
              </Nav.Link>
            </Nav>
            <span className="navbar-text modern-social">
              <div className="social-icon modern-social-icons">
                <a href="https://www.linkedin.com/in/atmane-hachimi-25158b294/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/HACHIMIATMANE" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="mailto:hachimiatmane03@gmail.com" className="social-link">
                  <img src={navIcon3} alt="Email" />
                </a>
                <a href="https://www.instagram.com/hachimi.atmane/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={navIcon4} alt="Instagram" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}