import React from "react";
import { Container } from "react-bootstrap";

const ReactBlog = () => {
  return (
    <Container>
      <h1>React Basics</h1>
      <div className="text-start">
        <h4>Reasons to learn React:</h4>
        <p>
          Reasons to learn React: React is a declarative, efficient, and
          flexible JavaScript library for building user interfaces. React.js is
          an open-source, component-based front-end library responsible only for
          the view layer of the application. It is an MVC architecture-based
          library that plays the role of “C” which means control. <br />
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes. The declarative view makes your code more predictable
          and easier to debug.
        </p>
        <h4>Features of React.js:</h4>
        <p>
          There are unique features are available on React because that it is
          widely popular.
        </p>
        <ul>
          <li>
            Use JSX: It is faster than normal JavaScript as it performs
            optimizations while translating to regular JavaScript. It makes it
            easier for us to create templates.
          </li>
          <li>
            Virtual DOM: Virtual DOM exists which is like a lightweight copy of
            the actual DOM. So for every object that exists in the original DOM,
            there is an object for that in React Virtual DOM. It is exactly the
            same, but it does not have the power to directly change the layout
            of the document. Manipulating DOM is slow, but manipulating Virtual
            DOM is fast as nothing gets drawn on the screen.
          </li>
          <li>
            One-way Data Binding: This feature gives you better control over
            your application.
          </li>
          <li>
            Component: A Component is one of the core building blocks of React.
            In other words, we can say that every application you will develop
            in React will be made up of pieces called components. Components
            make the task of building UIs much easier. You can see a UI broken
            down into multiple individual pieces called components and work on
            them independently and merge them all in a parent component which
            will be your final UI.
          </li>
          <li>
            Performance: React.js use JSX, which is faster compared to normal
            JavaScript and HTML. Virtual DOM is a less time taking procedure to
            update webpages content.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default ReactBlog;
