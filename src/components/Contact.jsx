import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import Pageheading from './Pageheading';
import { useTheme } from '../Context/ThemeContext';
import Arrow from '../../public/Arrow.svg'

const handleClick = (platform) => {
    switch (platform.toLowerCase()) {
        case 'github':
            window.open(`https://github.com/Aditya-Pawar-1`, '_blank');
            break;
        case 'behance':
            window.open(`https://www.behance.net/adityapawar49`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://linkedin.com/in/aditya-pawar-dev`, '_blank');
            break;
        default:
            console.error('Invalid platform specified');
    }
};

const Contact = () => {
    const { theme } = useTheme();
    const cardClasses = 'rounded-xl h-[20vh] lg:h-[30vh] transition ease-in-out duration-[1s]';

    return (
        <>
            <div id='contact-section'>
                <Pageheading title={"Expolre Journey"} t1={"Design"} t2={"Development"} theme={theme} />
            </div>

            <div

                // data-scroll
                // data-scroll-speed="0.4"
                className='grid grid-cols-1 md:grid-cols-3 grid-rows-3 mx-6 md:mx-16 lg:mx-32 gap-4 text-neutral-900 select-none'
            >

                <div className='hidden md:block bg-[#0077FF] p-12 pl-6  hover:scale-105 rounded-xl transition ease-in-out duration-[1s] '>
                    <h3 className='font-semibold font-Poppins text-xl md:text-3xl lg:text-5xl text-neutral-50'>
                        Web <br />  Developer
                    </h3>
                </div>

                <div
                    onClick={() => handleClick('github')}
                    className="col-span-1 md:col-span-2 bg-[#FF0000] hover:scale-95 cursor-pointer transition ease-in-out duration-[1s] py-4  md:py-14 pl-12 pr-4  rounded-xl "

                >
                    <h6 className='font-Poppins font-semibold text-base lg:text-lg'>
                        Explore Development <br /> Journey On
                    </h6>
                    <div className='flex gap-2 sm:gap-5 font-Poppins text-6xl sm:text-5xl md:text-7xl lg:text-8xl'>
                        <h2>Github</h2>
                        <GoLinkExternal />
                    </div>
                </div>

                <div
                    onClick={() => handleClick('behance')}
                    className="col-span-1 md:col-span-2 bg-[#2ecf0e] hover:scale-95 cursor-pointer transition ease-in-out duration-[1s] py-4  md:py-14  pl-12 pr-4  rounded-xl "

                >
                    <h6 className='font-Poppins font-semibold text-base lg:text-lg mb-4'>
                        Experience Designs On
                    </h6>
                    <div className='flex gap-2 sm:gap-5 font-Poppins text-6xl sm:text-5xl md:text-7xl lg:text-8xl'>
                        <h2>behance</h2>
                        <GoLinkExternal />
                    </div>
                </div>

                <div className='hidden md:block relative bg-[#FF9500] hover:scale-105 rounded-xl transition ease-in-out duration-[1s] '>
                    <h3 className='absolute bottom-10 right-10 font-semibold font-Poppins text-xl md:text-3xl lg:text-5xl text-neutral-50'>
                        UI/UX <br /> Designer
                    </h3>
                </div>

                <div className='hidden md:block  bg-[#FF0033] p-4 pl-6  hover:scale-105 rounded-xl transition ease-in-out duration-[1s] '>
                    <img className='pl-4 pt-6 lg:scale-110 md:scale-150 md:pt-10 md:pl-2' src={Arrow} alt='Arrow Pointing towards Linkedin' />
                </div>

                <div
                    onClick={() => handleClick('linkedin')}
                    className="col-span-1 md:col-span-2 bg-[#008CD9] hover:scale-95 cursor-pointer transition ease-in-out duration-[1s] py-4 md:py-14 pl-12 pr-4 rounded-xl "

                >
                    <h6 className='font-Poppins font-semibold text-base lg:text-lg'>
                        Connect With Me On
                    </h6>
                    <div className='flex gap-2 sm:gap-5 font-Poppins text-6xl sm:text-5xl md:text-7xl lg:text-8xl'>
                        <h2>Linkedin</h2>
                        <GoLinkExternal />
                    </div>
                </div>

            </div >
        </>
    );
};

export default Contact;