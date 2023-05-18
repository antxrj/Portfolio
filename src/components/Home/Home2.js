import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO<span className="purple"> SOBRE </span> MIM
            </h1>
            <p className="home-about-body">
              Redator, publicitário, Analista de Marketing. Comunicação em diversos formatos para encantar, engajar, converter... 
              e, claro, sem deixar a diversão de lado. 🤷‍♂️
              <br />
              <br />Sou graduado em Comunicação com experiência em
                <b className="purple"> Inbound Marketing, Estratégias de Conteúdo </b> e <b className="purple">Asessoria de Imprensa. </b>
              <br />
              <br />
            Entre os meus interesses estão &nbsp;
                <b className="purple">Marketing de performance </b> em áreas como 
                {" "}
                <b className="purple">
                  Automação, Ads, Social Media,
                </b> Jornalismo e Tecnologia.
              <br />
              <br />
              Sou certificado em  <b className="purple">RD Station</b>,
              
                <b className="purple">
                  {" "}
                  Hubspot
                </b> e possuo conhecimentos em ferramentas de insights como
                <b className="purple"> Google Analytics, Search Console</b> e <b className="purple">SEM Rush</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Conecte-se comigo</h1>
            <p>
              Qual <span className="purple"><b>REDE</b> </span> você está?
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/gabriel.ribeiro.351/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gribeiro90"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/g4brielribeiro/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gabrielribeiro552/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
