import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminEducation() {
    const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData)
  return (
   <div>
     <div>AdminEducation</div>
     <div className='cardContainer grid grid-cols-4 gap-10 tablet:grid-cols-1'>
        {portfolioData.educationRes.map((education)=>(
            <div className='card shadow border '>
                <h1 className='bg-secondary px-5 py-3 text-2xl font font-semibold'>  {education.course}</h1>
                <h1 className='px-5 py-2 font-semibold'>{education.organization}</h1>
                <h1 className='px-5 py-2 '>{education.specification}</h1>
                <h1 className='px-5 py-2 text-2xl text-green-600 font-semibold'> {education.score}</h1>
                
        </div>
        ))}
     </div>
   </div>
  )
}

export default AdminEducation