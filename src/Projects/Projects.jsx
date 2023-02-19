import { ProjectCard } from "../Card/Card";
import { URLS } from "../URLS/Urls.js";
import ReactImage from "../Images/myFlixScreenShot.jpg";
import AngularImage from "../Images/AngularApp.jpg";
import HornTrax from "../Images/Horntrax.jpg";
import PokedexImage from "../Images/PokedexImage.jpg";
import SpellingGameImage from "../Images/SpellingGameImage.jpg";
import Mongodb from "../Images/Mongodb.png";
import Robots from "../Images/robots.jpg";
import MeetApp from "../Images/meetapp.jpg";

export const Projects = () => {
  return (
    <div id="project">
      <h2 className="header-title">My Work</h2>

      <div className="projectCards">
        <ProjectCard
          className="projectItem"
          projectImage={ReactImage}
          githubLink={URLS.myFlixReactLink}
          liveLink={URLS.myFlixReactLive}
          title={"React.JS Project"}
          description={
            "myFlix Movie App: Browse movies, select your favorites, learn about directors and more! Built with the MERN stack. "
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={HornTrax}
          githubLink={URLS.horntraxLink}
          liveLink={URLS.horntraxLive}
          title={"Loaner Tracker"}
          description={
            "Full stack project, MERN stack, track and update inventory! USERNAME: testtest PASSWORD: password"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={Robots}
          githubLink={URLS.robotsLink}
          liveLink={URLS.robotsLive}
          title={"Company Directory"}
          description={
            "Search the company directory for your favorite robot. Built with React. Features: sort functions, details modal, responsive"
          }
        />

        <ProjectCard
          className="projectItem"
          projectImage={Mongodb}
          githubLink={URLS.apiLink}
          liveLink={URLS.apiLive}
          title={"API"}
          description={
            "Movie API: server-side component of the movies web applications"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={AngularImage}
          githubLink={URLS.angularLink}
          liveLink={URLS.angularLive}
          title={"Angular Project"}
          description={
            "myFlix Movie App: Browse movies, select your favorites, learn about directors and more!"
          }
        />

        {/* <ProjectCard
          className="projectItem"
          projectImage={PokedexImage}
          githubLink={URLS.pokeLink}
          liveLink={URLS.pokeLive}
          title={"PokeDex App"}
          description={
            "This PokeDex was created using an existing online API. The app was formatted using Bootstrap and a mobile first design concept."
          }
        /> */}
        {/* <ProjectCard
          className="projectItem"
          projectImage={MeetApp}
          githubLink={URLS.meetLink}
          liveLink={URLS.meetLive}
          title={"Meet App"}
          description={
            "This Progressive Web App (PWA) displays classes being offered by CareerFoundry close to the users city of choice."
          }
        /> */}
        <ProjectCard
          className="projectItem"
          projectImage={SpellingGameImage}
          githubLink={URLS.spellingLink}
          liveLink={URLS.spellingLive}
          title={"Say N' Spell"}
          description={
            "A fun game I programmed for my daughters to aid them in learning their spelling words."
          }
        />
      </div>
    </div>
  );
};
