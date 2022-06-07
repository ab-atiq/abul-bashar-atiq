import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Container className="py-4">
      <h1 className="text-primary py-3">Projects</h1>
      <Row>
        <Col sm={6}>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://i.ibb.co/Mhymcpq/airplane-home.png"
            >
              <Image
                fluid
                style={{ height: "300px" }}
                src="https://i.ibb.co/Mhymcpq/airplane-home.png"
              ></Image>
            </a>
          </div>
          <br />
          <Link to="/airplane">
            <Button>View Details</Button>
          </Link>
        </Col>
        <Col sm={6}>
          <h1>Airplane Website</h1>
          <a
            className="my-5"
            href="https://ph-assignment-12.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>
          <br />
          <a
            href="https://github.com/ab-atiq/airplane-client-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2">Client-side code</Button>
          </a>
          <br />
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
      <br />
      <Row>
        <Col sm={6}>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://i.ibb.co/XpG8tk9/tourism-home.png"
            >
              <Image
                fluid
                style={{ height: "300px" }}
                src="https://i.ibb.co/XpG8tk9/tourism-home.png"
              ></Image>
            </a>
          </div>
          <br />
          <Link to="/tourism">
            <Button>View Details</Button>
          </Link>
        </Col>
        <Col sm={6}>
          <h1>Tourism</h1>
          <a
            href="https://tourism-assignment-11-75efb.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>
          <br />
          <a
            href="https://github.com/ab-atiq/tourism-client-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Client-side code
            </Button>
          </a>
          <br />
          <a
            href="https://github.com/ab-atiq/tourism-server-side"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Server-side code
            </Button>
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
          </ol>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://i.ibb.co/NtC7K48/doctor-home.png"
            >
              <Image
                fluid
                style={{ height: "300px" }}
                src="https://i.ibb.co/NtC7K48/doctor-home.png"
              ></Image>
            </a>
          </div>
          <br />
          <Link to="/medical">
            <Button>View Details</Button>
          </Link>
        </Col>
        <Col sm={6}>
          <h1>Medical Service</h1>
          <a
            href="https://ph-assignment-10-7a5fc.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Live site
            </Button>
          </a>
          <br />
          <a
            href="https://github.com/ab-atiq/Healthcare-Website"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="my-2" variant="primary">
              Server code
            </Button>
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

export default Projects;
