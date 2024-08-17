import React from 'react'
import Carousel from '../components/Carousel';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Activity from '../components/Activity';
import Message from '../components/Message';

import image1 from '../../../assets/image1.jpeg'
import image2 from '../../../assets/image2.jpeg'
import image3 from '../../../assets/image3.jpeg'

const Home = () => {
const images = [image1, image2, image3]; // Add more images as needed
  return (
    <div id="home" className='pt-6'>
        <Carousel images={images}/>
        <div className=''>
          <div className='sticky top-[2.8rem] bg-sky-700 text-white py-4 px-4 z-10'>We Promise Quality Education</div>
          <div id="aboutus" className='md:pt-[80px] pt-[50px] md:pb-[100px] pb-[50px] md:pr-[100px] px-[50px]'>
              <About />
          </div>
          {/* <Testimonials /> */}
          <div id="activity" >
          <Activity />
          </div>
          <Message />
        </div>
    </div>
  )
}

export default Home