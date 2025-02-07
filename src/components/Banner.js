import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import profil from "../assets/img/profil1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Engineer", "Web Developer", "Data Scientist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

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
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <button onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'CV_HACHIMIATMANE.pdf';
                  link.download = 'CV_HACHIMIATMANE.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}>
                  <span className="tagline">📄 Télécharger CV</span>
                </button>

                

                
                
                <h1>{`Hi! I'm HACHIMI`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Engineer", "Web Developer", "Data Scientist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Je suis Hachimi Atmane, un ingénieur spécialisé en Data Science, Ingénierie des Données et Développement Logiciel. J’ai acquis une solide expérience à travers divers projets en Big Data, Machine Learning, Développement Web et Cloud Computing.
                    Passionné par l’analyse de données et l’intelligence artificielle, j’ai travaillé sur plusieurs projets impliquant le traitement de données massives, la modélisation prédictive et l’automatisation de tâches. Mon expertise couvre aussi bien le développement backend
                    et frontend que l'intégration de solutions cloud et big data pour répondre à des problématiques complexes.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profil} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
