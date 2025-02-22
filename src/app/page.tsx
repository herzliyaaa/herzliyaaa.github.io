'use client';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/Projects';

import AboutSection from '@/components/sections/About';
import EmailSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className='min-w-screen min-h-screen font-sans'>
      {/* Sections */}
      <Hero id='hero' />
      <AboutSection id='about' />
      <Project id='projects' />
      <EmailSection id='contact' />
    </div>
  );
}
