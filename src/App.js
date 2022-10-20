import "./App.css";
import ProjectCard from "./Card";
import ReactImage from "../src/Images/myFlixScreenShot.jpg";
import AngularImage from "../src/Images/AngularApp.jpg";
import PokedexImage from "../src/Images/PokedexImage.jpg";
import SpellingGameImage from "../src/Images/SpellingGameImage.jpg";
import MeetApp from "../src/Images/meetapp.jpg";
import Test from "./about";
import Menu from "./Navbar";
function App() {
  let myFlixReactLink = "https://github.com/fredpasqua/myflix-v2";
  let myFlixReactLive = "https://fredpasqua.github.io/myflix-v2/#/";
  let angularLink = "https://github.com/fredpasqua/myFlix-Angular-client";
  let angularLive =
    "https://fredpasqua.github.io/myFlix-Angular-client/welcome";
  let pokeLink = "https://github.com/fredpasqua/Pokedex-js-app";
  let pokeLive = "https://fredpasqua.github.io/Pokedex-js-app/";
  let meetLink = "https://github.com/fredpasqua/meet";
  let meetLive = "https://fredpasqua.github.io/meet/";
  let spellingLink = "https://github.com/fredpasqua/Spelling-Test-2";
  let spellingLive = "https://fredsjams.com/spellinggame/index.html";

  return (
    <div className="App" id="home">
      <Menu></Menu>
      <Test id="about" />
      <p id="projects"></p>
      <p className="header-title">PROJECTS</p>
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
          githubLink={angularLink}
          liveLink={angularLive}
          title={"Angular Project"}
          description={
            "myFlix Movie App: Browse movies, select your favorites, learn about directors and more!"
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={PokedexImage}
          githubLink={pokeLink}
          liveLink={pokeLive}
          title={"PokeDex App"}
          description={
            "This PokeDex was created using an existing online API. The app was formatted using Bootstrap and a mobile first design concept."
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={MeetApp}
          githubLink={meetLink}
          liveLink={meetLive}
          title={"Meet App"}
          description={
            "This Progressive Web Application allows the user to search for web development classes being offered by CareerFoundry close to their city."
          }
        />
        <ProjectCard
          className="projectItem"
          projectImage={SpellingGameImage}
          githubLink={spellingLink}
          liveLink={spellingLive}
          title={"Say N' Spell"}
          description={
            "A fun game I programmed for my daughters to help them study their spelling words."
          }
        />
      </div>
      <div classname="about" id="about">
        <h1 className="header-title">ABOUT ME</h1>
        <ul>
          <li>Full Stack Web Developer Certificate from CareerFoundry 2022</li>
          <li>Experienced developing in React, React Native, Angular</li>
          <li>Javascript, HTML, JSX, CSS, SCSS, Bootstrap</li>
          <li>
            Node.js, APIs, Axios, Postman, Integration testing, Documentation,
            Github
          </li>
          <li>Experienced Blogger with SEO Skills</li>
          <li>Attention to Detail</li>
          <li>Entrepreneurial Spirit</li>
          <li>Organized and Efficient</li>
          <li>Experience as a Sales Professional</li>
          <li>Client focused and business centric</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
