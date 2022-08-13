import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const DetailsMedical = () => {
  return (
    <Container>
      <h1 className="py-3">All Feature of Medical Website</h1>
      <Row>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/GWwT2TM/doctor-home-1.png"
            className="p-2"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/GWwT2TM/doctor-home-1.png"
            ></Image>
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/0GbDdJK/doctor-home-2.png"
            className="p-2"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/0GbDdJK/doctor-home-2.png"
            ></Image>
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.ibb.co/Ct8FCL8/doctor-home-3.png"
            className="p-2"
          >
            <Image
              fluid
              style={{ height: "300px" }}
              src="https://i.ibb.co/Ct8FCL8/doctor-home-3.png"
            ></Image>
          </a>
        </Col>
      </Row>
      <Row className="py-3">
        <a
          href="https://ph-assignment-10-7a5fc.firebaseapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="my-2" variant="primary">
            Live site
          </Button>
        </a>
        <a
          href="https://github.com/ab-atiq/Healthcare-Website"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="my-2" variant="primary">
            Server code
          </Button>
        </a>
      </Row>
      <Row className="p-5">
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
      </Row>
    </Container>
  );
};

export default DetailsMedical;
