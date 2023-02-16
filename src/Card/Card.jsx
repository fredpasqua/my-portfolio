import { Button, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Card.css";

export const ProjectCard = (props) => {
  let projectImage = props.projectImage;
  let githubLink = props.githubLink;
  let liveLink = props.liveLink;
  let title = props.title;
  let description = props.description;
  return (
    <>
      <Card className="card" style={{ width: "25%" }}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {title}
            <popover />
          </Card.Title>
          <Card.Text className="description" style={{ color: "black" }}>
            {description}
          </Card.Text>
          <Card.Img className="projectImage" variant="top" src={projectImage} />
          <ListGroup.Item className="projButtons">
            <Button
              variant="info"
              href={liveLink}
              taget="blank"
              className="custom-btn"
            >
              Live Project
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="projButtons">
            <Button
              className="custom-btn"
              variant="info"
              href={githubLink}
              target="blank"
            >
              GitHub
            </Button>
          </ListGroup.Item>
        </Card.Body>
      </Card>
    </>
  );
};
