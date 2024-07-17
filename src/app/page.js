'use client'

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { Button } from '@/Components/ui/button';
import { Download, Zap } from 'lucide-react';
import Skills from '@/Components/Skills';
import { Send } from 'lucide-react';
import { Waypoints } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const handleSendEmailClick = () => {
    const emailAddress = 'sherlockx90@gmail.com';
    const subject = 'Hi!I want to connect with you!👋';
    const emailBody = 'Hi Subhadeep,';

    // Create a "mailto" URL with the recipient email, subject, and body
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoUrl;
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='w-screen min-h-full flex-col justify-center items-center'>
      {/* headers section */}
      <Marquee pauseOnHover={false} autoFill={true} className='flex flex-row gap-0 mb-10 lg:mb-0 md:mb-0 bg-red-900 hover:cursor-pointer text-black text-6xl items-center justify-center overflow-hidden w-full'>
        <h1 className='text-red-800 text-4xl hover:text-white transition-all'>Programmer</h1>
        <h1 className='text-red-800 text-4xl hover:text-white transition-all'>Full-Stack Web Developer</h1>
        <h1 className='text-red-800 text-4xl hover:text-white transition-all'>UI/UX Designer</h1>
      </Marquee>
      {/* Hero section */}
      <div className='flex flex-col md:flex-col justify-between items-center lg:p-40 md:p-20 p-5 lg:gap-10 md:gap-5 gap-3'>
        <div className='w-[80%] lg:w-[60%] md:w-[80%]lg:mt-0'>
          <h1 className='mb-10 lg:text-4xl md:text-3xl text-xl'>S U B H A D E E P <hr /><hr /> C H E L L</h1>
          <p className='text-justify mb-10'>
            A well-focused, detail-oriented Computer Science student who holds an 8.28 GPA and is highly motivated to solve problems and develop software. Conversant in Java, Python, C++, solid on Data Structures, Algorithms, and full-stack Web development, UX research and product design; and under the continuously evolving software development methodologies. Have excellent coordination and communication skills, both inter and intrapersonal, and can take responsibilities independently and as a team.
            Pro-actively seeking for a challenging job in a professional and dynamic organization that provides one with an opportunity to practice, harness, and channel applied creativity and skills into bringing forth practical impactful solutions.
          </p>
        </div>
        <div className='w-[80%] lg:w-[70%] mt-10 lg:mt-0'>
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={2000}
            autoPlay={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div><Image src="/photo1.png" width={500} height={500} alt='photo1' /></div>
            <div><Image src="/photo100.png" width={500} height={500} alt='photo100' /></div>
            <div><Image src="/photo111.jpg" width={500} height={500} alt='photo111' /></div>
            <div><Image src="/photo222.jpeg" width={500} height={500} alt='photo222' /></div>
          </Carousel>
        </div>
      </div>
      {/* Work Experience Section */}
      <div className='min-w-full flex flex-col justify-center items-center px-20 pb-20'>
        <h1 className='text-center text-4xl mx-10 my-10 md:mx-40 lg:mx-80 flex flex-col justify-center items-center gap-5 md:flex-col lg:flex-row'><span><BriefcaseBusiness className='w-7 h-7' /></span>I have a work experience of 1+ Year.</h1>
        <p className='text-justify md:mx-10 lg:mx-10 lg:w-[60rem]'>Uptill now, I have gained well-rounded experience in full-stack web development and UI/UX design. At App2Build Learning, I honed my skills in building interactive learning platform UI, utilizing Figma, Wireframing, Prototyping, ReactJS, Next.js, Tailwind CSS. At Evanke Inc., I focused on crafting user-centric interfaces for enterprise applications, applying UI/UX best practices and leveraging design tools like [mention specific design tools used, e.g., Adobe XD, Figma].  In A3 Transforms India Pvt. Ltd., I played a key role in developing and designing B2B solutions, ensuring a seamless user experience for complex functionalities. Finally, at ZeeBangla, I contributed to building a high-traffic entertainment website, optimizing front-end performance and adhering to responsive design principles.</p>
      </div>
      <Marquee pauseOnHover={true} autoFill={true} className='flex flex-row gap-10 my-10'>
        <Image src="/app2buildlearning.svg" width={100} height={100} alt='photo1' className='mx-10 filter grayscale cursor-pointer hover:filter-none transition-colors' />
        <Image src="/a3transforms.svg" width={100} height={100} alt='photo1' className='mx-10 filter grayscale cursor-pointer hover:filter-none transition-colors' />
        <Image src="/evanke.svg" width={100} height={100} alt='photo1' className='mx-10 filter grayscale cursor-pointer hover:filter-none transition-colors' />
        <Image src="/zeebangla.svg" width={100} height={100} alt='photo1' className='mx-10 filter grayscale cursor-pointer hover:filter-none transition-colors' />
      </Marquee>
      {/* Resume Section */}
      <div className='mt-20 bg-black h-[20rem] flex flex-col justify-center items-center sticky top-20 text-accent-foreground px-10'>
        <h1 className='text-4xl text-white'>Want to know me professionally?</h1>
        <p className='text-xl text-gray-400 font-light mt-3'>Here is my resume! Download it as PDF to check out the details.</p>
        <Link href={`https://drive.google.com/file/d/1oS4Xmhe_YkpEe_uFyhaXI9A6HHlRfmfC/view?usp=sharing`} target='_black'><Button variant="ghost" className="text-white mt-10 border-[0.2px] border-gray-500">
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
        </Link>
      </div>
      {/* Skills Section */}
      <div className='bg-white h-fit relative flex flex-col justify-center items-center p-10'>
        <h1 className='text-center text-4xl mx-10 my-10 md:mx-40 lg:mx-80 flex flex-col justify-center items-center gap-5 md:flex-col lg:flex-row'><span><Waypoints className='w-7 h-7' /></span>If you want to know, I can work in </h1>
        <Skills />
      </div>
      {/* Contact Me Section */}
      <div className='border-2 border-gray-200 h-[20rem] flex flex-col justify-center items-center mt-10 w-full px-20'>
        <h1 className=' text-2xl lg:text-4xl md:text-3xl flex flex-col justify-center items-center gap-5 md:flex-row lg:flex-row'><span><Zap className='w-7 h-7' /></span>Let us Connect</h1>
        <p className='text-center my-5'>Hey there, ready to team up and make something awesome happen?</p>
        <Button className="hover:translate-y-1 transition-all cursor-pointer" onClick={handleSendEmailClick}><span><Send className='mr-2 h-4 w-4' /></span>Send Email</Button>
        <div className='flex flex-row justify-center items-center gap-3 mt-10'>
          <Link href="https://github.com/SHERLOCKx90"><Image src='/foot-github.svg' className='filter grayscale hover:filter-none hover:translate-y-1 hover:transition hover:ease-linear cursor-pointer' width={20} height={20} alt='link' /></Link>
          <Link href="https://www.linkedin.com/in/subhadeepchell"><Image src='/foot-linkedin.svg' className='filter grayscale hover:filter-none hover:translate-y-1 hover:transition hover:ease-linear cursor-pointer' width={20} height={20} alt='link' /></Link>
          <Link href="https://dribbble.com/SHERLOCKx90"><Image src='/foot-dribbble.svg' className='filter grayscale hover:filter-none hover:translate-y-1 hover:transition hover:ease-linear cursor-pointer' width={20} height={20} alt='link' /></Link>
          <Link href="https://hashnode.com/@SubhadeepChell"><Image src='/foot-hashnode.svg' className='filter grayscale hover:filter-none hover:translate-y-1 hover:transition hover:ease-linear cursor-pointer' width={20} height={20} alt='link' /></Link>
          <Link href="https://x.com/subhadeepchell"><Image src='/foot-twitter.svg' className='filter grayscale hover:filter-none hover:translate-y-1 hover:transition hover:ease-linear cursor-pointer' width={20} height={20} alt='link' /></Link></div>
      </div>
      <div className='w-screen flex flex-row justify-center items-center px-10 pb-5 mt-20'>
        <p className='text-xs text-center text-gray-500'>Designed & Developed by Subhadeep Chell. All Rights reserved @SubhadeepChell 2024.</p>
      </div>
    </div>
  )
}

export default page
