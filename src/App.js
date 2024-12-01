import "./App.css";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects.jsx";
import { Contact } from "./Contact/Contact.jsx";
import Menu from "./Navbar/Navbar.jsx";
import Headerimage from "./Headerimage/Headerimage.jsx";
import Banner from "./HeroBanner/component.jsx";
function App() {
  return (
    <div className="app" id="home">
      <Menu />
      <Headerimage />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
