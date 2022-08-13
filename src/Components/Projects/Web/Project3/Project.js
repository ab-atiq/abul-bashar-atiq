import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/air-1.png";
import img2 from "./img/air-2.png";
import img3 from "./img/air-3.png";
import img4 from "./img/air-4.png";

const Project = () => {
  return (
    <Container fluid>
      <h1 className="text-warning text-center py-2">
        Project: Airplane Web Application
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
          <h3>Airplane Website Details Information</h3>
          <a
            className="my-5"
            href="https://ph-assignment-12.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>{" "}
          <a
            href="https://github.com/ab-atiq/airplane-client-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Client-side code</Button>
          </a>{" "}
          <a
            href="https://github.com/ab-atiq/airplane-server-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Server-side code</Button>
          </a>
          <br />
          <ol type="I" className="text-start">
            <li>
              A Fully responsive MERN Stack app with multiple authentication
              systems.
            </li>
            <li>Dashboard Functionality for Admin and Customers separately.</li>
            <li>
              After login customers will be able to place orders, see my orders,
              add reviews, and see all reviews.
            </li>
            <li>
              Admin Will be able to manage all orders, add or remove any
              services and add a user as admin.
            </li>
            <li>
              All data is loaded from the database. When admin or users add
              something it will update in the database.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
