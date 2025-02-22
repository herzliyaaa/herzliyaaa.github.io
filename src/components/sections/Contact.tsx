'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/assets/github-icon.svg';
import LinkedinIcon from '../../../public/assets/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { SectionProps } from '@/types';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSection = ({ id }: SectionProps) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log('Info:', data);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Message sent:', result);
        setEmailSubmitted(true);
        reset();
        toast.success('Message sent successfully!');
      } else {
        console.error('Error sending message:', result);
        toast.error(result.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('An unexpected network error occurred.');
    }
  };

  return (
    <section
      id={id}
      className='relative  z-20 h-[70vh] md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 pt-2 pb-10'>
          <Link href='github.com'>
            <Image
              src={GithubIcon}
              alt='Github Icon'
              className='hover:bg-indigo-700 hover:rounded-lg'
            />
          </Link>
          <Link href='linkedin.com'>
            <Image
              src={LinkedinIcon}
              alt='Linkedin Icon'
              className='hover:bg-indigo-700 hover:rounded-lg'
            />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col py-8' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='text-white block mb-2 text-sm font-medium'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='email@google.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='text-white block text-sm mb-2 font-medium'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              {...register('subject', {})}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea
              id='message'
              {...register('message', { required: true })}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <ToastContainer />
          <button
            type='submit'
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
          {emailSubmitted && (
            <div className='flex w-full items-center justify-center'>
              <p className='mt-4 text-green-400'>Thank you for your message!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
