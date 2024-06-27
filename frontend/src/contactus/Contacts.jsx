import React from 'react'
import Navbar from '../components/navbar'
import Down from '../components/Down'
import Contact from '../components/Contact'

function Contacts() {
  return (
      <>
        <Navbar/>
       <div  className='min-h-screen'>

       <Contact/>
       </div>
       

        <Down/>
      </>
  )
}

export default Contacts