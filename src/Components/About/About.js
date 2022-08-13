import React from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import img from "../../images/image-2.png";
const About = () => {
  return (
    <Container className="background">
      <Row className="align-items-center">
        <Col sm={6} className="text-end">
          <div className="my-5">
            <h1>Atiqur Rahman.</h1>
            <h5>MERN Stack Web Developer.</h5>
            <h6>Now I am studying at Begum Rokeya University, Rangpur.</h6>
            <div className="icons">
              <a href="https://github.com/ab-atiq">
                <i className="fab fa-3x fa-github p-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/abul-bashar-atiqur-rahman/">
                <i className="fab fa-3x fa-linkedin p-3"></i>
              </a>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <Image src={img} rounded fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
