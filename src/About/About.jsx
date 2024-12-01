import Resume from "../Images/Fred_Pasqua_Resume_2.19.23.pdf";
export const About = () => (
  <div className="about" id="about">
    <h2 className="header-title">About</h2>

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
      <a href={Resume} download="Fred_Pasqua_Resume">
        *** RESUME.PDF ***
      </a>
    </div>
  </div>
);
