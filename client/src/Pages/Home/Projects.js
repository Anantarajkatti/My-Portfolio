import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
// import { projectList } from '../../resources/Projectdata'
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
  const { projectRes } = portfolioData;
  return (
    <div>
    <SectionTitle title="Projects" />

    <div className="flex py-10 gap-20 tablet:flex-col ">
      <div className="flex flex-col gap-10 border-l-2 ml-5 border-secondary w-1/3 tablet:flex-row tablet:overflow-x-scroll tablet:w-full">
        {projectRes.map((project, index) => (
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
              {project.projectName}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 w-1/2">
        <h1 className="text-secondary text-4xl font-semibold">{projectRes[selectedItemIndex].projectName}</h1>
        <h1 className="text-secondary text-2xl">{projectRes[selectedItemIndex].link}</h1>
        <h1 className="text-[#98547d] text-xl">{projectRes[selectedItemIndex].description}</h1>
        {/* <h1 className="text-secondary text-4xl">{projectList[selectedItemIndex].}</h1> */}


      </div>
    </div>
  </div>
  )
}

export default Projects