import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "./Web/Project1/img/img-1.png";
import img2 from "./Web/Project2/img/img-1.png";
import img3 from "./Web/Project3/img/air-1.png";
import img4 from "./Web/Project4/img/img-1.png";
import img5 from "./Web/Project5/img/img-1.png";
import img6 from "./Web/Project6/img/img-1.png";

const Projects = () => {
  return (
    <Container className="py-4">
      <h1 className="text-primary py-2 text-center">All Projects</h1>
      <h1 className="text-warning pb-3">Web Design and Development</h1>
      <Row>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title>Rental Car Website</Card.Title>
              <Card.Text>
                This is Fully responsive Full stack web application with multiple
                authentication systems and dashboard functionality for Admin and
                Patient separately.
              </Card.Text>
              <Link to="web-6">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Doctors portal Website</Card.Title>
              <Card.Text>
                This is Fully responsive Full stack web application with multiple
                authentication systems and dashboard functionality for Admin and
                Patient separately.
              </Card.Text>
              <Link to="web-5">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Dhaka Shop Website</Card.Title>
              <Card.Text>
                This is MERN stack commercial web applications. In this website, you can see many essential product and buy thats product.
              </Card.Text>
              <Link to="web-4">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Airplane Website</Card.Title>
              <Card.Text>
                A Fully responsive MERN stack web application with multiple
                authentication systems. Dashboard Functionality for Admin and
                Customers separately.
              </Card.Text>
              <Link to="web-3">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Tourism Website</Card.Title>
              <Card.Text>
                A Fully responsive MERN stack web application with multiple
                authentication systems. In this application, user can see all tourism place in Bangladesh.
              </Card.Text>
              <Link to="web-2">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="pb-2">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Healthcare Website</Card.Title>
              <Card.Text>
                Responsive MERN stack web application with multiple
                authentication systems. This is only one page web application
              </Card.Text>
              <Link to="web-1">
                <Button variant="outline-danger">Full Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="text-warning py-3">App Design and Development</h1>
      <Row>
        <h3>Coming soon....</h3>
      </Row>
    </Container>
  );
};

export default Projects;
