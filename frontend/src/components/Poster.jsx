import React from 'react'


function Poster() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        {/*here this default flex is col for mobile and for md or upper than md we have row
        and w-full by default and md is half */}
      <div className='w-full order-2 md:order-1  md:w-1/2 mt-12 md:mt-30'>{/*this is for main din*/}
        <div className='space-y-12'>
           <h1 className='text-4xl font-bold'>
              Hello,Welcomes here to learn something 
               <span className='text-blue-500'> new everyday!!!</span> 
            </h1>
             <p className='text-xl'>
              Welcome to The Bookify, your neighborhood's beloved bookstore where the world of literature comes alive.
             The Bookify is your destination. Join us for book signings, author readings, and literary discussions, and 
             become part of a community that celebrates the joy of reading and the magic of books.
             </p>
             {/* this is for email box*/}
             <label className="input input-bordered flex items-center gap-2">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             className="h-4 w-4 opacity-70">
            <path
             d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
             d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
         </svg>
          <input type="text" className="grow" placeholder="Email" />
          </label>
          
         </div>

         <button className="btn mt-6 btn-active btn-secondary">Secondary</button>
          
             
         
        </div>
        <div className='order-1 w-full md:w-1/2 mx-auto md:px-10 px-2 my-10'>
          <img src="poster1.jpg" className='w-92 h-92' alt="Image"/>
        </div>
     </div>

    </>
  );
}

export default Poster;