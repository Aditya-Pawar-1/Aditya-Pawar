import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, tags, path, pathMin }) => {
    const { theme } = useTheme();
    return (
        <div className={`drop-shadow-xl mb-10 rounded-2xl shadow-md text-left flex lg:flex-row flex-col select-none mx-5 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#BEBEFF]'}`}>
            {/* big-screen Image */}
            <img 
                src={path} 
                alt='Project Image' 
                className="hidden sm:block object-fill lg:max-w-[40%] lg:min-h-[40vh] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none" 
            />

            {/* small screen Image */}
            <img 
                src={pathMin} 
                alt='Project Image' 
                className="sm:hidden w-full h-full object-cover overflow-hidden rounded-t-2xl" 
            />

            <div className='p-6'>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 font-Poppins">{title}</h3>
                <p className="text-base md:text-lg mb-4 w-[95%] lg:w-[85%] ">
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
