import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ProjectCard = ({ title, description, tags, path, live_link, Github, Behance }) => {
    const { theme } = useTheme();
    const [showCard, setShowCard] = useState(false);
    const handleClick = () => {
        if (window.innerWidth < 1024)
            setShowCard(!showCard);
    }

    return (
        <div
            data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
            className="relative overflow-hidden drop-shadow-xl mb-10 rounded-2xl shadow-md text-left flex lg:flex-row flex-col select-none mx-5 dark:bg-[#1E1E1E] bg-[#BEBEFF]"
            onClick={handleClick}
        >
            <motion.div
                className={`absolute w-full h-full dark:bg-[#1E1E1E] bg-[#BEBEFF]`}
                initial={{ opacity: 0, }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: showCard ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="flex flex-col w-full h-full sm:flex-row relative">
                    <img
                        // src="/Project_Pattern.svg"
                        src={path}
                    alt="Pattern image"
                    className="object-top object-contain"
                    />
                    <section className="Links space-y-4 absolute bottom-10 right-10 md:right-16 md:bottom-24">
                        {live_link && (
                            <a
                                href={live_link}
                                target="_blank"
                                className="dark:bg-[#FEFEFF] bg-[#1E1E1E] px-6 py-3 dark:text-neutral-950 text-neutral-50 font-normal rounded-full font-Poppins flex gap-2 justify-center"
                            >
                                Live Project
                                <img src={`/Straight Arrow ${theme}.svg`} alt="Arrow Image" />
                            </a>
                        )}
                        {Github && (
                            <a
                                href={Github}
                                target="_blank"
                                className="dark:bg-[#FEFEFF] bg-[#1E1E1E] px-6 py-3 dark:text-neutral-950 text-neutral-50 font-normal rounded-full font-Poppins flex gap-2 justify-center"
                            >
                                Github
                                <img src={`/Straight Arrow ${theme}.svg`} alt="Arrow Image" />
                            </a>
                        )}
                        {Behance && (
                            <a
                                href={Behance}
                                target="_blank"
                                className="dark:bg-[#FEFEFF] bg-[#1E1E1E] px-6 py-3 dark:text-neutral-950 text-neutral-50 font-normal rounded-full font-Poppins flex gap-2 justify-center"
                            >
                                Behance
                                <img src={`/Straight Arrow ${theme}.svg`} alt="Arrow Image" />
                            </a>
                        )}
                    </section>
                </section>
            </motion.div>

            <img
                src={path}
                alt="Project Image"
                className="w-full h-full object-cover lg:object-fill lg:max-w-[40%] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />

            <div className="p-6">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 font-Poppins">{title}</h3>
                <p className="text-base md:text-lg mb-4 w-[95%] lg:w-[85%]">
                    {description}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tech, index) => (
                        <span key={index} className="bg-[#ae28fb] text-white md:text-lg px-4 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
