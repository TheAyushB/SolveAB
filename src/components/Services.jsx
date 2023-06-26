import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/3.jpg";
import image2 from "../assets/img5.png";
import image4 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={1000}
        autoPlay
      >
        <div>
          <img src={image2} alt="Item2" />
          <p className="legend">Tech Support</p>
        </div>
        <div>
          <img src={image1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={image4} alt="Item4" />
          <p className="legend">Peer-to-Peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
