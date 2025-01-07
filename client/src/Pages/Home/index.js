import React from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'

import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Education from './Education'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData}=useSelector((state)=>state.root)
  return (
    <div className='bg-primary'>
       
       {portfolioData && (<>
        <Header/> 
        <div className='home-container px-40 tablet:px-5 flex-col'>
            <Intro/>
            <About/>
           <Education/>
            <Projects/>
            <Courses/>
            <Contact/>
            <Footer/>
            <Sidebar/>
        </div>
       </> )}
    </div>
  )
}

export default Home