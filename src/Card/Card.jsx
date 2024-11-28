import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Card.css";
import Tabs from "../Tabs/Tabs";
export const ProjectCard = (props) => {
  const { projectImage, githubLink, liveLink, title, description } = props;
  const [tabSelected, setTabSelected] = useState(1);

  const handleClick = (value) => {
    setTabSelected(value);
    console.log(tabSelected);
  };
  return (
    <>
      <div className="projectContainer">
        <Tabs handleClick={handleClick}></Tabs>
        {tabSelected === 1 ? (
          <Card className="card" style={{ width: "25%" }}>
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{title}</Card.Title>

              <Card.Img
                className="projectImage"
                variant="top"
                src={projectImage}
              />
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
                {githubLink != null ? (
                  <Button
                    className="custom-btn"
                    variant="info"
                    href={githubLink}
                    target="blank"
                  >
                    GitHub
                  </Button>
                ) : null}
              </ListGroup.Item>
            </Card.Body>
          </Card>
        ) : tabSelected === 2 ? (
          <Card className="card" style={{ width: "25%" }}>
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{title}</Card.Title>
              <Card.Text className="description" style={{ color: "black" }}>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <div>
            <h2>another site</h2>
            <p>
              Fblach haldkwie dksowte. I was hired to create a responsive design
              working from the agency's PSD document.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
