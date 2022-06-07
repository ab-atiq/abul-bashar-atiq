import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const DetailsAirplane = () => {
  return (
    <Container>
      <h1 className="py-3">All Feature of Airplane Website</h1>
      <Row className="py-2">
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/ZXZ1dSR/airplane-home-01.png"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/ZXZ1dSR/airplane-home-01.png"
            ></Image>
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/882FT51/airplane-home-2.png"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/882FT51/airplane-home-2.png"
            ></Image>
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/rGD785y/airplane-home-3.png"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/rGD785y/airplane-home-3.png"
            ></Image>
          </a>
        </Col>
      </Row>
      <Row className="py-3">
        <a
          href="https://ph-assignment-12.firebaseapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="my-2" variant="primary">
            Live site
          </Button>
        </a>
        <a
          href="https://github.com/ab-atiq/airplane-client-side"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="my-2">Client-side code</Button>
        </a>
        <a
          href="https://github.com/ab-atiq/airplane-server-side"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="my-2">Server-side code</Button>
        </a>
      </Row>
      <Row className="p-5">
        <Col>
          <ol type="I">
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

export default DetailsAirplane;
