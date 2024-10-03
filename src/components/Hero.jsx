import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (

        <div id='hero-section' className="relative lg:min-h-[80vh] max-w-[100vw] overflow-x-clip">
            <div className="mt-32 ml-4 md:ml-20  lg:my-12 lg:mx-14 flex flex-col items-start justify-center w-[75vw] lg:w-[45vw] h-full lg:absolute select-none">
                <h1 className="text-xl md:text-2xl font-light font-Helvetica mb-4">
                    Hi, I'm Aditya Pawar
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold font-Poppins mb-6">
                    Transforming ideas into interactive web experiences.
                </h2>
                <p className="text-lg md:text-xl w-[80vw] md:w-[60vw] lg:w-[45vw] font-normal mb-12">
                    A passionate <span className="text-[#CD50FD]">UI/UX Designer</span> and <span className="text-[#CD50FD]">Full-Stack MERN Developer</span> with a keen eye for crafting intuitive, user-friendly digital experiences. With expertise in Figma, JavaScript, React, Node.js, and MongoDB, I specialize in creating seamless interfaces and optimizing user journeys. I am driven by innovation and committed to designing fluid, scalable solutions for modern digital challenges.
                </p>
            </div>
            <Spline className='hidden lg:block ml-[40vw] max-w-[70vw] max-h-[70vh] overflow-x-clip' scene="https://prod.spline.design/Kx3KMLU9LRJ4u9El/scene.splinecode" />

        </div>

    )
}

export default Hero