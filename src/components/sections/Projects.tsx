import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { motion } from "framer-motion";
import { SectionProps } from "@/types";


const Project = ({ id }: SectionProps) => {
  const [initialProps] = useState({ opacity: 0, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className='absolute -right-20 -top-20 opacity-60' />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img className='absolute -right-20 -top-20 opacity-60' />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <img className='absolute -right-20 -top-20 opacity-60' />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img className='absolute -right-20 -top-20 opacity-60' />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "How green is your home?",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: (
        <img
          src='/assets/padpals.png'
          className='object-contain p-3 opacity-80 '
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 ",
    },
  ];

  return (
    <section className='min-h-screen  ' id={id}>
      <div className='container mx-auto py-4'>
        <h2 className='text-3xl text-white font-bold text-center mt-8 mb-8'>
          Projects
        </h2>
        {isMobile ? (
          <>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <BentoGrid className='lg:grid-rows-3'>
                {features.map((feature) => (
                  <BentoCard key={feature.name} {...feature} />
                ))}
              </BentoGrid>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={initialProps}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <BentoGrid className='lg:grid-rows-3'>
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;
