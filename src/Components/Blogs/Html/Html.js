import React from "react";
import { Container } from "react-bootstrap";

const Html = () => {
  return (
    <Container>
      <h1 className="text-center">HTML basics</h1>
      <div className="text-start">
        <p>
          HTML (Hypertext Markup Language) is the code that is used to structure
          a web page and its content. For example, content could be structured
          within a set of paragraphs, a list of bulleted points, or using images
          and data tables. As the title suggests, this article will give you a
          basic understanding of HTML and its functions.
        </p>
        <h3>The main parts of our element are as follows:</h3>
        <ul type="I">
          <li>
            The opening tag: This consists of the name of the element (in this
            case, p), wrapped in opening and closing angle brackets. This states
            where the element begins or starts to take effect — in this case
            where the paragraph begins.
          </li>
          <li>
            The closing tag: This is the same as the opening tag, except that it
            includes a forward slash before the element name. This states where
            the element ends — in this case where the paragraph ends. Failing to
            add a closing tag is one of the standard beginner errors and can
            lead to strange results.
          </li>
          <li>
            The content: This is the content of the element, which in this case,
            is just text.
          </li>
          <li>
            The element: The opening tag, the closing tag, and the content
            together comprise the element.
          </li>
        </ul>
        <h3>Anatomy of an HTML document</h3>
        <p>
          That wraps up the basics of individual HTML elements, but they aren't
          handy on their own. Now we'll look at how individual elements are
          combined to form an entire HTML page. Let's revisit the code we put
          into our index.html example (which we first met in the Dealing with
          files article):
        </p>
        <h5>Here, we have the following:</h5>
        <ul>
          <li>
            !DOCTYPE html — doctype. It is a required preamble. In the mists of
            time, when HTML was young (around 1991/92), doctypes were meant to
            act as links to a set of rules that the HTML page had to follow to
            be considered good HTML, which could mean automatic error checking
            and other useful things. However these days, they don't do much and
            are basically just needed to make sure your document behaves
            correctly. That's all you need to know for now.
          </li>
          <li>
            The html element. This element wraps all the content on the entire
            page and is sometimes known as the root element.
          </li>
          <li>
            The head element. This element acts as a container for all the stuff
            you want to include on the HTML page that isn't the content you are
            showing to your page's viewers. This includes things like keywords
            and a page description that you want to appear in search results,
            CSS to style our content, character set declarations, and more.
          </li>
          <li>
            {" "}
            meta charset="utf-8" — This element sets the character set your
            document should use to UTF-8 which includes most characters from the
            vast majority of written languages. Essentially, it can now handle
            any textual content you might put on it. There is no reason not to
            set this and it can help avoid some problems later on.
          </li>
          <li>
            The title element. This sets the title of your page, which is the
            title that appears in the browser tab the page is loaded in. It is
            also used to describe the page when you bookmark/favorite it.
          </li>
          <li>
            the body element. This contains all the content that you want to
            show to web users when they visit your page, whether that's text,
            images, videos, games, playable audio tracks, or whatever else.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Html;
