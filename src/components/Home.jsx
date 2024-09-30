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
                <Hero />
                <Project />
                <Contact />
            </div>
            <footer className={`flex items-center justify-center ${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`} >
                <h3>This Website is created by Aditya Pawar ©️ 2024</h3>
        </footer>
        </div >
    )
};

export default Home;
