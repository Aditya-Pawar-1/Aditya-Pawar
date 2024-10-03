import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Project from './Project';
import Contact from './Contact';

const Home = () => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`${theme} min-h-screen max-w-[100vw] transition-colors duration-500 ease-in-out `}>
            <div id='home' className={`${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'} p-6`}>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <Hero theme={theme} />
                <Project />
                <Contact />
            </div>
            <footer className={`h-[15vh] flex items-center justify-center ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`} >
                <h3 className='text-lg p-2 mb-4'>Website created by Aditya Pawar © 2024.</h3>
            </footer>
        </div >
    )
};

export default Home;
