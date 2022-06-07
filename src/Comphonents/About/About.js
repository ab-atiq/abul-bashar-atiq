import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <Row className="align-items-center pt-5 pb-3">
        <Col sm={6} className="text-end">
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
        </Col>
        <Col sm={6}>
          <Image src="https://i.ibb.co/k81m8xT/image-1.png" rounded fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
