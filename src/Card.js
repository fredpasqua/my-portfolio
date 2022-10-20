import { Button, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./card.css";

function ProjectCard(props) {
  let projectImage = props.projectImage;
  let githubLink = props.githubLink;
  let liveLink = props.liveLink;
  let title = props.title;
  let description = props.description;
  return (
    <>
      <Card className="card" style={{ width: "25%" }}>
        <Card.Img className="projectImage" variant="top" src={projectImage} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {title}
            <popover />
          </Card.Title>
          <Card.Text className="description" style={{ color: "black" }}>
            {description}
          </Card.Text>
          <ListGroup.Item className="projButtons">
            <Button variant="outline-primary" href={liveLink} taget="blank">
              Live Project
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="projButtons">
            <Button variant="outline-primary" href={githubLink} target="blank">
              GitHub
            </Button>
          </ListGroup.Item>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
