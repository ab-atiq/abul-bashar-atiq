import React from "react";
import { Container } from "react-bootstrap";

const Css = () => {
  return (
    <Container>
      <h1>CSS Basics</h1>
      <div className="text-start">
        <p>
          CSS (Cascading Style Sheets) is the code that styles web content. CSS
          basics walks through what you need to get started. We'll answer
          questions like: How do I make text red? How do I make content display
          at a certain location in the (webpage) layout? How do I decorate my
          webpage with background images and colors?
        </p>
        <h1>What is CSS?</h1>
        <p>
          Like HTML, CSS is not a programming language. It's not a markup
          language either. CSS is a style sheet language. CSS is what you use to
          selectively style HTML elements. For example, this CSS selects
          paragraph text, setting the color to red: Let's try it out! Using a
          text editor, paste the three lines of CSS (above) into a new file.
          Save the file as style.css in a directory named styles.
        </p>
        <h3>Anatomy of a CSS rule set</h3>
        <p>
          <b>Selector:</b> This is the HTML element name at the start of the
          ruleset. It defines the element(s) to be styled (in this example, p
          elements). To style a different element, change the selector.
        </p>
        <p>
          <b>Declaration:</b>This is a single rule like <code>color: red;</code>{" "}
          It specifies which of the element's properties you want to style.
        </p>
        <p>
          <b>Properties:</b>These are ways in which you can style an HTML
          element. (In this example, color is a property of the p elements.) In
          CSS, you choose which properties you want to affect in the rule.
        </p>
        <p>
          <b>Property value:</b>To the right of the property—after the
          colon—there is the property value. This chooses one out of many
          possible appearances for a given property. (For example, there are
          many color values in addition to red.)
        </p>
      </div>
    </Container>
  );
};

export default Css;
