import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profil from "../assets/img/profil3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = [ "Data Engineer", "Web Developer", "Data Scientist" ];
    
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum, period])

  return (
    <section className="banner modern-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <div className="banner-content">
                  <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'CV_HACHIMI_ATMANE.pdf';
                    link.download = 'CV_HACHIMI_ATMANE.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }} className="cv-download-btn">
                    <span className="tagline">📄 Télécharger CV</span>
                  </button>

                  <h1 className="modern-title">
                    <span className="greeting">Salut! Je suis</span>
                    <span className="name-highlight">HACHIMI ATMANE</span>
                    <span className="role-container">
                      <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Engineer", "Data Scientist","Machine Learning & AI", "Web Developer",  ]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </span>
                  </h1>
                  
                  <div className="description-container">
                    <p className="main-description">
                      Ingénieur spécialisé en <strong>Data Engineer</strong>, <strong>Data Science</strong>, <strong>Machine-Learning & Deep-Learning</strong> et <strong>Développement Logiciel</strong>. 
                      J'ai acquis une solide expérience à travers divers projets en Machine Learning, BigData,Data engineering , Développement Web et Cloud Computing.
                    </p>
                    
                    
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="profile-image-container">
                    <img src={profil} alt="Hachimi Atmane Profile" className="profile-image"/>
                    <div className="image-decoration"></div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}