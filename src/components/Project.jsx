import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = [
    {
      title: 'Project Portal',
      description: 'The College Project Submission System provides a comprehensive solution by offering a centralized, secure, and user-friendly platform for students, teachers, and administrators for academic project management.',
      tags: ['React', 'Express', 'MongoDB', 'Nodejs', 'JavaScript', 'Tailwind'],
      path: 'Project_Portal.png'
    },
    {
      title: 'Heaven Homes',
      description: 'A UI/UX case study focused on designing an intuitive real estate platform that enhances the user experience for property buyers, sellers, and renters. It explores the creation of an engaging interface with advanced search filters, detailed property views, and interactive features, aiming for a seamless and efficient user journey.',

      tags: ['Figma', 'UI/UX Design', 'Design Research', 'Web Design'],
      path: 'Heaven_Homes.png'
    },
    {
      title: 'Lost & Found',
      description: 'In my First year developed a website addressing the Lost and Found needs of the college community. Created a user-friendly interface to facilitate the reporting and retrieval of lost items, enhancing campus efficiency. Utilized HTML and CSS for the frontend, with Google Forms for backend functionality to enable seamless data capture and communication.',  
      tags: ['HTML', 'JavaScript', 'CSS'],
      path: 'LostAndFound.png'
    }
  ];

  return (
    <div id='project-section' data-scroll data-scroll-speed="0.2" className='mx-2 md:mx-16 lg:mx-32 xl:mx-24 my-4 md:my-8'>
      {projects.map((data, index) => (
        <ProjectCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Project;