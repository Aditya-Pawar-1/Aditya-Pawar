import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = [
    {
      title: 'Project Portal 1',
      description: 'The College Project Submission System provides a comprehensive solution by offering a centralized, secure, and user-friendly platform for students, teachers, and administrators for academic project management.',
      tags: ['react', 'Express', 'mongoDB', 'Nodejs', 'javascript', 'tailwind'],
      path: 'P1.png'
    },
    {
      title: 'Project Portal 2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime unde magnam eius, atque assumenda aperiam quam nesciunt, eveniet reiciendis reprehenderit, magni rem! Natus laborum, sint neque unde quos mollitia odio incidunt distinctio eveniet dolorum veritatis?',

      tags: ['react', 'Express', 'mongoDB', 'Nodejs', 'javascript', 'tailwind'],
      path: 'P1.png'
    },
    {
      title: 'Project Portal 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae beatae, dicta adipisci tempore quia sequi optio perspiciatis corrupti provident nulla ea ullam fugit molestiae sapiente nisi alias architecto, quibusdam culpa deleniti similique ab officiis odio fugiat. Autem accusamus cumque pariatur, fugiat, fuga ipsa recusandae nihil reprehenderit, perferendis neque consequatur?',  
      tags: ['react', 'Express', 'mongoDB', 'Nodejs', 'javascript', 'tailwind'],
      path: 'P1.png'
    }
  ];

  return (
    <div className='mx-32 my-20'>
      {projects.map((data, index) => (
        <ProjectCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Project;
