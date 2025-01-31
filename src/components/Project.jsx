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
                    <ProjectCard key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default Project