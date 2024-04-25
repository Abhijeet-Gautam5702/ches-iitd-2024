import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full p-20 pt-0 font-primary flex flex-col justify-start items-stretch ">
      <div className="flex flex-row justify-center items-center gap-2 text-5xl font-bold text-center text">
        <p>OUR </p>
        <p className="text-accent"> NEWSLETTER</p>
        <p className="ml-2 text-sm py-2 px-3 font-normal blueGradient text-white rounded-sm">
          COMING SOON
        </p>
      </div>
      <p className="text-2xl font-head mt-10 mb-4">
        Stay tuned with all that is happening in and around the Chemical
        Engineering Society
      </p>
      <p className="text-lg font-primary">
        We have a lot of things going on every now and then. Keeping track of
        everything seems a little tedious. So we came up with our brand new
        newsletter which will contain all the necessary updates of past and
        upcoming events organized by the Chemical Engineering Society.
      </p>

      <form className="flex flex-row justify-start items-center mt-7 font-primary">
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email (preferably IIT-webmail)"
          className="w-[40%] text-sm p-5 rounded-lg text-secondary bg-secondaryBg caret-black placeholder-gray-500 focus:outline-1"
        />
        <button className="py-5 px-8 font-bold bg-accent rounded-lg ml-5 text-black">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
