import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import can from "../assets/img/can.png";
import kafka from "../assets/img/kafka.png";
import car from "../assets/img/car.png";
import maps from "../assets/img/maps.png";
import timeseries from "../assets/img/timeseries.png";
import game from "../assets/img/game.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Canalyse2025",
      description: "Development & ML & Design",
      imgUrl: can,
      githubUrl :"#",
    },
    {
      title: "Mapping the Global Entertainment Impact",
      description: "Big Data & Data Mining & Data Analysis ",
      imgUrl: kafka,
      githubUrl :"https://github.com/HACHIMIATMANE/TrendWave_Mapping-the-Global-Entertainment-Impact.git",
    },
    {
      title: "Cars Counter",
      description: "MachineLearning & DeepLearning",
      imgUrl: car,
      githubUrl :"https://github.com/HACHIMIATMANE/CarsConunter.git",
    },
    {
      title: "GeoService Scraper",
      description: "Automation & Scraping & Development",
      imgUrl: maps,
      githubUrl :"https://github.com/HACHIMIATMANE/Automation_Scraping_GoogleMaps.git",
    },
    {
      title: "Time Series Forecasting",
      description: "Time Series & Data Analysis",
      imgUrl: timeseries,
      githubUrl :"https://github.com/HACHIMIATMANE/ARIMA_SARIMA_LSTM_models.git",
    },
    {
      title: "ShopAcc",
      description: "Development & ML & Data",
      imgUrl: game,
      githubUrl :"https://github.com/HACHIMIATMANE/SiteGame.git",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>J’ai travaillé sur une variété de projets couvrant plusieurs domaines, allant de la science des données à l’intelligence artificielle,
                   en passant par le Big Data, le développement web et le cloud computing. Ces projets m’ont permis d’explorer des problématiques complexes, d’optimiser des pipelines de données et de développer des solutions innovantes.

                Voici quelques exemples illustrant la diversité de mon travail :
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
