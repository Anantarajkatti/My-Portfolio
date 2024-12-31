import React from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'
import Qualifications from './Qualifications'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='bg-primary'>
        <Header/>
        <div className='home-container px-40 tablet:px-5 flex-col'>
            <Intro/>
            <About/>
            <Qualifications/>
            <Projects/>
            <Courses/>
            <Contact/>
            <Footer/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Home