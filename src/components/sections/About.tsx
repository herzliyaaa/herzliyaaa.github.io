"use client";
import React, { useTransition, useState } from "react";
import { SectionProps } from "@/types";
import TabButton from "@/components/shared/TabButton";
import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  DiJsBadge,
  DiMongodb,
  DiPython,
  DiLinux,
  DiGit,
  DiPostgresql,
  DiRedis,
} from "react-icons/di";
import { RiTailwindCssLine, RiNextjsLine } from "react-icons/ri";
import {
  SiPrisma,
  SiTypescript,
  SiAnsible,
  SiExpress,
  SiSap,
  SiCoursera,
  SiUdemy,
} from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center'>
          <FaNodeJs className='mr-2' /> <span>Node.js</span>
        </div>
        <div className='flex items-center'>
          <FaReact className='mr-2' /> <span>React</span>
        </div>
        <div className='flex items-center'>
          <DiPostgresql className='mr-2' /> <span>PostgreSQL</span>
        </div>
        <div className='flex items-center'>
          <RiTailwindCssLine className='mr-2' />
          <span>TailwindCSS</span>
        </div>
        <div className='flex items-center'>
          <SiTypescript className='mr-2' /> <span>TypeScript</span>
        </div>
        <div className='flex items-center'>
          <DiJsBadge className='mr-2' />
          <span>JavaScript</span>
        </div>
        <div className='flex items-center'>
          <RiNextjsLine className='mr-2' />
          <span>NextJS</span>
        </div>
        <div className='flex items-center'>
          <DiPython className='mr-2' />
          <span>Python</span>
        </div>
        <div className='flex items-center'>
          <DiMongodb className='mr-2' />
          <span>MongoDB</span>
        </div>
        <div className='flex items-center'>
          <DiLinux className='mr-2' />
          <span>Linux</span>
        </div>
        <div className='flex items-center'>
          <DiGit className='mr-2' />
          <span>Git</span>
        </div>
        <div className='flex items-center'>
          <FaDocker className='mr-2' />
          <span>Docker</span>
        </div>
        <div className='flex items-center'>
          <SiPrisma className='mr-2' />
          <span>Prisma</span>
        </div>
        <div className='flex items-center'>
          <FaHtml5 className='mr-2' />
          <span>HTML</span>
        </div>
        <div className='flex items-center'>
          <FaCss3 className='mr-2' />
          <span>CSS</span>
        </div>
        <div className='flex items-center'>
          <FaAws className='mr-2' />
          <span>AWS</span>
        </div>
        <div className='flex items-center'>
          <DiRedis className='mr-2' />
          <span>Redis</span>
        </div>
        <div className='flex items-center'>
          <SiExpress className='mr-2' />
          <span>Express</span>
        </div>
        <div className='flex items-center'>
          <SiAnsible className='mr-2' />
          <span>Ansible</span>
        </div>
        <div className='flex items-center'>
          <SiSap className='mr-2' />
          <span>SAP Hana</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex items-center'>
          <GiGraduateCap className='mr-2' />{" "}
          <span className='text-lg font-bold'>
            Mindanao State University - General Santos City
          </span>
        </div>
        <div className='ml-7 flex items-center'>
          <span>
            Bachelor of Science in Information Technology - Major in Database
            Management
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex items-center'>
          <SiCoursera className='mr-2' />{" "}
          <span className='text-lg font-bold'>
            Modern JavaScript: ES6 Basics
          </span>{" "}
        </div>
        <div className='ml-7 flex items-center'>
          <span className='text-sm border border-indigo-400 rounded-xl p-2 hover:border-indigo-600'>
            <a
              href='https://coursera.org/share/20b9c8dcb6dff684f776e188b7546111'
              target='_blank'
            >
              Show Credentials
            </a>
          </span>
        </div>

        <div className='flex items-center'>
          <SiUdemy className='mr-2' />{" "}
          <span className='text-lg font-bold'>Python for Beginners</span>
        </div>
        <div className='ml-7 flex items-center'>
          <span className='text-sm border border-indigo-400 rounded-xl p-2  hover:border-indigo-600'>
            <a
              href='https://www.udemy.com/certificate/UC-445e4a2d-12d7-4ac5-a5b7-e7adbaf22d9c/'
              target='_blank'
            >
              Show Credentials
            </a>
          </span>
        </div>
      </div>
    ),
  },
];

const AboutSection = ({ id }: SectionProps) => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className='min-h-screen text-white' id={id}>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <IconCloud iconSlugs={slugs} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            As a full-stack developer with two years of experience, I have a
            proven track record of designing and building secure, scalable web
            applications. My expertise in JavaScript, TypeScript, and Python,
            coupled with proficiency in frameworks like Node.js, Express, React,
            and Next.js, enables me to effectively manage databases, implement
            APIs, and collaborate seamlessly within a team environment. I am a
            dedicated and results-oriented professional who is passionate about
            leveraging my skills to contribute to the success of your
            organization. My continuous pursuit of knowledge and my ability to
            adapt to new technologies make me a valuable asset to any
            development team.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>
            {activeTab ? activeTab.content : <p>No content available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
