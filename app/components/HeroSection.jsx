"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

    


const HeroSection = () => {
  return (
    <section className="lg:py-16 sm:mx-18 ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-center">
                    <span className='block text-transparent bg-clip-text bg-gradient-to-r from-[#85C1E9] to-[#2874A6]'>
                        Hello, I'm{" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                        'Rohan Babbar',
                        1000, 
                        'Web Designer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                    </h1>
                <p className='text-white text-s lg:text-xl mt-4 max-w-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, cum nulla. Fugiat nulla dolore recusandae rem adipisci sapiente obcaecati quia, sequi praesentium aspernatur. Laudantium ea animi ipsum debitis fuga id?</p>
                <div>
                    <button className='py-3 px-6 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#02AABD] to-[#00CDAC] hover:bg-slate-200 text-[#301934]'>Hire Me!</button>
                    <button className='py-3 px-6 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
                <div className="h-[250px] w-[250px] rounded-full relative bg-[#181818]   ">
                    <Image  src="/images/anim-removebg-preview.png" width={400} height={400} />
                </div>
            </div>
        </div>  
    </section>
  )
}

export default HeroSection
