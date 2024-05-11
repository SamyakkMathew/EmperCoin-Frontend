import React from 'react'
import img1 from '../images/Sam.png'
import img2 from '../images/adarsh.png'

const Team = () => {
  return (
    <section className="bg-backgroundmain">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-color4 capitalize lg:text-3xl">Our Team</h1>

        <p className="max-w-2xl mx-auto my-6  text-color4 text-justify">
          A team of dynamic individuals driven by a shared passion for revolutionizing the entrepreneurial landscape.
          Together, we are on a mission to connect visionaries with the fuel they need to turn dreams into reality

        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl ">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img2} alt="" />

            <h1 className="mt-4 text-2xl font-semibold text-color4 capitalize  group-hover:text-white">Adarsh Pandey</h1>

            

          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img1} alt="" />

            <h1 className="mt-4 text-2xl font-semibold text-color4 capitalize  group-hover:text-white">Samyakk Mathew</h1>

            


          </div>





        </div>
      </div>
    </section>
  )
}

export default Team
