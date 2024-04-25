import React from "react";
import mission from "../assets/7.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import gallery from "../data/gallery";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Carousel } from "nuka-carousel";

export default function Mid() {
  return (
    <div className="p-20 pb-0 flex flex-col justify-start items-center gap-20">
      {/* CHES Mission */}
      <div className="flex flex-row justify-between items-start gap-10">
        <div className="shadow-custom rounded-xl overflow-clip w-[45%] h-auto">
          <img src={mission} alt="Mission" />
        </div>
        <div className="w-[50%] flex flex-col justify-start items-start">
          <p className="font-bold font-primary text-5xl mb-5">
            OUR <span className="text-accent">MISSION</span>
          </p>
          <p className="text-xl text-justify">
            Here, at ChES, we conduct intra-departmental events such as
            Initiated Professor-Students interactive sessions that provide an
            opportunity for the students to link with professors outside the
            classroom, ChES awards, Interactive sessions such as “Intern ke
            Fundae,” and so on.
          </p>
          <p className="text-xl mt-3 text-justify">
            We ensure that the Chemical Engineering students do not worry about
            anything outside academics.
          </p>
        </div>
      </div>

      {/*Photo Gallery*/}
      <div className=" w-full flex flex-col justify-start items-center">
        <p className="font-primary text-5xl font-bold mb-10">
          OUR <span className="text-accent ">PHOTO DUMP</span>
        </p>

        <div className="yellowGradient w-full p-8 rounded-xl h-max shadow-custom">
          <Carousel
            autoplay={true}
            autoplayInterval={3000}
            // showArrows="always"
            wrapMode="wrap"
            scrollDistance="slide"
            showDots={true}
            swiping={true}
          >
            {gallery.map((item) => {
              return (
                <img
                  className="rounded-xl max-w-full w-5/6 max-h-[500px] mx-2 border-solid border-white border-[5px] overflow-clip"
                  src={item}
                  alt="Gallery Image"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
