import "./App.css";
import ProjectCard from "./Card";
import ReactImage from "../src/Images/myFlixScreenShot.jpg";
import AngularImage from "../src/Images/AngularApp.jpg";
function App() {
  let myFlixReactLink = "https://github.com/fredpasqua/myflix-v2";
  let myFlixReactLive = "https://fredpasqua.github.io/myflix-v2/#/";
  return (
    <div className="App">
      <div className="Projects">
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />

        <ProjectCard
          className="projectItem"
          projectImage={AngularImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"MyFlix"}
          description={"A movie app designed with React and Bootstrap"}
        />
      </div>
    </div>
  );
}

export default App;
