import React from 'react';

const ProjectCard = ({ title, description, tags, path }) => {
    return (
        <div className="border-2 border-[#A000FF] p-6 mb-5 rounded-md shadow-md text-left flex">
            <img src={path} alt='Project Image' className="mb-4 object-scale-down w-[25vw] max-h-[40vh]" />
            <div className='p-6'>
                <h3 className="text-4xl font-medium mb-4 font-[Poppins] ">{title}</h3>
                <p className="text-xl mb-4">
                    {description}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tech, index) => (
                        <span key={index} className="bg-[#ae28fb] text-white text-lg px-4 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
