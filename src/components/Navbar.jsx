import React, { useRef, useContext } from 'react';
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import gsap from 'gsap';
import { useTheme} from '../Context/ThemeContext';


const Navbar = () => {

    const { theme, setTheme } =  useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const MenuPageref = useRef(null);

    const handleOpen = () => {
        console.log("handleOpen");

        let tl = gsap.timeline();
        tl.to(MenuPageref.current, {
            right: "0%",
            delay: 0.2,
            duration: 0.5,
        });
    };

    const handleClose = () => {
        let tl = gsap.timeline();
        tl.to(MenuPageref.current, {
            right: "-100%",
            delay: 0.2,
            duration: 0.5,
        });
    };

    const handleResume = () => {
        window.open('https://drive.google.com/file/d/1CCQc2CU_NW_v-4X6SdOZY1Cbs_V__-ie/view', '_blank');
    };

    return (
        <nav className={`w-full max-w-screen-2xl mx-auto z-[99] fixed top-0 left-0 px-2 pt-6 pb-2 lg:static ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`}>
            <div className="flex justify-between items-center md:mx-14 lg:mb-16 ">
                <img className='w-12' src="Logo.svg" alt="Logo" />
                <div className="flex items-center gap-4 md:gap-8 font-Poppins font-semibold text-lg">
                    <div className='hidden lg:block space-x-8'>
                        <a href="/">Home</a>
                        <a href="/projects">Project</a>
                        <a href="/contact">Contact</a>
                    </div>

                    <button onClick={()=>toggleTheme()} className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border rounded-full border-none text-white bg-gradient-to-r from-[#8E05C2] to-[#CD50FD]`}>
                        {theme === 'dark' ? <BsSun size={"1.3em"} /> : <FaMoon size={"1.3em"} />}
                    </button>

                    <button onClick={handleResume} className="hidden lg:block bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white text-base font-medium lg:font-semibold px-4 py-2 rounded">
                        Resume
                    </button>

                    <button onClick={handleOpen} className='lg:hidden '>
                        <IoMenuSharp className='text-3xl' />
                    </button>
                </div>
            </div>

            <div ref={MenuPageref} className={`h-screen w-screen top-0 right-[-100%] fixed lg:hidden ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`}>
                <button onClick={handleClose} className='absolute top-10 right-5 text-4xl'>
                    <IoClose />
                </button>

                <div className="h-full container flex flex-col items-center my-24">
                    <img className='w-24' src="Logo.svg" alt="Logo" />
                    <div onClick={handleClose} className='space-y-4 items-center flex flex-col mt-24'>
                        <a href="/">Home</a>
                        <a href="/projects">Project</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <button onClick={handleResume} className="bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white text-base font-medium lg:font-semibold px-4 py-2 rounded mt-12">
                        Resume
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
