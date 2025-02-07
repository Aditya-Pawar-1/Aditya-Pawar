import { useTheme } from '../context/ThemeContext';
import Pageheading from './Pageheading';
import ProjectCard from './ProjectCard';
import Projects from '../data/Projects'

const Project = () => {

    const { theme } = useTheme();
    return (
        <div>
            <div>
                <Pageheading title={"Projects"} t1={"Design"} t2={"Development"} theme={theme} />
            </div>

            <div data-scroll data-scroll-speed="0.2" className='mx-2 md:mx-16 lg:mx-32 xl:mx-24 my-4'>
                {Projects.map((data, index) => (
                    index <= 2 && <ProjectCard key={index} {...data} />
                ))}

                <div className='mx-2 md:mx-16 lg:mx-32 xl:mx-24 flex justify-end'>
                    <a href="/projects" className="dark:bg-[#FEFEFF] bg-[#1E1E1E] px-6 py-3 dark:text-neutral-950 text-neutral-50 font-normal rounded-full font-Poppins flex gap-2 justify-center w-fit">
                        View More
                        <img src={`/Straight Arrow ${theme}.svg`} alt="Arrow Image" />
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default Project