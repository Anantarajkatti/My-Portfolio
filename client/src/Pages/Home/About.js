import React from "react";
import SectionTitle from "../../Components/SectionTitle";

function About() {
    const skills=["Javascript","ReactJs","NodeJs","ExpressJs","MongoDb","HTML & CSS"]
  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex items-center w-full tablet:flex-col">
        <div className="h-[50vh] w-1/2 mt-0 tablet:w-full">
          <dotlottie-player
            src="https://lottie.host/5128ba8e-5b97-480e-9b21-48cc30e88596/5zVlDeDSp9.lottie"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
         </div> 
          <div className="flex flex-col gap-5 w-1/2 tablet:w-full">
            <p className="text-2xl font-semibold">
              A motivated full-stack developer skilled in front-end and back-end
              development. Passionate about creating efficient, scalable, and
              user-friendly applications, with a strong foundation in web
              technologies and a commitment to continuous learning and
              problem-solving.
            </p>
            <p className="text-2xl font-semibold">
              A motivated full-stack developer skilled in front-end and back-end
              development. Passionate about creating efficient, scalable, and
              user-friendly applications, with a strong foundation in web
              technologies and a commitment to continuous learning and
              problem-solving.
            </p>
          </div>
       
      </div>

      <div>
        <h1 className="text-tertiary text-2xl font-semibold ">Here are few Technologies i am working with recently</h1>
        <div className="flex flex-wrap gap-5 mt-5">
            {skills.map((skill,index)=>{
              return  <div className="text-tertiary text-xl font-semibold border border-tertiary py-3 px-10 shadow-[6px_5px_3px_rgba(0,0,0,0.2)]">{skill}</div>
            })}
        </div>
      </div>
    </div>
  );
}

export default About;
