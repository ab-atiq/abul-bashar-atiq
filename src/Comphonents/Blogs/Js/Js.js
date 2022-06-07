import React from "react";
import { Container } from "react-bootstrap";

const Js = () => {
  return (
    <Container>
      <h1>JavaScript Basics</h1>
      <div className="text-start">
        <p>
          JavaScript is a programming language that adds interactivity to your
          website. This happens in games, in the behavior of responses when
          buttons are pressed or with data entry on forms; with dynamic styling;
          with animation, etc. This article helps you get started with
          JavaScript and furthers your understanding of what is possible.
        </p>
        <h3>What is JavaScript</h3>
        <p>
          JavaScript is a powerful programming language that can add
          interactivity to a website. It was invented by Brendan Eich
          (co-founder of the Mozilla project, the Mozilla Foundation, and the
          Mozilla Corporation).
        </p>
        <p>
          JavaScript is versatile and beginner-friendly. With more experience,
          you'll be able to create games, animated 2D and 3D graphics,
          comprehensive database-driven apps, and much more!
        </p>
        <p>
          JavaScript itself is relatively compact, yet very flexible. Developers
          have written a variety of tools on top of the core JavaScript
          language, unlocking a vast amount of functionality with minimum
          effort. These include:
        </p>
        <ul>
          <li>
            <p>
              Browser Application Programming Interfaces (APIs) built into web
              browsers, providing functionality such as dynamically creating
              HTML and setting CSS styles; collecting and manipulating a video
              stream from a user's webcam, or generating 3D graphics and audio
              samples.
            </p>
          </li>
          <li>
            <p>
              Third-party APIs that allow developers to incorporate
              functionality in sites from other content providers, such as
              Twitter or Facebook.
            </p>
          </li>
          <li>
            <p>
              Third-party frameworks and libraries that you can apply to HTML to
              accelerate the work of building sites and applications.
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Js;
