import React from 'react';
import UiCards from '/src/Components/UiCards';
import WorkCards from '/src/Components/WorkCards';

const Page = () => {
  const codeWorkArray = [
    {
      codename: "BeatSpire",
      codetag: "A decentralized platform for music NFTs.",
      codelink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'code1.png',
    },
    {
      codename: "VR Club Official website",
      codetag: "Official site for VR Club VITC.",
      codelink: "https://github.com/SHERLOCKx90/VR-Club-Official",
      image: 'code2.png',
    },
    {
      codename: "SherloXO",
      codetag: "A simple but exciting tic-tac-toe game.",
      codelink: "https://github.com/SHERLOCKx90/SherloXO",
      image: 'code3.png',
    },
    {
      codename: "ReactCalc",
      codetag: "A simple web calculator for instant use.",
      codelink: "https://github.com/SHERLOCKx90/ReactCalc-v1",
      image: 'code4.png',
    },
    {
      codename: "CipherFiles",
      codetag: "An encrypted and secure file managing app.",
      codelink: "https://github.com/SHERLOCKx90/CipherFiles",
      image: 'code5.png',
    },
    {
      codename: "StyleHive",
      codetag: "An E-commerce store for fashionable wear.",
      codelink: "https://github.com/SHERLOCKx90/E-commerce-MERN-project",
      image: 'code6.png',
    },
  ];

  const uiWorkArray = [
    {
      uiname: "SignSync UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui1.png',
    },
    {
      uiname: "Sherlock’s Portfolio UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui2.png',
    },
    {
      uiname: "Chell UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui3.png',
    },
    {
      uiname: "BeatSpire UI - Redesign",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui4.png',
    },
    {
      uiname: "CipherAI UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui5.png',
    },
    {
      uiname: "CysHub UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui6.png',
    },
    {
      uiname: "ChatBite UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui7.png',
    },
    {
      uiname: "ShareCare UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui8.png',
    },
    {
      uiname: "HackClub Results Design",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui9.png',
    },
    {
      uiname: "Superteam Security UI - Redesign",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui10.png',
    },
    {
      uiname: "Subhadeep Profile Banner Design",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui11.png',
    },
    {
      uiname: "Chell’s Portfolio UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui12.png',
    },
    {
      uiname: "Appwrite UI - Redesign",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui13.png',
    },
    {
      uiname: "VR Club web UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui14.png',
    },
    {
      uiname: "Celebrare UI - Redesign",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui15.png',
    },
    {
      uiname: "SherloXO UI",
      uitag: "A decentralized platform for music NFTs.",
      uilink: "https://github.com/SHERLOCKx90/BeatSpire-Main-Fix",
      image: 'ui16.png',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-10 text-xl font-inter font-semibold'>U I   W O R K S</h1>
        <div className='m-10 grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {/* Rendering UI Cards */}
          {uiWorkArray.map((item, index) => (
            <UiCards
              key={`ui-${index}`}
              image={item.image}
              name={item.uiname}
              tag={item.uitag}
              link={item.uilink}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-10 text-xl font-inter font-semibold'>C O D E - W O R K S</h1>
        <div className='m-10 grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {/* Rendering Work Cards */}
          {codeWorkArray.map((item, index) => (
            <WorkCards
              key={`code-${index}`}
              image={item.image}
              name={item.codename}
              tag={item.codetag}
              link={item.codelink}
            />
          ))}
        </div>
      </div>
      <div className='w-screen flex flex-row justify-center items-center px-10 pb-5 mt-10'>
        <p className='text-xs text-center text-gray-500'>Designed & Developed by Subhadeep Chell. All Rights reserved @SubhadeepChell 2024.</p>
      </div>
    </div>
  );
};

export default Page;
