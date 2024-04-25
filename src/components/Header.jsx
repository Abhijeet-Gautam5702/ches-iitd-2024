import React from "react";
import chesLogo from "../assets/ches_logo_accent.png";
import instaSocial from "../assets/icons8-instagram-500.png";
import linkedinSocial from "../assets/icons8-linkedin-500.png";
import mailSocial from "../assets/icons8-mail-96.png";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    urlSegment: "",
  },
  {
    name: "Blogs",
    urlSegment: "blogs",
  },
  {
    name: "Interview Series",
    urlSegment: "interviews",
  },
  {
    name: "Team",
    urlSegment: "team",
  },
  {
    name: "Events",
    urlSegment: "events",
  },
];

export default function Header({ onHome }) {
  const navigate = useNavigate();

  const activeIndex = useStore((state) => state.activeIndex);
  const changeActiveIndex = useStore((state) => state.changeActiveIndex);

  function handleNavItemClick(index) {
    changeActiveIndex(index);
    navigate(`/${navItems[index].urlSegment}`);
  }

  return (
    <div
      className={`absolute top-0 flex flex-row gap-6 justify-start items-stretch px-4 py-2 w-full z-50 ${
        onHome == true ? "bg-transparent text-white" : "bg-accent text-black"
      }`}
    >
      {/*Logo*/}
      <div className="flex flex-row justify-start items-center">
        <img className=" w-[75px] h-[75px]" src={chesLogo} alt="Ches Logo" />
        <div className="flex flex-col items-start justify-end">
          <p
            className={`font-head text-2xl ${
              onHome == true ? "text-accent" : "text-black"
            }`}
          >
            ChES
          </p>
          <p className="font-head text-xs ">CHEMICAL ENGINEERING SOCIETY</p>
          <p className="font-head text-xs">IIT DELHI</p>
        </div>
      </div>
      {/* Navigation Items */}
      <div className="ml-[5rem]  flex flex-row items-center justify-center">
        {navItems.map((item, index) => {
          return (
            <div
              onClick={() => handleNavItemClick(index)}
              className={`font-primary font-md mx-[1.75rem] cursor-pointer py-1 transition-all duration-200   ${
                activeIndex == index
                  ? `border-solid border-b-[3px] ${
                      onHome == true ? "border-b-white" : "border-b-black"
                    }`
                  : ""
              }`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      {/* Socials*/}
      <div className=" absolute top-1 right-1 flex flex-row gap-1 items-end justify-end">
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src={instaSocial}
          alt="Ches Social"
        />
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src={linkedinSocial}
          alt="Ches Social"
        />
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src={mailSocial}
          alt="Ches Social"
        />
      </div>
    </div>
  );
}
