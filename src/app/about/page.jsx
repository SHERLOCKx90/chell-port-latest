

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/Carousel"

const Page = () => {
  const photoarray = [
    'photo1.png',
    'photo2.png',
    'photo3.png',
    'photo4.png',
    'photo5.png',
    'photo6.png',
    'photo7.png',
    'photo8.png',
  ]

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center mt-16 overflow-x-hidden'>
      <Carousel className="w-full max-w-[25rem] lg:max-w-[60rem] md:max-w-[50rem]">
        <CarouselContent className="max-h-[50rem]">
          {photoarray.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-0">
                <Card className="rounded-[20px] w-fit">
                  <CardContent className="p-0 object-contain">
                    <Image src={`/${photo}`} alt='my photos' width={500} height={400} className='rounded-[20px]' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='w-[85%] text-center mt-10 mb-20 lg:w-[50%] md:w-[80%] text-md'>
        <h1 className='text-xl md:text-3xl lg:text-4xl text-center mb-10'>A.KA. <hr /><hr /> S H E R L O C K</h1>
        <p>
          A well-focused, detail-oriented Computer Science undergraduate who holds an 8.28 GPA and is highly motivated to solve problems and develop software. Conversant in Java, Python, C++, solid on Data Structures, Algorithms, and full-stack Web development, UX research and product design; and under the continuously evolving software development methodologies. Have excellent coordination and communication skills, both inter and intrapersonal, and can take responsibilities independently and as a team.
          Pro-actively seeking for a challenging job in a professional and dynamic organization that provides one with an opportunity to practice, harness, and channel applied creativity and skills into bringing forth practical impactful solutions.
        </p>
      </div>
    
      <div className='w-screen flex flex-row justify-center items-center px-10 pb-5'>
        <p className='text-xs text-center text-gray-500'>Designed & Developed by Subhadeep Chell. All Rights reserved @SubhadeepChell 2024.</p>
      </div>
    </div>
  )
}

export default Page
