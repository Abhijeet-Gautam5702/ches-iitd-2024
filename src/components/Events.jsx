import React from "react";
import events from "../data/events";

export default function Events() {
  return (
    <div className=" py-20 px-[10rem] w-full  flex flex-col justify-start items-center gap-5">
      <p className="font-head font-bold text-5xl">
        THE <span className="text-accent">EVENTS</span>
      </p>
      <div className="w-full flex flex-col justify-start items-center gap-6 mt-10">
        {events.map((event) => {
          return (
            <div className="w-full p-5 flex flex-row justify-between items-stretch gap-6 bg-secondaryBg rounded-xl">
              {/*Event Banner*/}
              <div className="rounded-xl overflow-clip w-[50%] max-h-[300px]">
                <img src={event.banner} alt="Event Banner" />
              </div>
              {/*Event Details*/}
              <div className="flex flex-col justify-between items-start max-w-[50%] ">
                <div>
                  <p className="font-head text-4xl mb-2">{event.title}</p>
                  <p className="text-justify">{event.description}</p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-sm">DATE: </span>
                    {event.date}{" "}
                  </p>
                  <p>
                    <span className="font-bold text-sm">VENUE: </span>
                    {event.venue}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
