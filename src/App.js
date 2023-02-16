import "./App.css";

import { About } from "./About/About";
import { Projects } from "./Projects/Projects.jsx";
import { Contact } from "./Contact/Contact.jsx";


import Menu from "./Navbar/Navbar.jsx";
import Headerimage from "./Headerimage";

function App() {
  return (
    <div className="app" id="home">
      <Menu />
      <Headerimage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
