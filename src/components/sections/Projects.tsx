import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '@/types';

const Project = ({ id }: SectionProps) => {
  const [initialProps] = useState({ opacity: 0, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Performance Evaluation System',
      description:
        'An evaluation system for performance built with React and Material UI.',
      tech: [
        'React',
        'Material UI',
        'TailwindCSS',
        'Headless Components',
        'Redux',
      ],
      image: '/images/ecommerce.jpg',
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A simple task manager app to organize your daily tasks.',
      tech: ['React', 'Redux', 'Material UI'],
      image: '/images/taskmanager.jpg',
      liveLink: 'https://taskmanager-demo.com',
      githubLink: 'https://github.com/yourusername/taskmanager',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Next.js.',
      tech: ['Next.js', 'Tailwind CSS'],
      image: '/images/portfolio.jpg',
      liveLink: 'https://yourportfolio.com',
      githubLink: 'https://github.com/yourusername/portfolio',
    },
    {
      id: 4,
      title: 'Car Dealership API',
      description: 'A social media app with user authentication and posts.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/socialmedia.jpg',
      liveLink: 'https://socialmedia-demo.com',
      githubLink: 'https://github.com/yourusername/socialmedia',
    },
    {
      id: 5,
      title: 'KPOP Shop API',
      description:
        'A KPOP Shop API for storing kpop merch such as albums, photocards etc. using Clean Architecture',
      tech: ['API', 'NodeJS', 'Express', 'PostgreSQL'],
      image: '/images/weatherapp.jpg',
      githubLink: 'https://github.com/yourusername/weatherapp',
    },
  ];

  return (
    <section
      id='projects'
      className='py-16  text-white relative overflow-hidden'
    >
      <div className='container mx-auto px-4 relative z-10'>
        <h2 className='text-3xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/10 flex flex-col' // Added flex flex-col
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover transition-opacity duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70'></div>
              </div>
              <div className='p-6 flex-grow'>
                <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
                <p className='text-gray-300 mb-6'>{project.description}</p>
                <div className='flex flex-wrap mb-6'>
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className='bg-indigo-700/70 backdrop-blur-sm text-sm text-gray-300 px-3 py-1 rounded-full mr-2 mb-2'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='p-6 flex justify-between items-center mt-auto'>
                {' '}
                {/* Added mt-auto */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-indigo-700/70  hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors duration-300'
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300'
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
