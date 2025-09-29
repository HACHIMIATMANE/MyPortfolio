import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const skillsData = [
    {
      id: 1,
      title: "Data Engineer",
      category: "data-engineering",
      level: 88,
      icon: "🛢️", // Database icon
      color: "#FF6B35",
      description: "AWS, GCP, Snowflake, Terraform, Apache Airflow, Apache Kafka, Cassandra"
    },
    {
      id: 2,
      title: "Machine Learning & Deep Learning",
      category: "ai",
      level: 92,
      icon: "🤖", // Robot icon
      color: "#4ECDC4",
      description: "PyTorch, YOLO, OpenCV, Whisper, LangChain, FAISS, ChromaDB, Ollama, LLM, Scikit-learn"
    },
    {
      id: 3,
      title: "Développement Front & Back",
      category: "development",
      level: 85,
      icon: "💻", // Laptop icon
      color: "#45B7D1",
      description: "Java, Scala, FastAPI, Flask, Django, HTML, CSS, JavaScript, React.js"
    },
    {
      id: 4,
      title: "Web Scraping / Automatisation",
      category: "automation",
      level: 90,
      icon: "🕷️",
      color: "#96CEB4",
      description: "Selenium, BeautifulSoup, Scrapy, Crawl4AI"
    },
    {
      id: 5,
      title: "Outils & Environnements",
      category: "tools",
      level: 85,
      icon: "🛠️", // Hammer and wrench icon
      color: "#F39C12",
      description: "Git, GitHub, GitLab, Docker, Jenkins, DBeaver"
    },
    {
      id: 6,
      title: "Data Science & Analysis",
      category: "data-science",
      level: 93,
      icon: "📊",
      color: "#9B59B6",
      description: "Python, R, Pandas, SQL, Excel, Power BI, Roboflow"
    },
    {
      id: 7,
      title: "Big Data",
      category: "big-data",
      level: 80,
      icon: "🗂️", // Card index dividers icon
      color: "#E74C3C",
      description: "Apache Spark Streaming, HBase"
    },
    {
      id: 8,
      title: "Soft Skills",
      category: "soft-skills",
      level: 88,
      icon: "🧠",
      color: "#1ABC9C",
      description: "Résolution de problèmes, Adaptabilité, Travail en équipe, Communication, Apprentissage rapide, Discipline"
    }
  ];

  const categories = [
    { id: "all", label: "Tous", icon: "🚀" },
    { id: "data-engineering", label: "Data Engineering", icon: "�" },
    { id: "ai", label: "Machine Learning & IA", icon: "🤖" },
    { id: "development", label: "Développement", icon: "💻" },
    { id: "automation", label: "Web Scraping", icon: "�️" },
    { id: "tools", label: "Outils", icon: "🛠️" },
    { id: "data-science", label: "Data Science", icon: "📊" },
    { id: "big-data", label: "Big Data", icon: "🗂️" },
    { id: "soft-skills", label: "Soft Skills", icon: "🧠" }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const handleCardAnimation = (skillId) => {
    setAnimatedCards(prev => new Set([...prev, skillId]));
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>Mes Compétences</h2>
                    <p>
                      Découvrez mon expertise technique acquise à travers mes expériences en IA, développement web, 
                      et science des données. Chaque compétence représente des années d'apprentissage et de pratique 
                      dans des projets concrets.
                    </p>

                    {/* Categories Filter */}
                    <div className="skill-categories">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          <span className="category-icon">{category.icon}</span>
                          <span className="category-label">{category.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="skills-grid">
                      {filteredSkills.map((skill, index) => (
                        <TrackVisibility key={skill.id} partialVisibility={true}>
                          {({ isVisible }) => {
                            if (isVisible && !animatedCards.has(skill.id)) {
                              setTimeout(() => handleCardAnimation(skill.id), index * 100);
                            }
                            return (
                              <div 
                                className={`skill-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                                style={{ 
                                  animationDelay: `${index * 0.1}s`,
                                  '--skill-color': skill.color 
                                }}
                              >
                                <div className="skill-icon">{skill.icon}</div>
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                                
                                <div className="skill-level">
                                  <div className="level-label">
                                    <span>Niveau</span>
                                    <span>{skill.level}%</span>
                                  </div>
                                  <div className="progress-bar">
                                    <div 
                                      className="progress-fill"
                                      style={{ 
                                        width: isVisible ? `${skill.level}%` : '0%',
                                        backgroundColor: skill.color,
                                        transition: 'width 1.5s ease-in-out'
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </TrackVisibility>
                      ))}
                    </div>
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