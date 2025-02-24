import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/roadbycycle/editroadbicycle1.jpg";
import img2 from "../../../assets/images/roadbycycle/editroadbicycle2.jpg";
import img3 from "../../../assets/images/roadbycycle/editroadbicycle-3.jpg";
import img4 from "../../../assets/images/roadbycycle/editroadbicycle-4.jpg";
import img5 from "../../../assets/images/roadbycycle/editroadbicycle-5.jpg";
import img6 from "../../../assets/images/roadbycycle/editroadbicycle-6.webp";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
