import React from 'react'
import Home from './home/Home';

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contacts from './contactus/Contacts';







function App() {
  return (
    <>
    
   {/* <Home />
    <Course/> */}
   <div className=' dark:bg-slate-900 dark:text-white '>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Routes>
     
   </div>
     
    </>
  );
}

export default App 