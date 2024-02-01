import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import Image from "next/image";
import landingPagePic from "@/lib/images/gun.gif";
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  


  return (
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-pink-950 via-pink-950/30 to-white">
        <nav className="my-16 animate-fade animate-once animate-duration-[3000ms] ">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm animate-fade animate-once animate-duration-[3000ms] text-slate-500 hover:text-slate-300"
              >
                {item.name}
              </Link>
            ))}

          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-slate-300/0 via-slate-300/50 to-slate-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade"
          quantity={500}
        />
        <h1 className="z-10 text-4xl text-transparent animate-fade bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Become my valentine?

        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-2xl text-zinc-500">
            Or else...
            <Image
              src={landingPagePic}
              alt="Picture of the author"
            />
          
          </h2>
          <div className="flex flex-row items-center justify-center ">
           <button className="px-4 py-2 mt-4 text-sm font-bold text-white transition duration-500 bg-slate-500 rounded-full hover:bg-slate-400 hover:text-slate-300">NO :/</button>
          <button className="ml-14 px-4 py-2 mt-4 text-sm font-bold text-white transition duration-500 bg-zinc-500 rounded-full hover:bg-zinc-400 hover:text-zinc-300 space-x-50">YES!</button>

          </div>

        </div>
        
        
      </div>
      
    );

  }
