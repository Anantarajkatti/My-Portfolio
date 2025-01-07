import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
// import { education } from "../../resources/Qualification";
import { useSelector } from "react-redux";

function Education() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { educationRes } = portfolioData;
 
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-20 tablet:flex-col ">
        <div className="flex flex-col gap-10 border-l-2 ml-5 border-secondary w-1/3 tablet:flex-row tablet:overflow-x-scroll tablet:w-full">
          {educationRes.map((edu, index) => (
            <div
              className=" cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-2xl px-5 font-semibold ${
                  selectedItemIndex === index
                    ? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#e2cece] py-2"
                    : "text-black"
                }`}
              >
                {edu.course}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">{educationRes[selectedItemIndex].specification}</h1>
          <h1 className="text-[#98547d] text-xl">{educationRes[selectedItemIndex].organization}</h1>
          <h1 className="text-secondary text-4xl">{educationRes[selectedItemIndex].score}</h1>


        </div>
      </div>
    </div>
  );
}

export default Education;