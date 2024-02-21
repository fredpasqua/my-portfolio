import { ProjectCard } from "../Card/Card";
import { URLS } from "../URLS/Urls.js";
import ReactImage from "../Images/myFlixScreenShot.jpg";
import AngularImage from "../Images/AngularApp.jpg";
import HornTrax from "../Images/Horntrax.jpg";
import ClientImage from "../Images/clientside.jpg";
import SpellingGameImage from "../Images/SpellingGameImage.jpg";
import Mongodb from "../Images/Mongodb.png";
import Robots from "../Images/robots.jpg";
import Route38 from "../Images/ROUTE38DENTAL.jpg";
import FredsJams from "../Images/fredsjams.png";
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
          projectImage={Route38}
          liveLink={URLS.route38Link}
          title={"Word Press Site"}
          description={
            "Freelance Word Press Website. I was hired to create a responsive design working from the agency's PSD document."
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={HornTrax}
          githubLink={URLS.horntraxLink}
          liveLink={URLS.horntraxLive}
          title={"HornTrax"}
          description={
            "Full stack project built with MERN stack, track and update inventory! USERNAME: testtest PASSWORD: password"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={FredsJams}
          githubLink={URLS.fredsJamsLink}
          liveLink={URLS.fredsJamsLive}
          title={"Front End Example"}
          description={
            "FredsJams is a webpage dedicated to music and related gear reviews - under construction"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={ClientImage}
          githubLink={URLS.clientSampleLink}
          liveLink={URLS.clientSampleLive}
          title={"Front End Example"}
          description={
            "City Tours is an example of my landing page work. CSS styling, responsive design, built with React"
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
