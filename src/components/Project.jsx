import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import Pageheading from './Pageheading';
import { useTheme } from '../Context/ThemeContext';


const Project = () => {

  const { theme } = useTheme();
  
  const projects = [
    {
      title: 'Project Portal',
      description: 'The College Project Submission System provides a comprehensive solution by offering a centralized, secure, and user-friendly platform for students, teachers, and administrators for academic project management.',
      tags: ['React', 'Express', 'MongoDB', 'Nodejs', 'JavaScript', 'Tailwind'],
      path: 'Project_Portal.png',
      pathMin: 'Project_Portal-min.png'
    },
    {
      title: 'Heaven Homes',
      description: 'A UI/UX case study focused on designing an intuitive real estate platform that enhances the user experience for property buyers, sellers, and renters. It explores the creation of an engaging interface with advanced search filters, detailed property views, and interactive features, aiming for a seamless and efficient user journey.',

      tags: ['Figma', 'UI/UX Design', 'Design Research', 'Web Design'],
      path: 'Heaven_Homes.png',
      pathMin: 'Heaven_Homes-min.png'
    },
    {
      title: 'Lost & Found',
      description: 'In my First year developed a website addressing the Lost and Found needs of the college community. Created a user-friendly interface to facilitate the reporting and retrieval of lost items, enhancing campus efficiency.',
      tags: ['HTML', 'JavaScript', 'CSS'],
      path: 'LostAndFound.png',
      pathMin: 'LostAndFound-min.png'
    }
  ];

  return (
    <div id='project-section' className='overflow-x-clip'>
      <div>
        <Pageheading title={"Projects"} t1={"Design"} t2={"Development"} theme={theme} />
      </div>

      <div data-scroll data-scroll-speed="0.2" className='mx-2 md:mx-16 lg:mx-32 xl:mx-24 my-4'>
        {projects.map((data, index) => (
          <ProjectCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Project;