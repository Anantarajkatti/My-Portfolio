import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { CourseList } from '../../resources/Coursedata'
import myCertificate from './myCertificate.jpg'


function Courses() {
      const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
    <SectionTitle title="Courses" />

    <div className="flex py-10 gap-20 tablet:flex-col ">
      <div className="flex flex-col gap-10 border-l-2 ml-5 border-secondary w-1/3 tablet:flex-row tablet:overflow-x-scroll tablet:w-full">
        {CourseList.map((course, index) => (
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
              {course.courseName}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 w-1/2 tablet:w-full">
        <h1 className="text-secondary text-4xl font-semibold">{CourseList[selectedItemIndex].courseName}</h1>
        <h1 className=" text-secondary text-xl">{CourseList[selectedItemIndex].organization}</h1>
        <h1 className=" text-[#98547d] text-xl">{CourseList[selectedItemIndex].description}</h1>
        <img className='border border-secondary border-2 w-1/2 h-[200px]' src={myCertificate} alt='course certificate'/>


      </div>
    </div>
  </div>
  )
}

export default Courses