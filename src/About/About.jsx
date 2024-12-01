import Resume from "../Images/Fred_Pasqua_Resume_2.19.23.pdf";
export const About = () => (
  <div className="about" id="about">
    <h2 className="header-title">About</h2>
    <div className="about-lists">
      <div>
        <ul className="skills">
          <lh>Tech Skills</lh>
          <li>Frameworks: React, Angular</li>
          <li>Javascript, HTML, CSS, SCSS</li>
          <li> Node.js, APIs, Axios, Postman</li>
          <li>Documenting, Github, MongoDB</li>
        </ul>
      </div>
      <div>
        <ul className="skills">
          <lh>Related Skills</lh>
          <li>Copywriting</li>
          <li>Seach Engine Optimization</li>
          <li>Sales and Marketing</li>
          <li>Project Management</li>
        </ul>
      </div>
    
    </div>

    <div className="neonText">
      <a href={Resume} download="Fred_Pasqua_Resume">
       Download Resume
      </a>
    </div>
  </div>
);
