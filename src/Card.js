import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactImage from "../src/Images/myFlixScreenShot.jpg";
import AngularImage from "../src/Images/AngularApp.jpg";

function CardExample() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ReactImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={{ color: "black" }}>
            A Movie App Built with React and React Bootstrap
          </Card.Text>
          <Button
            variant="link"
            href="https://github.com/fredpasqua/myflix-v2"
            target="blank"
          >
            GitHub
          </Button>
          <Button
            variant="link"
            href="https://fredpasqua.github.io/myflix-v2/#/"
          >
            Live Project
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={AngularImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={{ color: "black" }}>
            A Movie App Built with React and React Bootstrap
          </Card.Text>
          <Button
            variant="link"
            href="https://github.com/fredpasqua/myFlix-Angular-client"
            target="blank"
          >
            GitHub
          </Button>
          <Button
            variant="link"
            href="https://fredpasqua.github.io/myFlix-Angular-client/welcome"
          >
            Live Project
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardExample;
