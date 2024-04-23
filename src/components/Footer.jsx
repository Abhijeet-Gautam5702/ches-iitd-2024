import React from "react";
import iitd from "../assets/gallery-1.jpg";
import insta from "../assets/insta_black.png";
import mail from "../assets/mail_black.png";
import linkedin from "../assets/linkedin_black.png";
import chesLogo from "../assets/ches_logo_accent.png";

export default function Footer() {
  return (
    <div className="bg-black w-full text-white p-8 pb-4">
      {/* Footer Content*/}
      <div className="flex flex-row justify-between items-start">
        {/*CHES LOGO + socials*/}
        <div>
          {/*CHES Logo */}
          <div className="flex flex-row justify-start items-center gap-3">
            <img className="w-[8rem] h-[8rem]" src={chesLogo} alt="Ches Logo" />
            <div>
              <p className="font-head text-4xl text-accent">ChES</p>
              <p className="font-head text-xl">Chemical Engineering Society</p>
              <p className="font-head text-xl"> I.I.T. DELHI</p>
            </div>
          </div>

          {/*SOCIAL CONTACTS */}
          {/* <p className="font-head text-2xl mt-auto mb-2">SOCIAL CONTACTS</p> */}
          <div className="mt-3 flex flex-row justify-start  items-center gap-2">
            <img
              className="h-9 w-9 cursor-pointer"
              src={linkedin}
              alt="social"
            />
            <img
              className="h-10 w-10 cursor-pointer "
              src={insta}
              alt="social"
            />
            <img
              className="h-11 w-11 cursor-pointer "
              src={mail}
              alt="social"
            />
          </div>
        </div>

        {/*QUICK LINKS*/}
        <div className="font-head">
          <p className=" text-2xl">QUICK LINKS</p>
          <div className="mt-3 text-lg flex flex-col gap-2 justify-start items-start">
            <p className="cursor-pointer hover:text-accent">Home</p>
            <p className="cursor-pointer hover:text-accent">Blogs</p>
            <p className="cursor-pointer hover:text-accent">Interview Series</p>
            <p className="cursor-pointer hover:text-accent">ChES Team</p>
          </div>
        </div>

        {/*IIT-D Image */}
        <div className="w-[30%]">
          <div className=" rounded-xl overflow-clip">
            <img src={iitd} alt="IIT-Delhi Main Building" />
          </div>
          <p className="text-sm text-center font-head mt-2">
            Indian Institute of Technology Delhi (Main Building)
          </p>
        </div>
      </div>

      {/* Developer Info*/}
      <p className="font-head">
        Website developed and maintained by{" "}
        <span className="text-accent">ChES Technical Team</span>
      </p>
    </div>
  );
}
