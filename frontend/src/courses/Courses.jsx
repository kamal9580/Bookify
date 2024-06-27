import React from 'react'
import Navbar from '../components/navbar'

import Down from '../components/Down'
import Course from '../components/Course'



function Courses() {
  return (
    <>
        
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
        
        <Down/>
    </>
  )
}

export default Courses