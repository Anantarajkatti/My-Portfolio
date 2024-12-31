import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { myQualification } from "../../resources/Qualification";

function Qualifications() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-20 tablet:flex-col ">
        <div className="flex flex-col gap-10 border-l-2 ml-5 border-secondary w-1/3 tablet:flex-row tablet:overflow-x-scroll tablet:w-full">
          {myQualification.map((qualifications, index) => (
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
                {qualifications.course}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">{myQualification[selectedItemIndex].specification}</h1>
          <h1 className="text-[#98547d] text-xl">{myQualification[selectedItemIndex].organization}</h1>
          <h1 className="text-secondary text-4xl">{myQualification[selectedItemIndex].score}</h1>


        </div>
      </div>
    </div>
  );
}

export default Qualifications;
