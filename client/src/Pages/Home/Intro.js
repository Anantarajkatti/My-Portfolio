import React from "react";
import myPic from "./MyPic.jpeg";
import { useSelector } from "react-redux";

function Intro() {
  const {loading, portfolioData}=useSelector((state)=>state.root)
  const {introRes}= portfolioData;
   const{firstName, lastName,welcomeText,description,caption}=introRes
  

  return (
    <div className="intro-container flex items-center tablet:flex-col   gap-10 ">
      <div className=" intro-content flex flex-col items-start justify-center py-10 gap-8 tablet:order-2 ">
        <h1 className="text-4xl font-semibold tablet:text-2xl ">{welcomeText || ""}</h1>
        <h1 className="text-8xl tablet:text-6xl text-secondary font-semibold">
          
          {firstName || ""}{" "}{lastName || " "}
        </h1>
        <h1 className="text-5xl  tablet:text-3xl font-semibold  text-tertiary">
         {caption || " "}
        </h1>
        <p className="w-2/3 text-2xl tablet:text-xl font-semibold w-full ">
          {description ||" "}
        </p>
      </div>
      <div className="image flex w-full justify-center tablet:order-1 ">
        <img
          className="h-[400px] rounded-full shadow-[6px_5px_3px_rgba(0,0,0,0.2)] border-[5px] border-tertiary border-opacity-70 tablet:h-[300px]   "
          src={myPic}
          alt="my img"
        />
      </div>
    </div>
  );
}

export default Intro;
