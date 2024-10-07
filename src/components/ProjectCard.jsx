import React from 'react';

const ProjectCard = ({ title, description, tags, path, pathMin }) => {
    return (
        <div className="border-2 border-[#A000FF] drop-shadow-xl p-2 md:p-6 mb-5 rounded-md shadow-md text-left flex lg:flex-row flex-col select-none">
            <img src={path} alt='Project Image' className="hidden sm:block md:mb-4 object-fill max-w-max lg:max-w-[25vw] xl:w-[35vw] max-h-[20vh] md:max-h-[40vh]" />
            <img src={pathMin} alt='Project Image' className="sm:hidden md:mb-4 object-cover max-w-max lg:max-w-[25vw] xl:w-[35vw] max-h-[20vh] md:max-h-[40vh] self-center sm:self-auto" />
            <div className='p-6'>
                <h3 className="text-2xl md:text-4xl font-medium mb-4 font-Poppins">{title}</h3>
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
