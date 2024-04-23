import React from "react";
import mission from "../assets/7.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import gallery from "../data/gallery";

export default function Mid() {
  return (
    <div className="p-20 flex flex-col justify-start items-center gap-20">
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
        <AwesomeSlider
          fillParent={true}
          cssModule={{
            width: "100%",
            height: "70vh",
          }}
          media={[
            {
              source: gallery[0],
            },
            {
              source: gallery[1],
            },
            {
              source: gallery[2],
            },
            {
              source: gallery[3],
            },
            {
              source: gallery[4],
            },
            {
              source: gallery[5],
            },
          ]}
        />
      </div>
    </div>
  );
}
