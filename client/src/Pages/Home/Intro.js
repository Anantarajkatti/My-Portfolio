import React from "react";
import myPic from "./MyPic.jpeg";

function Intro() {
  return (
    <div className="intro-container flex items-center tablet:flex-col   gap-10 ">
      <div className=" intro-content flex flex-col items-start justify-center py-10 gap-8 tablet:order-2 ">
        <h1 className="text-4xl font-semibold tablet:text-2xl ">Hi ,I am</h1>
        <h1 className="text-8xl tablet:text-6xl text-secondary font-semibold">
          {" "}
          ANANTARAJ KATTI
        </h1>
        <h1 className="text-5xl  tablet:text-3xl font-semibold  text-tertiary">
          MERN Stack Developer
        </h1>
        <p className="w-2/3 text-2xl tablet:text-xl font-semibold w-full ">
          A motivated full-stack developer skilled in front-end and back-end
          development. Passionate about creating efficient, scalable, and
          user-friendly applications, with a strong foundation in web
          technologies and a commitment to continuous learning and
          problem-solving.
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
