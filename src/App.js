import "./App.css";
import ProjectCard from "./Card";
import ReactImage from "../src/Images/myFlixScreenShot.jpg";
import AngularImage from "../src/Images/AngularApp.jpg";
import PokedexImage from "../src/Images/PokedexImage.jpg";
import SpellingGameImage from "../src/Images/SpellingGameImage.jpg";
import MeetApp from "../src/Images/meetapp.jpg";

import Menu from "./Navbar";
function App() {
  let myFlixReactLink = "https://github.com/fredpasqua/myflix-v2";
  let myFlixReactLive = "https://fredpasqua.github.io/myflix-v2/#/";
  return (
    <div className="App">
      <Menu></Menu>
      <div className="Projects">
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"React.JS Project"}
          description={
            "myFlix Movie App: Browse movies, select your favorites, learn about directors and more! Built with the MERN stack. "
          }
        />

        <ProjectCard
          className="projectItem"
          projectImage={AngularImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"Angular Project"}
          description={
            "myFlix Movie App: Browse movies, select your favorites, learn about directors and more!"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={PokedexImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"PokeDex App"}
          description={
            "This PokeDex was created using an existing online API. The app was formatted using Bootstrap and a mobile first design concept."
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={MeetApp}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"Meet App"}
          description={
            "This Progressive Web Application allows the user to search for web development classes being offered by CareerFoundry close to their city."
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={SpellingGameImage}
          githubLink={myFlixReactLink}
          liveLink={myFlixReactLive}
          title={"Say N' Spell"}
          description={
            "A fun game I programmed for my daughters to help them study their spelling words."
          }
        />
      </div>
    </div>
  );
}

export default App;
