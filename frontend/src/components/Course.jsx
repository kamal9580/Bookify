// we define routes that if we want to go to course/about different different pages

import React from 'react'
import list from '../../public/list.json' 
import Cards1 from './Cards1'
import {Link} from 'react-router-dom'

function Course() {
  return (
    
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 iems-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
            We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-12'>
             The "Courses" project is an innovative web application designed to provide users with a comprehensive platform for exploring and accessing various educational courses. Built using modern web development technologies like React and React Router,
             the project features a user-friendly interface that facilitates seamless navigation.
            </p>

           <Link to="/">
           <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
           Back</button>
           </Link>
        </div>
        {/*now we have to render the data*/}

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          
          
            {list.map((item)=>(
                <Cards1 key={item.id} item={item}/>
            ))}
          
        </div>


        </div>
    </>
  )
}

export default Course