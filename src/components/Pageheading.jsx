import { motion } from 'framer-motion';
import React from 'react'
import { GoNorthStar } from "react-icons/go";
import Spline from '@splinetool/react-spline';


const Pageheading = ({ title, t1, t2 }) => {
    return (
        <div className='relative lg:my-12 z-1'>
            <div className='absolute hidden lg:block bg-[#1A1A3D]'>
                <Spline
                    className='z-0 ml-20 scale-115'
                    scene="https://prod.spline.design/SDH5mojxyQd5lZ57/scene.splinecode"
                />
            </div>

            <motion.div
                data-scroll
                data-scroll-speed="0.2"
                className="container hidden lg:block text-white border-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 1, delay: 0.2 }}
            >
                <div className='projectHeading w-[100vw] md:h-[40vh] lg:h-screen flex flex-col items-center justify-between p-12 lg:p-28'>

                    <div className='w-[75vw] h-1 '></div>
                    <motion.h3
                        className=' inline-block text-center bg-clip-text p-4 font-JuliusSansOne text-6xl lg:text-[12rem]'
                    >{title}</motion.h3>
                    <div className='w-[75vw] h-1 '></div>
                    {t1 && t2 && <div className='w-full lg:-mt-12 flex items-start justify-between'>
                        <h2 className='border-2 px-8 py-2 rounded-full inline-block text-2xl'>{t1}</h2>
                        <h2 className='border-2 px-8 py-2 rounded-full inline-block text-2xl'>{t2}</h2>
                    </div>}
                </div>
            </motion.div>


            <div className='lg:hidden bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] bg-clip-text flex items-center justify-center w-screen text-5xl gap-5 pt-4 pb-12 px-4'>
                <GoNorthStar className='text-[#8E05C2]' />
                <h2 className='text-transparent md:text-8xl text-center font-JuliusSansOne'>
                    {title}
                </h2>
                <GoNorthStar className='text-[#8E05C2]' />
            </div>
        </div>
    )
}

export default Pageheading