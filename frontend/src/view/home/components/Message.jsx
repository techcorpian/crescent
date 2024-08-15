import React from 'react'
import principalimg from '../../../assets/principalimg.jpeg'

const Message = () => {
  return (
    <div className='bg-sky-100 md:p-[5rem] p-[2rem]'>

        <div className='flex md:flex-row flex-col justify-center justify-between gap-6'>
            <div className='text-start'>
                <header className='uppercase md:text-5xl md:text-left text-center text-2xl mb-[3rem] font-extrabold text-sky-800'>Our Founder's Messsage</header>
                <div className='md:text-xl'>
                As the Principal and Founder of the school, I feel honoured and privileged to be part of an educational institution where every stakeholder is a learner and every day is an opportunity to learn and discover.We look at ourselves as a community of learners, where everyone learns including our teachers, parents & staff. It is a privilege for me to work with our students, our staff and our families to make our school the very best it can be.
                </div>
                <div className='text-sky-800 font-bold text-right text-lg mt-6'>- Mrs.Sabura Uduman</div>
            </div>
            <div className=''><img src={principalimg} alt="" className='rounded-[50%] bg-red-400 md:w-[80rem] md:h-full w-[20rem] h-[20rem]'/></div>
            
        </div>
    </div>
  )
}

export default Message