import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const handleClick = (p) => {
    switch (p) {
        case 'github': window.open('https://github.com/Aditya-Pawar-1', '_blank');
            break;
        case 'behance': window.open('https://www.behance.net/adityapawar49', '_blank');
            break;
        case 'Linkedin': window.open('https://linkedin.com/in/aditya-pawar-dev', '_blank');
            break;
    }

};

const Contact = () => {
    return (
        <div id='contact-section' data-scroll data-scroll-speed="0.4" className='grid grid-cols-3 mx-4 md:mx-12 lg:mx-14 xl:m-32 gap-4 text-neutral-900 select-none '>

            <div className='bg-[#0077FF] pt-10 md:pt-12 pl-2 md:pl-6 rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out hidden md:block'>
                <h3 className='font-semibold font-Poppins text-xl md:text-3xl lg:text-5xl text-neutral-50'>Web <br /> Developer</h3>
            </div>
            <div onClick={() => handleClick('github')} className="col-span-3 md:col-span-2 pt-4 pl-12 pr-4 lg:pl-24 rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] bg-[#FF0000] hover:scale-95 transition ease-in-out  duration-[1s] cursor-pointer">
                <h6 className='font-Poppins lg:pl-4 mb-4 lg:font-semibold text-base  md:text-xl'>Explore Development <br /> Journey On</h6>
                <div className='flex gap-5 font-Poppins text-5xl md:text-7xl lg:text-8xl'>
                    <h2>Github</h2>
                    <GoLinkExternal />
                </div>
            </div>

            <div onClick={() => handleClick('behance')} className="col-span-3 md:col-span-2 pt-10 lg:pt-12 pl-8 lg:pl-14 pr-4 rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] bg-[#2ecf0e] transition ease-in-out hover:scale-95 duration-[1s] cursor-pointer">
                <h6 className='font-Poppins lg:pl-4 mb-4 lg:font-semibold text-base  md:text-xl'>Experience Designs On</h6>
                <div className='flex gap-5 font-Poppins text-5xl md:text-7xl lg:text-8xl'>
                    <h2>Behance</h2>
                    <GoLinkExternal />
                </div>
            </div>
            <div className="bg-[#FF9500] pt-20 md:pt-24 pr-2 md:pr-6 rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out hidden md:block">
                <h3 className='text-right font-semibold font-Poppins text-xl md:text-3xl lg:text-5xl text-neutral-50'>UI/UX <br /> Designer</h3>
            </div>

            <div className='bg-[#FF0033] rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out hidden md:block'>
                <img className='pl-4 pt-6 scale-125' src="Arrow.svg" alt="Arrow Pointing towards Linkedin" />
            </div>
            <div onClick={() => handleClick('Linkedin')} className="col-span-3 md:col-span-2 pt-10 lg:pt-12 pl-12 lg:pl-16 pr-4 rounded-xl h-[20vh] md:h-[25vh] lg:h-[30vh] bg-[#008CD9] transition ease-in-out hover:scale-95 duration-[1s] cursor-pointer">
                <h6 className='font-Poppins lg:pl-4 mb-4 lg:font-semibold text-base  md:text-xl'>Connect With Me On</h6>
                <div className='flex gap-5 font-Poppins text-5xl md:text-7xl lg:text-8xl'>
                    <h2>Linkedin</h2>
                    <GoLinkExternal />
                </div>
            </div>
        </div>
    )
}

export default Contact