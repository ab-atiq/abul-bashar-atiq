import React from "react";
import { Container } from "react-bootstrap";

const Backend = () => {
  return (
    <Container>
      <h1>Backend</h1>
      <div className="text-start">
        <h3>CRUD Operations</h3>
        <ol type="a">
          <li>
            CREATE procedures: Performs the INSERT statement to create a new
            record.
          </li>
          <li>
            READ procedures: Reads the table records based on the primary
            keynoted within the input parameter.
          </li>
          <li>
            UPDATE procedures: Executes an UPDATE statement on the table based
            on the specified primary key for a record within the WHERE clause of
            the statement.
          </li>
          <li>
            DELETE procedures: Deletes a specified row in the WHERE clause.
          </li>
        </ol>

        <p>
          <b>JWT:</b> JWT, or JSON Web Token, is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>

        <p>
          <b>Mongoose:</b> Mongoose is an Object Data Modeling (ODM) library for
          MongoDB and Node. js. It manages relationships between data, provides
          schema validation, and is used to translate between objects in code
          and the representation of those objects in MongoDB.
        </p>

        <p>
          <b>Relational database (MySql):</b> Standard relational databases
          enable users to manage predefined data relationships across multiple
          databases. Popular examples of standard relational databases include
          Microsoft SQL Server, Oracle Database, MySQL and IBM DB2.
        </p>

        <p>
          <b>Aggregation:</b> In programming, aggregation is a type of object
          composition where not all the containing objects should be destroyed
          when the owning object is destroyed. More information on this is on
          Difference between Composition and Aggregation.
        </p>

        <p>
          <b>Express:</b> Express provides methods to specify what function is
          called for a particular HTTP verb ( GET , POST , SET , etc.) and URL
          pattern ("Route"), and methods to specify what template ("view")
          engine is used, where template files are located, and what template to
          use to render a response.
        </p>

        <p>
          <b>NodeJS:</b> Node. js is primarily used for non-blocking,
          event-driven servers, due to its single-threaded nature. It's used for
          traditional web sites and back-end API services, but was designed with
          real-time, push-based architectures in mind.
        </p>
      </div>
    </Container>
  );
};

export default Backend;
