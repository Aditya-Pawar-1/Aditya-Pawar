import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Project from './Project';
import Contact from './Contact';
import LoadingParent from './Loading/LoadingParent'
import { useTheme } from '../Context/ThemeContext';


const Home = () => {

    const { theme } = useTheme();

    return (
        <div className={`${theme} h-full max-w-screen-2xl mx-auto overflow-hidden transition-colors duration-500 ease-in-out `}>
            <div id='home' className={`${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`}>
                <LoadingParent />
                <Navbar />
                <Hero />
                <Project />
                <Contact />
                <footer className={`h-[15vh] flex items-center justify-center`} >
                    <h3 className='text-base sm:text-lg p-2 my-4'>Website created by Aditya Pawar © 2024</h3>
                </footer>
            </div>
        </div >
    )
};

export default Home;
