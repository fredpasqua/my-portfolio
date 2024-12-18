import "./styles.css";
import "animate.css";
import { useInView } from "react-intersection-observer";
import fred from "../Images/fred.png";

export default function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
  });

  return (
    <>
      <div className="background">
        <div className="parent">
          <div className="image-element">
            <img
              ref={ref}
              className={
                inView
                  ? "animate__animated animate__fadeInRight brightness"
                  : ""
              }
              src={fred}
              alt="portrait of Fred"
            />
          </div>
          <div
            ref={ref}
            className={`text-element ${
              inView ? "animate__animated animate__fadeInUp" : "hide"
            }`}
          >
            <h2 ref={ref}>Fred Pasqua - Web Developer</h2>
            <section>
              <hr></hr>
              <p>
                I love working with new tech and creating engaging designs,
                clean code and excellent user experiences.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
