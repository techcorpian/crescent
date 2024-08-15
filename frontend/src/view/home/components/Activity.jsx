import React from 'react'
import actimg1 from '../../../assets/actimg1.jpeg'
import actimg2 from '../../../assets/actimg2.jpeg'
import actimg3 from '../../../assets/actimg3.jpeg'
import actimg4 from '../../../assets/actimg4.jpeg'
import actimg5 from '../../../assets/actimg5.jpeg'
import actimg6 from '../../../assets/actimg6.jpeg'

const Activity = () => {
  const ActivityItems = [
    {
      img: actimg1,
      content:'Independence Day'
    },
    {
      img: actimg2,
      content:'Republic Day'
    },
    {
      img: actimg6,
      content:'Republic Day'
    },
    {
      img: actimg4,
      content:'Silver Jublee Award'
    },
    {
      img: actimg5,
      content:'Silver Jublee Award'
    },
    {
      img: actimg3,
      content:'Silver Jublee Award Ceremony'
    }
  ]
  return (
    <div className='md:p-[3rem] p-[2rem]'>
        <div className='md:text-6xl text-4xl md:text-left text-center font-extrabold uppercase text-sky-800'>
          Our Activities <div>& Awards</div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-[2rem] my-[50px]">
          {
            ActivityItems.map((data)=>(
              <div className='relative overflow-hidden rounded-2xl group'>
              <img src={data.img} alt="" className="w-full h-full object-cover"/>
              <div className='absolute flex justify-center items-end p-4 inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white'>
                <div className='text-xl'>{data.content}</div>
              </div>
          </div>
            ))
          }
        </div>
    </div>
  )
}

export default Activity
