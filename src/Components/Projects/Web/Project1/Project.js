import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.png";

const Project = () => {
  return (
    <Container fluid>
      <h1 className="text-warning text-center py-2">
        Project: Healthcare Web Application
      </h1>

      <Row className="align-items-center">
        <Col md={6}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <h3>Healthcare Website Details Information</h3>
          <a
            className="my-5"
            href="https://ph-assignment-10-7a5fc.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>{" "}
          <a
            href="https://github.com/ab-atiq/Healthcare-Website"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Client-side code</Button>
          </a>
          <br />
          <ol type="I" className="text-start">
            <li>
              Fully responsive app with Firebase Authentication, React Router,
              React Bootstrap.
            </li>
            <li>
              Users can see all details information by clicking the see details
              button.
            </li>
            <li>
              Users can log in with email, password, and google authentication.
              Users can not see services without a login.
            </li>
            <li>Here does not use a database. All data are fake.</li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
