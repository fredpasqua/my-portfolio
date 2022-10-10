import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function CardExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../AngularApp.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{ color: "black" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;
