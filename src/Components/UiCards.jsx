import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const UiCards = ({ image, name, tag, link }) => {
    return (
        <Card className="w-[25rem] lg:w-[20rem] md:w-[18rem] hover:translate-y-2 transition-all cursor-pointer hover:shadow-md">
            <CardHeader>
                <CardTitle className="text-xl">{name}</CardTitle>
                <CardDescription>{tag}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={require(`../../public/${image}`).default} alt="UI Card" className="w-full" />
            </CardContent>
            <CardFooter>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex gap-2">
                <span className='text-black'>View Project</span>
                    <Image src="../../seelink.svg" alt='link' width={15} height={15} className="hover:translate-x-1 transition-all cursor-pointer"/>
                </a>
            </CardFooter>
        </Card>
    );
};

export default UiCards;