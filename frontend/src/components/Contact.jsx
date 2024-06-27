import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);

  return (
     <>
        <div className='flex h-screen items-center justify-center'>
        <div className='w-[500px] h-[400px]'>
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link
        to="/"
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    
    <h3 className="font-bold text-xl">Contact us!</h3>
     
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input 
        type="text"
        placeholder='Enter your Name'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Name", { required: true })}
        // {...register("Name", { required: true })}
        />

<br/>
{errors.Name && <span className='text-sm text-red-500'>This field is required</span>}

<br/>
{/* {errors.Name && <span className='text-sm text-red-500'>This field is required</span>} */}

    </div>

    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input 
        type="text"
        placeholder='Enter your Email'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Name", { required: true })}
        />

<br/>
{errors.Name && <span className='text-sm text-red-500'>This field is required</span>}

    </div>

    <div className='mt-4 space-y-2'>
      <span>Message</span>
      <br />
      <input 
        type="text"
        placeholder='type your message'
        className='w-80 px-2 py-8 border rounded-md outline-none'
        {...register("message", { required: true })}
        />

<br/>
{errors.message && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    </form>

    
  </div>
  
  <div className='px-40 justify-around '>
    <Link
    to="/"
    className='bg-blue-500 text-white rounded-md px-3 py-1'>
    Submit</Link>
    </div>
</div>
        </div>

   
     </>
  )
}

export default Contact