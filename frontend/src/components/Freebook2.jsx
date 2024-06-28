import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Cards1 from './Cards1';
import axios from "axios";

function Freebook2() {
  const [book,setBook] = useState([]);
  useEffect(()=> {
    const getBook=async ()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
       
        const data=res.data.filter((data)=> data.category === "free");
        console.log(data);
        setBook(data);
      }catch(error){
        console.log(error);
      }
    };

    getBook();
  },[]);


   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
     <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
           <h1 className='font-semibold text-xl pb-2'>Free offerd courses</h1>
           <p>
           In today's rapidly evolving educational landscape, free offered courses have emerged 
           as a pivotal resource for learners worldwide.
            These courses, often provided by prestigious universities,
             industry leaders, and online learning platforms, democratize education by breaking down financial barriers and making high-quality learning accessible to everyone.
           </p>
           </div>


       

        <div>
        <Slider {...settings}>
        {book.map((item)=>(
             <Cards1 item={item} key={item.id} />/*ye bat hame dekhna hai ki ye card jo
             hai ham course me bhi use karege to uska ek component bna lenge aur abhi free topics
              parent hai use hame card jo hmara child hai usme data pass karna hai to react props ka use karege
              jo hame dynamically data use karne me madd karta hai  yha par jo hamne card 
              me jo item pass karwaya hai har ek ka unique id se pass karwaya hai*/
          ))}

      </Slider>
        </div>

        </div>
     </>
  )
}

export default Freebook2