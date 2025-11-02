import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Education.css';

export const AcademicBackground = () => {
  const educations = [
    {
      title: "INPT – Institut National des Postes et Télécommunications",
      period: "2023 - 2026",
      location: "Rabat",
      details: "École d'ingénieurs marocaine spécialisée dans les TIC",
      icon: "🎓"
    },
    {
      title: "Classes préparatoires aux grandes écoles (Maths–Physics)",
      period: "2021 - 2023",
      location: "Lycée Omar Ibn Al-Khattab, Meknes",
      details: "Formation intensive en mathématiques et physique",
      icon: "📚"
    },
    {
      title: "Baccalauréat Sciences Math (mention très bien)",
      period: "2020 - 2021",
      location: "Lycée Tarik Ibn Ziyad - Azrou",
      details: "Spécialisation en mathématiques avec excellence",
      icon: "🎯"
    }
  ];

  return (
    <section id="academic" className="section-academic">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header">
                    <h2>Parcours Académique</h2>
                    <p>Excellence académique et formation d'ingénieur</p>
                  </div>
                  <div className="edu-list">
                    {educations.map((edu, idx) => (
                      <div className="edu-card" key={idx}>
                        <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
                          <span style={{fontSize: "28px"}}>{edu.icon}</span>
                          <div style={{flex: 1}}>
                            <h5>{edu.title}</h5>
                            <div className="period">{edu.period}</div>
                            <div className="location">{edu.location}</div>
                            {edu.details && <p className="details">{edu.details}</p>}
                          </div>
                        </div>
                      </div>
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