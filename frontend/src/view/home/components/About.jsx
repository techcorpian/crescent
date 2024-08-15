import React from 'react'
import aboutimg from '../../../assets/aboutimg.jpeg'

const About = () => {
    return (
      <div className="flex md:flex-row flex-col md:justify-center items-center gap-5">
          <div className="text-center">
              <img src={aboutimg} alt="About Us" className="rounded-[50%] bg-red-400 object-cover md:w-[80rem] md:h-full w-[15rem] h-[15rem]" />
          </div>
          <div className="text-center md:text-right">
              <header className='mb-6 text-6xl font-extrabold'>ABOUT</header>
              <div className="text-lg">
                  "To create a thriving educational hub that empowers every student to reach their full potential, fosters a culture of lifelong learning, and serves as a catalyst for positive change in our rural community. In our school, we aim to help every child become their best selves, learn continuously, and make our community even better."
              </div>
              <div className="mt-6 py-2 px-6 bg-[#72603C] text-white rounded-full md:float-right border border-[#72603C] hover:bg-cyan-100 hover:text-black hover:border-[#72603C] hover:transition-all hover:duration-300 cursor-pointer">Read More</div>
          </div>
      </div>
    )
}

export default About
