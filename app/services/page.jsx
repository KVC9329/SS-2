import Navbar from '@/Components/Navbar'
import Services from '@/Components/Footer'
import React from 'react'

const services = () => {
  return (
    <>
      <Navbar/>
      <div className='h-full bg-gradient-to-b from-white to-blue-100 mx-5'>
          <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-5 text-center font-semibold my-24">
              We offer these, <span className="sm:text-5xl text-4xl py-5 text-center font-semibold underline bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          {/* <Services/> */}
      </div>
    </>
  )
}

export default services