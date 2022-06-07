import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center pt-5 pb-3">
        <Col sm={6}>
          <Image src="https://i.ibb.co/3mS6Kmh/image.png" rounded fluid />
        </Col>
        <Col sm={6} className="text-end">
          <h1>Assalmu Alaikum & Hi!,</h1>
          <h3>I am Atiqur Rahman.</h3>
          <p>
            I'm a web developer from in Rajshahi, Bangladesh. I’m currently the
            react developer. In my spare time I like working with a few select
            clients and building my own products. My most recent product is
            Airplane. It’s a simple service and commerse website. You can
            usually find me on Twitter, but I'm occasionally on Product Hunt and
            Reddit as well.
          </p>
        </Col>
      </Row>

      <Projects></Projects>
    </Container>
  );
};

export default Home;
