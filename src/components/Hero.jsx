import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = ({ theme }) => {
    return (

        <div id='hero-section' className="relative mt-48 sm:m-0 min-h-[30vh] md:min-h-[60vh] xl:min-h-screen max-w-[100vw] overflow-x-clip">
            <div className="ml-4 md:ml-20 lg:my-12 lg:mx-14 flex flex-col items-start justify-end lg:justify-center w-[75vw] lg:w-[45vw] h-[80%] md:h-[90%] md:absolute select-none">
                <h1 className="text-xl md:text-2xl font-light font-Helvetica mb-4">
                    Hi, I'm Aditya Pawar
                </h1>
                <h2 className={`text-2xl md:text-4xl lg:text-6xl font-bold font-Poppins ${theme === 'dark'? 'text-neutral-200': 'text-neutral-80000'} mb-6`}>
                    Transforming ideas into interactive web experiences.
                </h2>
                <p className="text-base md:text-xl w-[80vw] md:w-[60vw] lg:w-[45vw] font-normal mb-12">
                    A passionate <span className={`${theme === 'dark' ? 'text-[#CD50FD]' : 'text-[#8E05C2]'}`}>UI/UX Designer</span> and <span className={`${theme === 'dark' ? 'text-[#CD50FD]' : 'text-[#8E05C2]'}`}>Full-Stack MERN Developer</span> with a keen eye for crafting intuitive, user-friendly digital experiences. With expertise in Figma, JavaScript, React, Node.js, and MongoDB, I specialize in creating seamless interfaces and optimizing user journeys. I am driven by innovation and committed to designing fluid, scalable solutions for modern digital challenges.
                </p>
            </div>
            <Spline className='hidden lg:block ml-[40vw] max-w-[70vw] max-h-[70vh] overflow-x-clip' scene="https://prod.spline.design/Kx3KMLU9LRJ4u9El/scene.splinecode" />

        </div>

    )
}

export default Hero