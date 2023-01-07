import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ImageSlider() {
  var placeHolder = "https://dummyimage.com/450x250/f00/fff";

  return (
    <Carousel showArrows={true}>
      <div>
        <img src={placeHolder} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={placeHolder} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={placeHolder} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={placeHolder} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={placeHolder} />
        <p className="legend">Legend 5</p>
      </div>
    </Carousel>
  );
}

export default ImageSlider;
