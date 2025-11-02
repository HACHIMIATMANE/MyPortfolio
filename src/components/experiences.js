import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState(0);

const experiences = [
    {
        id: 1,
        title: "AI Developer",
        company: "Transcend Solutions",
        location: "Casablanca, Maroc",
        period: "Juillet 2025 - Présent",
        type: "Stage",
        description: [            
            "Conception et développement d’outils basés sur l’IA, tels qu’un système de comparaison intelligente des prix",
            "Développement d'applications web avec React.js ",
            "Optimisation des performances et amélioration de l'interface utilisateur",
            "Participation aux réunions d'équipe et aux code reviews"
        ],
        technologies: ["Python", "FastAPI", "Sentence Transformers", "LLM (via OpenRouter)", "MongoDB", "ChromaDB", "BM25", "React.js"]
    },
    {
        id: 2,
        title: "Data Engineer - ML&AI",
        company: "Nsayblik.lik",
        location: "Casablanca, Maroc",
        period: "Juin 2025 - Juillet 2025",
        type: "Stage",
        description: [
            "Développement d'un système intelligent de suivi des conversations entre freelances et clients",
            "Détection des tentatives de contournement de la plateforme",
            "Évaluation de la qualité des échanges",
            "Implémentation de solutions d'IA pour l'analyse de données conversationnelles"
        ],
        technologies: ["Python", "FastAPI", "Ollama (Llama2)", "Whisper", "EasyOCR", "YOLOv8", "OpenCV", "PyTorch", "MongoDB", "MySQL"]
    },
    {
        id: 3,
        title: "Data Scientist - ML&DL",
        company: "NextGenLabs",
        location: "Marrakech, Maroc",
        period: "mai 2025 - juin 2025",
        type: "Stage",
        description: [
            "Développement de solutions IA avec des techniques de Deep Learning et Machine Learning",
            "Analyse d'images environnementales et satellitaires",
            "Implémentation de modèles de vision par ordinateur",
            "Traitement et analyse de données géospatiales"
        ],
        technologies: ["Python", "PyTorch", "YOLOv8", "U-Net", "Roboflow", "Google Earth", "Git", "GitHub"]
    },
    {
        id: 4,
        title: "Développeur Web Scraping & Chatbot",
        company: "NextGenLabs",
        location: "Rabat, Maroc",
        period: "juin 2024 - août 2024",
        type: "Stage",
        description: [
            "Développement de solutions de web scraping pour extraire des données pertinentes",
            "Applications dédiées à l'e-learning",
            "Conception d'un chatbot automatisé pour l'envoi de messages sur Instagram",
            "Automatisation des processus de collecte de données"
        ],
        technologies: ["Python", "Flask", "Selenium", "InstaLoader", "Requests", "BeautifulSoup"]
    }
];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Expériences Professionnelles</h2>
                  <p>
                    Découvrez mon parcours professionnel à travers mes différents stages et expériences. 
                    Chaque expérience m'a permis d'acquérir de nouvelles compétences et de me spécialiser 
                    dans des domaines variés comme le développement web, la data science et l'administration système.
                  </p>
                  
                  <div className="experience-content">
                    <Row>
                      <Col md={4}>
                        <div className="experience-tabs">
                          {experiences.map((exp, index) => (
                            <div 
                              key={exp.id}
                              className={`experience-tab ${selectedExp === index ? 'active' : ''}`}
                              onClick={() => setSelectedExp(index)}
                            >
                              <h5>{exp.title}</h5>
                              <span className="company">{exp.company}</span>
                              <span className="period">{exp.period}</span>
                            </div>
                          ))}
                        </div>
                      </Col>
                      
                      <Col md={8}>
                        <div className="experience-details">
                          <div className="experience-header">
                            <h3>{experiences[selectedExp].title}</h3>
                            <div className="experience-meta">
                              <span className="company-name">{experiences[selectedExp].company}</span>
                              <span className="location">{experiences[selectedExp].location}</span>
                              <span className="period">{experiences[selectedExp].period}</span>
                              <span className="type">{experiences[selectedExp].type}</span>
                            </div>
                          </div>
                          
                          <div className="experience-description">
                            <h4>Missions réalisées :</h4>
                            <ul>
                              {experiences[selectedExp].description.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="experience-technologies">
                            <h4>Technologies utilisées :</h4>
                            <div className="tech-tags">
                              {experiences[selectedExp].technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};