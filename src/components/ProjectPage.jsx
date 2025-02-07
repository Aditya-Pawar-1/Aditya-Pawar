import React from 'react'
import { useTheme } from '../context/ThemeContext';
import Projects from '../data/Projects'
import ProjectCard from './ProjectCard'
import Navbar from './Navbar';
import Footer from './Footer';
const ProjectPage = () => {
    const { theme } = useTheme();
    return (
        <div
            data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
            className={`dark:bg-[#0A0A0A] dark:text-neutral-50 bg-[#F3F3FF] text-neutral-950 max-w-screen-2xl mx-auto overflow-hidden transition-colors duration-500 ease-in-out  select-none`}>

            <Navbar />

            <div data-scroll data-scroll-speed="0.2" className='mx-2 md:mx-16 lg:mx-32 xl:mx-24 my-4'>
                {Projects.map((data, index) => (
                    <ProjectCard key={index} {...data} />
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default ProjectPage