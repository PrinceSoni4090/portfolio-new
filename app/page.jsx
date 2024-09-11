'use client'
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link as ScrollLink } from "react-scroll";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {



  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {

  const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer', 'Fullstack Developer'],
  //     typeSpeed: 80,
  //   });
  //   el.current.className = 'text-purple-500 font-bold'; // Set the text color to purple and make it bold
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

const words = ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer', 'Fullstack Developer']

const para = `skilled in Next JS, React JS, typeScript. My expertise includes building responsive, high-quality web applications and managing databases. I have a strong foundation in deploying live projects, writing clean code, and following best practices. Currently, I’m seeking new opportunities to contribute to a dynamic team and deliver outstanding web solutions.`;
  return (
    <main>

      {/*  About */}
      <section id="about" className="container px-4 py-12 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center md:px-16 md:py-20">
      
       <div className="w-full mt-4 lg:mt-0 lg:w-1/2 lg:order-2">
  <Image
    src="/HeroImage1.jpg"
    alt="John Doe"
    width={350}
    height={350}
    className="w-full h-full max-w-xs mx-auto border-2 border-purple-500 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
    style={{ borderRadius: '50%', boxShadow: '0 0 10px 4px rgba(128, 0, 128, 0.5)' }}
  />
</div>

        <div className="w-full text-center lg:text-left lg:w-1/2 lg:order-1 lg:-mt-8 mt-8 lg:mt-0">
          <h1 className=" text-4xl md:text-4xl lg:text-6xl font-semibold relative z-20bg-clip-text text-transparent bg-gradient-to-b font-bold text-3xl leading-snug  md:text-4xl">
           <Cover>Prince Soni </Cover> 
          </h1>
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            {/* I'm a <span ref={el} /> */}
           <span>I'm a</span> <FlipWords words= {words} />
          </h1>
          <div className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          <TextGenerateEffect words={para} />
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button className="mt-6 px-16 py-7 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <a href="https://drive.google.com/file/d/16TiqhbGnCh3veV7H4HZuxFZ2V6Wo82AN/view?usp=sharing" className="font-semibold font-sans text-xl text-white">
                Check Resume
              </a>
            </Button>
          </div>
        </div>

      
      </section>
      
      {/* SKILLS  */}
      <section id="skills">  
        <Skills />
      </section>

      {/* Projects  */}
      <section id="projects" className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in"><Cover>Top Projects</Cover></h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 animate-fade-in">A showcase of my best work</p>
          </div>
          <div className="flex flex-wrap justify-center">

            
              
                
            {/* <!-- Project 1 --> */}
            <div className="w-full max-w-sm mx-4 my-4 rounded-xl shadow-lg dark:bg-gray-900 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4 rounded-xl">
                  <Image className="rounded-xl"
                    src="/CloudifyM.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Cloudify Media - AI Saas tool</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">TypeScript</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">NextJS</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Neon DB</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Prisma</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Shadcn</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Clerk</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Daisy UI</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">I developed an AI SaaS tool named CloudifyMedia focused on media compression and content-aware cropping. The tool features AI-powered image cropping tailored to various social media formats, ensuring optimal visual presentation. I utilized Prisma ORM and Neon DB for database management and querying.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://saas-six-iota.vercel.app/home">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/PrinceSoni4090/saas">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
            
           
            {/* <!-- Project 2 --> */}
            <div className="w-full max-w-sm mx-4 my-4  dark:bg-gray-900 rounded-lg shadow-2xl dar9:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image className="rounded-lg"
                    src="/MysteryM.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Mystery Message</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">TypeScript</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">NextJS</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Zod</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">MOngoDB</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Shadcn</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Next Auth</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Developed Mystery Mail, a full-stack anonymous messaging web application using TypeScript, NextJS, and React. The project features secure authentication via NextAuth, with MongoDB managing scalable data storage for user messages. I integrated Zod for robust schema validation, ensuring data integrity.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://mystrymessage-a6je.vercel.app/">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/PrinceSoni4090/mystrymessage">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
            
             
            {/* <!-- Project 3 --> */}
            <div className="w-full max-w-sm mx-4 my-4  dark:bg-gray-900 rounded-lg shadow-2xl dar9:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image className="rounded-lg"
                    src="/PostSpace2.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Post Space</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Redux</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Appwrite</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Tailwind Css</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Express</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Tailwind css</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Developed a full-stack web application using React, leveraging Appwrite for backend services, database management, and robust authentication and authorization. Implemented state management with Redux Toolkit and integrated a real-time text editor for posts and blogs.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://post-space.vercel.app/">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/PrinceSoni4090/Post-Space">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
             
             
            <div className="w-full max-w-sm mx-4 my-4  rounded-lg shadow-2xl dark:bg-gray-900 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image className="rounded-lg"
                    src="/UI.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Music School UI</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">NextJS</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Aceternity UI</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Developed the frontend UI using NextJS and React, creating responsive layouts with a modern, visually appealing interface. I utilized Aceternity UI and Shadcn to enhance the design.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://nextjsmusicproject.vercel.app/">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/PrinceSoni4090/nextjsmusicproject">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
            
             
            <div className="w-full max-w-sm mx-4 my-4  rounded-lg shadow-2xl dark:bg-gray-900 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image className="rounded-xl"
                    src="/PassM2.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold  dark:bg-gray-900 text-gray-800 dark:text-gray-200 animate-fade-in">Pass Manager</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Mongo DB</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Tailwind css</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">Express </span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Developed a responsive web-based password manager application using React and Tailwind CSS, featuring an intuitive UI for adding and saving usernames and passwords.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://passop-eosin.vercel.app/">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/PrinceSoni4090/Pass-Manager">View Code</a>
                  </Button>
                </div>
              </div>
            </div>  
              
        
            
          </div>
        </div>

      </section>

      {/* Education  */}
      <section id="education">
        <Education />
      </section>

      {/* Footer  */}
      <section>
        <footer className="footer footer-center rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <footer>
              <nav className=" font-semibold  flex justify-center space-x-4">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={50}
                  className="hover:underline cursor-pointer"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={50}
                  className="hover:underline cursor-pointer"
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={50}
                  className="hover:underline cursor-pointer"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="education"
                  smooth={true}
                  duration={50}
                  className="hover:underline cursor-pointer"
                >
                  Education
                </ScrollLink>
              </nav>
            </footer>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://x.com/soniPrince4090" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-black dark:text-white"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/PrinceSoni4090" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-black dark:text-white"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576 4.765-1.588 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-black dark:text-white"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869 0-2.156 1.459-2.156 2.963v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
          </aside>
        </footer>
      </section>

    </main>
  );
}




