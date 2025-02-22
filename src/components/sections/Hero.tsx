'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';
import { SectionProps } from '@/types';
import TopologyBackground from './Topo'; // Adjust the path
const Hero = ({ id }: SectionProps) => {
  const { scrollYProgress } = useScroll();

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY2 = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const [isAnimationComplete, setIsAnimationComplete] = useState({
    first: false,
    second: false,
  });

  const handleAnimationComplete = (key: 'first' | 'second') => {
    setIsAnimationComplete(prevState => ({
      ...prevState,
      [key]: true,
    }));
  };

  const isBothAnimationComplete =
    isAnimationComplete.first && isAnimationComplete.second;

  const FramerImage = motion(Image);

  return (
    <section
      id={id}
      className='flex flex-col md:flex-row justify-center items-center h-screen'
    >
      {/* Left side: Avatar with parallax effect */}
      <motion.div
        className='w-full md:w-1/2 flex justify-center md:justify-end p-8 md:p-24'
        style={{ y: avatarY }}
      >
        <div className='flex justify-end w-3/4 md:w-full max-w-full h-auto'>
          <FramerImage
            src='/assets/herzlia.jpg'
            alt='Portfolio Avatar'
            className='object-cover rounded-full'
            width={500}
            height={500}
            priority
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Right side: Text Reveal with parallax effect */}
      <div className='w-full h-auto md:h-full md:w-1/2 flex flex-col gap-2 justify-center items-center sm:items-start p-4 md:p-8'>
        <motion.div
          className='text-3xl sm:text-6xl md:text-7xl font-bold mt-4 text-white' // Increased font size and weight
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16 }}
          onAnimationComplete={() => handleAnimationComplete('first')}
          style={{ y: textY1 }}
        >
          Hello, I&apos;m Herzlia Jane Barangan
        </motion.div>
        <motion.div
          className='text-lg md:text-2xl font-semibold text-gray-300' // Adjusted font size and color
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onAnimationComplete={() => handleAnimationComplete('second')}
          style={{ y: textY2 }}
        >
          Full Stack Developer | DevOps Engineer.
        </motion.div>
        {isBothAnimationComplete && (
          <motion.div
            className='w-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.13 }}
          >
            <a href='/herzlia-cv.pdf' target='_blank' rel='noopener noreferrer'>
              <Button className='text-indigo-500 font-semibold border border-indigo-400 rounded-lg p-2 hover:bg-indigo-400 hover:text-white'>
                Download CV
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
export default Hero;
