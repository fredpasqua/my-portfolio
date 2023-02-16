import "./App.css";
import { ProjectCard } from "./Card";
import ReactImage from "../src/Images/myFlixScreenShot.jpg";
import AngularImage from "../src/Images/AngularApp.jpg";
import HornTrax from "../src/Images/Horntrax.jpg";
import PokedexImage from "../src/Images/PokedexImage.jpg";
import SpellingGameImage from "../src/Images/SpellingGameImage.jpg";
import MeetApp from "../src/Images/meetapp.jpg";
import GitLogo from "../src/Images/github-svgrepo-com.svg";
import CodeScreen from "../src/Images/codescreen.jpg";
import Philly from "../src/Images/philly.jpg";
import Mongodb from "../src/Images/Mongodb.png";
import Robots from "../src/Images/robots.jpg";
import FPResume from "../src/Images/Fred_Pasqua_Resume.pdf";
import Menu from "./Navbar";
import Headerimage from "./Headerimage";
import { URLS } from "./Urls.js";
function App() {
  return (
    <div className="App" id="home">
      <Menu />
      <Headerimage />
      <div className="about" id="about">
        <h2 className="header-title">About</h2>
        <p>
          My name is Fred Pasqua and I am a web developer. I love working with
          new tech and creating engaging designs, clean code and excellent user
          experiences.{" "}
        </p>
        <ul>
          <li className="bold-li">Tech Skills</li>
          <li>Frameworks: React, Angular and React Native</li>
          <li>Javascript, HTML, CSS, SCSS</li>
          <li> Node.js, APIs, Axios, Postman, Unit and Integration testing</li>
          <li>Documenting, Github, MongoDB</li>
          <li className="bold-li">Related Skills</li>
          <li>Experienced Blogger with SEO Skills</li>
          <li>Attention to Detail</li>
          <li>Entrepreneurial Spirit</li>
          <li>Organized and Efficient</li>
          <li>Professional Sales Experience</li>
          <li>Client Focused and Business Centric</li>
        </ul>
        <div className="neonText">
          <a href={FPResume} download={FPResume}>
            *** RESUME.PDF ***
          </a>
        </div>
      </div>

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
            projectImage={AngularImage}
            githubLink={URLS.angularLink}
            liveLink={URLS.angularLive}
            title={"Angular Project"}
            description={
              "myFlix Movie App: Browse movies, select your favorites, learn about directors and more!"
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
            projectImage={PokedexImage}
            githubLink={URLS.pokeLink}
            liveLink={URLS.pokeLive}
            title={"PokeDex App"}
            description={
              "This PokeDex was created using an existing online API. The app was formatted using Bootstrap and a mobile first design concept."
            }
          />
          <ProjectCard
            className="projectItem"
            projectImage={MeetApp}
            githubLink={URLS.meetLink}
            liveLink={URLS.meetLive}
            title={"Meet App"}
            description={
              "This Progressive Web App (PWA) displays classes being offered by CareerFoundry close to the users city of choice."
            }
          />
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
      <div className="contact" id="contact">
        <img
          className="contactImage"
          src={Philly}
          alt="philadelphia sky line"
        ></img>
        <p>Fred Pasqua</p>
        <p>Haddon Heights</p>
        <p>New Jersey</p>
        <p>
          Tel <a href="tel:6098765098">(609) 876-5098</a>
        </p>
        <p>
          <a href="mailto:fredpasqua74@gmail.com">Send Email</a>
        </p>
        <a href="https://github.com/fredpasqua" taget="blank">
          <img className="gitlogo" src={GitLogo} alt="github"></img>
        </a>
        <img
          className="contactImage"
          src={CodeScreen}
          alt="computer screen with code"
        ></img>
      </div>
    </div>
  );
}

export default App;
