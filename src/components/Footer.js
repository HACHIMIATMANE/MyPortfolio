import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* Logo et description */}
          <Col lg={4} md={6} sm={12} className="footer-brand">
            <img src={logo2} alt="Hachimi Atmane" className="footer-logo" />
            <h4>HACHIMI ATMANE</h4>
            <p className="footer-subtitle">Future Data Engineer</p>
            <p className="footer-description">
              Passionné par l'IA, le Big Data et l'innovation technologique. 
              Actuellement à la recherche d'une opportunité de stage PFE pour 
              concrétiser mes compétences et contribuer à des projets ambitieux.
            </p>
          </Col>

          {/* Informations de contact */}
          <Col lg={4} md={6} sm={12} className="footer-contact">
            <h5>Contact</h5>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:HACHIMIATMANE03@GMAIL.COM">HACHIMIATMANE03@GMAIL.COM</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+212651519918">06 51 51 99 18</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Rabat, Morocco</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/atmane-hachimi/" target="_blank" rel="noopener noreferrer">
                  atmane-hachimi
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐱</span>
                <a href="https://github.com/HACHIMIATMANE" target="_blank" rel="noopener noreferrer">
                  github.com/HACHIMIATMANE
                </a>
              </div>
            </div>
          </Col>

          {/* Liens rapides et statut */}
          <Col lg={4} md={12} sm={12} className="footer-links">
            <h5>Opportunités</h5>
            <div className="opportunity-status">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span>Disponible pour stage PFE</span>
              </div>
              <p className="status-description">
                Je recherche activement une opportunité de stage de fin d'études 
                dans le domaine de la Data Engineering, IA ou Big Data.
              </p>
            </div>

            <h5>Navigation</h5>
            <ul className="footer-nav">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#experiences">Expériences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
        </Row>

        {/* Réseaux sociaux et copyright */}
        <Row className="footer-bottom">
          <Col md={6} className="footer-social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atmane-hachimi/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/HACHIMIATMANE" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:HACHIMIATMANE03@GMAIL.COM">
                <img src={navIcon3} alt="Email" />
              </a>
              <a href="https://www.instagram.com/hachimi.atmane/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Instagram" />
              </a>
            </div>
          </Col>
          <Col md={6} className="footer-copyright">
            <p>&copy; 2025 Hachimi Atmane. Tous droits réservés.</p>
            <p className="built-with">Développé avec ❤️ et React.js</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
