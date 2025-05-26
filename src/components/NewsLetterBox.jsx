import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

  return (
    <div className='text-center pb-20'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 10% Off</p>
        <p className='text-gray-400 mt-3'>Join our style circle – be the first to know about new arrivals, exclusive offers, and fashion tips tailored just for you.</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox