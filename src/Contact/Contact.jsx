import GitLogo from "../Images/github-svgrepo-com.svg";
import CodeScreen from "../Images/codescreen.jpg";
import Philly from "../Images/philly.jpg";
export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img
        className="contactImage"
        src={Philly}
        alt="philadelphia sky line"
      ></img>
      <p>Fred Pasqua</p>
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
  );
};
