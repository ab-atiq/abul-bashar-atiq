import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center pt-5 pb-3">
        <Col md={6}>
          <Image src="https://i.ibb.co/3mS6Kmh/image.png" rounded fluid />
        </Col>
        <Col md={6} className="text-end">
          <h1>Assalmu Alaikum & Hi!,</h1>
          <h2>
            I am <span className="text-danger">Atiqur Rahman.</span>{" "}
          </h2>
          <h3>
            I am a Full Stack Developer.
          </h3>
          <p>
          I want to build my career as a web developer where I can show my skills and prove myself as a quick learner and highly qualified professional and help my community through my skills and specializations. I always look for challenges where I can use my potential most and always love to work on cutting edge technologies.
          </p>
        </Col>
      </Row>

      <Projects></Projects>
    </Container>
  );
};

export default Home;
