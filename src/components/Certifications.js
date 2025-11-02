import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Education.css';

export const Certifications = () => {
  const certs = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      date: "Octobre 2025",
      provider: "Oracle",
      icon: "☁️",
      image: require("../assets/img/certifications/oracle.png"),
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=votre_id_oraclhttps://catalog-education.oracle.com/pls/certview/sharebadge?id=ECB4C35F42CD91445776EEA68E666C42A80F8961AECB074A98F5123221E308E2"
    },
    {
      title: "Data Engineer Associate",
      date: "Octobre 2024 - Novembre 2024",
      provider: "DataCamp",
      icon: "⚡",
      image: require("../assets/img/certifications/datacamp_data.png"),
      link: "https://www.datacamp.com/certificate/DEA0016817383042"
    },
    {
      title: "AI Career Essentials",
      date: "Août 2024 - Septembre 2024",
      provider: "ALX Morocco",
      icon: "🤖",
      image: require("../assets/img/certifications/ALX.jpg"),
      link: "https://savanna.alxafrica.com/certificates/ZEmSncRF7f"
    },
    {
      title: "Data Analyst Internship",
      date: "Mai 2024 - Juin 2024",
      provider: "Mentorness",
      icon: "📊",
      image: require("../assets/img/certifications/mento.png"),
      link: "#"
    },
    {
      title: "Reinforcement Learning",
      date: "Octobre 2025",
      provider: "DataCamp",
      icon: "🎮",
      image: require("../assets/img/certifications/reinf.png"),
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7a9504cdfcf90f76bdd76fde2199a292e97e8518?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink"
    },
    {
      title: "Deep Reinforcement Learning in Python",
      date: "Octobre 2025",
      provider: "DataCamp",
      icon: "🧠",
      image: require("../assets/img/certifications/deep.png"),
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ddfc3d5fa6be0965bc36d04f34f2d4cfd2a554ce?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink"
    }
  ];

  return (
    <section id="certifications" className="section-certs">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header">
                    <h2>Certifications & Formations</h2>
                    <p>Développement professionnel continu</p>
                  </div>

                  <div className="cert-list">
                    {certs.map((cert, idx) => (
                      <a 
                        href={cert.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-card" 
                        key={idx}
                        style={{
                          animationDelay: `${idx * 0.1}s`
                        }}
                      >
                        <div className="cert-image">
                          <img src={cert.image} alt={cert.title} />
                        </div>
                        <div className="cert-content">
                          <div className="cert-icon">{cert.icon}</div>
                          <h5>{cert.title}</h5>
                          <div className="provider">{cert.provider}</div>
                          <div className="cert-badge">{cert.date}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
