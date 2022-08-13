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
        Project: Tourism Web Application
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
          <h3>Tourism Website Details Information</h3>
          <a
            className="my-5"
            href="https://tourism-assignment-11-75efb.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>{" "}
          <a
            href="https://github.com/ab-atiq/tourism-client-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Client-side code</Button>
          </a>{" "}
          <a
            href="https://github.com/ab-atiq/tourism-server-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Server-side code</Button>
          </a>
          <br />
          <ol type="I" className="text-start">
            <li>
              Responsive MERN Stack app with firebase authentication,
              functionality for admin and customer.
            </li>
            <li>
              Customers can book service and be able to cancel their service.
            </li>
            <li>
              Admin can add or remove services, orders, and also change order
              status.
            </li>
            <li>
              Users can book any accommodation click book now button, a user has
              to give personal information and the user can delete the booking.
            </li>
            <li>
              All data is loaded from the database. When admin or users add
              something it will update in the database.
            </li>
            <li>You can log in with email password base authentication.</li>
            <li>This website load from heroku server. This website is fully</li>
            <li>
              Responsive you can see details information click see details
              button.
            </li>
            <li>
              You can book any accommodation click book now botton. Before
            </li>
            <li>
              Complete booking you have to give you information. You can see
              your
            </li>
            <li>
              Orders and delete that orders if you want. You can see all orders
            </li>
            <li>
              This website. This website make by express, mongodb, react, react
              router, node
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
