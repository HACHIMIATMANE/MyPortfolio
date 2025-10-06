import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import can from "../assets/img/can.png";
import kafka from "../assets/img/kafka.png";
import weather from "../assets/img/weather.png";
import car from "../assets/img/car.png";
import maps from "../assets/img/maps.png";
import timeseries from "../assets/img/timeseries.png";
import game from "../assets/img/game.png";
// Images pour les nouveaux projets - utilisation d'images existantes temporairement
import projImg1 from "../assets/img/rag.png"; // Pour assistant juridique
import projImg2 from "../assets/img/pneumonia.png"; // Pour pneumonia detection
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import kubernetes from "../assets/img/kubernetes.png"; 

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [

    {
      id: 10,
        title: "Kubernetes for Data Engineering",
      shortDescription: "Maîtriser Kubernetes pour l’ingénierie des données",
      fullDescription: "Plongez dans l’univers de Kubernetes, l’outil incontournable pour la gestion des applications conteneurisées, et découvrez ses applications concrètes dans le domaine de l’ingénierie des données.",
      imgUrl: kubernetes,
      githubUrl: "https://github.com/HACHIMIATMANE/Kubernetes_for_dataengineer.git",
      liveUrl: "#",
      category: "bigdata",
      technologies: ["Kubernetes", "Docker", "kubectl", "Helm", "Apache Airflow"],
      status: "Terminé",
      year: "2025",
      difficulty: "Expert",
      features: [
        "Installation de Kubernetes sur Docker",
        "Prise en main de kubectl",
        "Déploiement du Dashboard Kubernetes",
        "Exécution d’Apache Airflow avec Helm Charts"
      ]
    },

    {
      id: 7,
      title: "Assistant Juridique Intelligent",
      shortDescription: "Système basé sur RAG pour le droit marocain",
      fullDescription: "Développement d'un assistant de questions-réponses basé sur la génération augmentée par la recherche (RAG) afin de fournir des réponses précises à partir des documents officiels du Code du travail marocain.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/HACHIMIATMANE/RAG_Juridique",
      liveUrl: "#",
      category: "ai",
      technologies: ["Python", "LangChain", "ChromaDB", "Ollama", "Mistral", "Streamlit"],
      status: "Terminé",
      year: "2025",
      difficulty: "Expert",
      features: ["RAG Architecture", "Code du travail marocain", "Interface Streamlit", "Recherche sémantique"]
    },
    {
      id: 8,
      title: "Real-time Data Streaming Pipeline",
      shortDescription: "Pipeline de streaming de données en temps réel",
      fullDescription: "Conception et implémentation d'un pipeline complet de streaming de données en temps réel utilisant des technologies Big Data open-source.",
      imgUrl: kafka,
      githubUrl: "https://github.com/HACHIMIATMANE/Real-time-data-streaming-pipeline",
      liveUrl: "#",
      category: "bigdata",
      technologies: ["Apache Kafka", "Apache Spark Streaming", "Cassandra", "Apache Airflow", "Docker", "Python"],
      status: "Terminé",
      year: "2025",
      difficulty: "Expert",
      features: ["Stream Processing", "Pipeline Kafka", "Orchestration Airflow", "Architecture microservices"]
    },
    {
      id: 9,
      title: "Pneumonia Detection",
      shortDescription: "Détection automatique de pneumonie par IA",
      fullDescription: "Développement d'un modèle prédictif pour automatiser la détection de la pneumonie à l'aide d'une solution de deep learning fiable et facilement accessible.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/HACHIMIATMANE/pneumonia-detection_model",
      liveUrl: "#",
      category: "ai",
      technologies: ["ResNet34", "Transfer Learning", "Python", "Flask", "React.js", "Gradio", "Hugging Face"],
      status: "Terminé",
      year: "2025",
      difficulty: "Expert",
      features: ["Deep Learning médical", "Transfer Learning", "Interface Gradio", "Déploiement Hugging Face"]
    },

    {
      
      id: 1,
      title: "Canalyse2025",
      shortDescription: "Système d'analyse de données avancé",
      fullDescription: "Plateforme complète d'analyse de données avec ML intégré pour des insights business en temps réel.",
      imgUrl: can,
      githubUrl: "#",
      liveUrl: "#",
      category: "web",
      technologies: ["Python", "Machine Learning", "FastAPI", "React"],
      status: "En Terminé",
      year: "2024",
      difficulty: "Expert",
      features: ["ML Pipeline", "Dashboard Interactif", "API RESTful", "Visualisation avancée"]
    },
    {
      id: 2,
      title: "Real-time Weather Data Pipeline",
      shortDescription: "Pipeline ETL orchestré avec Apache Airflow",
      fullDescription: "Projet où je collecte des données météorologiques en temps réel depuis l'API OpenWeatherMap, orchestre le pipeline avec Apache Airflow, stocke les données dans PostgreSQL, et les visualise magnifiquement dans Metabase — le tout conteneurisé avec Docker Compose.",
      imgUrl: weather,
      githubUrl: "https://github.com/HACHIMIATMANE/weather-data-pipeline.git",
      liveUrl: "https://github.com/HACHIMIATMANE/Weather_Pipeline",
      category: "bigdata",
      technologies: ["Apache Airflow", "Docker", "PostgreSQL", "pgAdmin", "Metabase", "OpenWeatherMap API", "Python"],
      status: "Terminé",
      year: "2024",
      difficulty: "Expert",
      features: ["ETL Orchestration", "Real-time Data Collection", "Data Visualization", "Docker Containerization", "API Integration"]
    },
    {
      id: 3,
      title: "Smart Cars Counter",
      shortDescription: "Comptage intelligent de véhicules",
      fullDescription: "Système de vision par ordinateur utilisant YOLO et Deep Learning pour le comptage automatique de véhicules.",
      imgUrl: car,
      githubUrl: "https://github.com/HACHIMIATMANE/CarsConunter.git",
      liveUrl: "#",
      category: "ai",
      technologies: ["YOLOv8", "OpenCV", "PyTorch", "Computer Vision"],
      status: "Terminé",
      year: "2024",
      difficulty: "Avancé",
      features: ["Détection en temps réel", "Tracking", "Analytics", "Interface intuitive"]
    },
    {
      id: 4,
      title: "GeoService Scraper",
      shortDescription: "Automatisation de scraping géospatial",
      fullDescription: "Solution d'automatisation pour l'extraction de données géospatiales depuis Google Maps avec pipelines de traitement.",
      imgUrl: maps,
      githubUrl: "https://github.com/HACHIMIATMANE/Automation_Scraping_GoogleMaps.git",
      liveUrl: "#",
      category: "automation",
      technologies: ["Selenium", "BeautifulSoup", "Python", "APIs"],
      status: "Terminé",
      year: "2024",
      difficulty: "Intermédiaire",
      features: ["Scraping automatisé", "Géolocalisation", "Export de données", "Monitoring"]
    },
    {
      id: 5,
      title: "Time Series Forecasting",
      shortDescription: "Prédiction de séries temporelles",
      fullDescription: "Modèles ARIMA, SARIMA et LSTM pour la prédiction de séries temporelles avec interface de visualisation interactive.",
      imgUrl: timeseries,
      githubUrl: "https://github.com/HACHIMIATMANE/ARIMA_SARIMA_LSTM_models.git",
      liveUrl: "#",
      category: "ml",
      technologies: ["LSTM", "ARIMA", "TensorFlow", "Pandas"],
      status: "Terminé",
      year: "2024",
      difficulty: "Avancé",
      features: ["Modèles multiples", "Comparaison de performance", "Visualisations", "Export de résultats"]
    },
    {
      id: 6,
      title: "ShopAcc Platform",
      shortDescription: "Plateforme e-commerce intelligente",
      fullDescription: "Plateforme e-commerce avec système de recommandation ML et analytics avancées pour optimiser les ventes.",
      imgUrl: game,
      githubUrl: "https://github.com/HACHIMIATMANE/SiteGame.git",
      liveUrl: "#",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "ML"],
      status: "Terminé",
      year: "2024",
      difficulty: "Avancé",
      features: ["Système de recommandation", "Paiement sécurisé", "Dashboard admin", "Analytics"]
    },
    
  ];

  const categories = [
    { id: "all", label: "Tous les projets", icon: "🚀", count: projects.length },
    { id: "ml", label: "Machine Learning", icon: "🤖", count: projects.filter(p => p.category === "ml").length },
    { id: "ai", label: "Intelligence Artificielle", icon: "🧠", count: projects.filter(p => p.category === "ai").length },
    { id: "web", label: "Développement Web", icon: "💻", count: projects.filter(p => p.category === "web").length },
    { id: "bigdata", label: "Big Data", icon: "📊", count: projects.filter(p => p.category === "bigdata").length },
    { id: "automation", label: "Automatisation", icon: "⚙️", count: projects.filter(p => p.category === "automation").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Débutant": return "#2ECC71";
      case "Intermédiaire": return "#F39C12";
      case "Avancé": return "#E74C3C";
      case "Expert": return "#9B59B6";
      default: return "#95A5A6";
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Terminé": return "#2ECC71";
      case "En développement": return "#F39C12";
      case "En pause": return "#E74C3C";
      default: return "#95A5A6";
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="project-header">
                    <h2>Mes Projets</h2>
                    <p>
                      Découvrez mes réalisations techniques à travers une sélection de projets innovants. 
                      Chaque projet reflète mon expertise dans différents domaines : IA, Big Data, développement web et automatisation.
                    </p>
                  </div>

                  {/* Categories Filter */}
                  <div className="project-categories">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`category-filter ${activeFilter === category.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(category.id)}
                      >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-label">{category.label}</span>
                        <span className="category-count">({category.count})</span>
                      </button>
                    ))}
                  </div>

                  {/* Projects Grid */}
                  <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                      <TrackVisibility key={project.id} partialVisibility={true}>
                        {({ isVisible }) => (
                          <div 
                            className={`project-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <div className="project-image">
                              <img src={project.imgUrl} alt={project.title} />
                              <div className="project-overlay">
                                <div className="project-links">
                                  {project.githubUrl !== "#" && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                                      <span>📂</span> Code
                                    </a>
                                  )}
                                  {project.liveUrl !== "#" && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                                      <span>🚀</span> Demo
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="project-content">
                              <div className="project-meta">
                                <span className="project-year">{project.year}</span>
                                <span 
                                  className="project-status"
                                  style={{ backgroundColor: getStatusColor(project.status) }}
                                >
                                  {project.status}
                                </span>
                                <span 
                                  className="project-difficulty"
                                  style={{ backgroundColor: getDifficultyColor(project.difficulty) }}
                                >
                                  {project.difficulty}
                                </span>
                              </div>

                              <h3>{project.title}</h3>
                              <p className="project-short-desc">{project.shortDescription}</p>
                              
                              {hoveredProject === project.id && (
                                <div className="project-details animate__animated animate__fadeIn">
                                  <p className="project-full-desc">{project.fullDescription}</p>
                                  
                                  <div className="project-features">
                                    <h5>Fonctionnalités clés :</h5>
                                    <ul>
                                      {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}

                              <div className="project-technologies">
                                {project.technologies.map((tech, idx) => (
                                  <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </TrackVisibility>
                    ))}
                  </div>

                  {/* Stats Section */}
                  <div className="project-stats">
                    <div className="stat-item">
                      <h4>{projects.length}</h4>
                      <p>Projets réalisés</p>
                    </div>
                    <div className="stat-item">
                      <h4>{projects.filter(p => p.status === "Terminé").length}</h4>
                      <p>Projets terminés</p>
                    </div>
                    <div className="stat-item">
                      <h4>{new Set(projects.flatMap(p => p.technologies)).size}</h4>
                      <p>Technologies utilisées</p>
                    </div>
                    <div className="stat-item">
                      <h4>{categories.length - 1}</h4>
                      <p>Domaines d'expertise</p>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};