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
        <div data-scroll data-scroll-speed="0.4" className='grid grid-cols-3 mx-48 gap-4 text-neutral-900'>
            <div className='bg-[#0077FF] pt-12 pl-6 rounded-xl h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out '>
                <h3 className='font-semibold font-Poppins text-5xl text-neutral-50'>Web Developer</h3>
            </div>
            <div onClick={() => handleClick('github')} className="col-span-2  pt-4 pl-24 rounded-xl h-[30vh] bg-[#FF0000] hover:scale-95 transition ease-in-out  duration-[1s]">
                <h6 className='font-Poppins pl-4 mb-4 font-semibold text-xl'>Explore Development <br /> Journey On</h6>
                <div className='flex gap-5 font-Poppins text-8xl'>
                    <h2>Github</h2>
                    <GoLinkExternal />
                </div>
            </div>

            <div onClick={() => handleClick('behance')} className="col-span-2 pt-12 pl-14 rounded-xl h-[30vh] bg-[#2ecf0e] transition ease-in-out hover:scale-95 duration-[1s]">
                <h6 className='font-Poppins pl-4 mb-4 font-semibold text-xl'>Experience Designs On</h6>
                <div className='flex gap-5 font-Poppins text-8xl'>
                    <h2>Behance</h2>
                    <GoLinkExternal />
                </div>
            </div>
            <div className="bg-[#FF9500] pt-24 pr-6 rounded-xl h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out">
                <h3 className='text-right font-semibold font-Poppins text-5xl text-neutral-50'>UI/UX Designer</h3>
            </div>

            <div className='bg-[#FF0033] rounded-xl h-[30vh] hover:scale-105 duration-[1s] transition ease-in-out'>
                <img className='pl-4 pt-6 scale-125' src="Arrow.svg" alt="Arrow Pointing towards Linkedin" />
            </div>
            <div onClick={() => handleClick('Linkedin')} className="col-span-2 pt-12 pl-16 rounded-xl h-[30vh] bg-[#008CD9] transition ease-in-out hover:scale-95 duration-[1s]">
                <h6 className='font-Poppins pl-4 mb-4 font-semibold text-xl'>Connect With Me On</h6>
                <div className='flex gap-5 font-Poppins text-8xl'>
                    <h2>Linkedin</h2>
                    <GoLinkExternal />
                </div>
            </div>
        </div>
    )
}

export default Contact