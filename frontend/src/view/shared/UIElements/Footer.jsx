import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='bg-sky-800 p-[3rem]'>
        <div className='mb-6 text-4xl font-extrabold md:text-right text-white text-center'>CONTACT US
        <div className='md:text-xl text-sm font-light text-white'>Contact Us Through Email or Phone Number</div>
        </div>
        
        <div class="flex justify-between md:flex-row flex-col ">
            <div>
                <header className='text-white text-2xl font-light md:text-left text-center'><span className='md:text-4xl text-2xl font-bold'>Crescent Nursery<br/> And Primary School</span> <br/>Kandachipuram - 605701</header>
            </div>
            <div>
                <header className='text-white md:text-right text-center'>Call Us @ +91 91765 22121 </header>
            </div>
        </div>
    </div>
  )
}

export default Footer