'use client'
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer', 'Fullstack Developer'],
      typeSpeed: 80,
    });
    el.current.className = 'text-purple-500 font-bold'; // Set the text color to purple and make it bold
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <main>
      {/*  About */}
      <section className="container px-4 py-12 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center md:px-16 md:py-20">
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2 lg:order-2">
          <Image
            src="/HeroImage1.jpg"
            alt="John Doe"
            width={350}
            height={350}
            className="w-full h-full max-w-xs mx-auto border-2 border-purple-500 rounded-full"
          />
        </div>
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:order-1 lg:-mt-8 mt-8 lg:mt-0">
          <h1 className="font-bold text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Prince Soni
          </h1>
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            I'm a <span ref={el} />
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            skilled in Next JS, React JS, typeScript. My expertise includes building responsive, high-quality web applications and managing databases. I have a strong foundation in deploying live projects, writing clean code, and following best practices. Currently, I’m seeking new opportunities to contribute to a dynamic team and deliver outstanding web solutions.
          </p>
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
      {/* <section className="py-12  ">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">My Skills</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">A showcase of my technical skills</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/TypeS.webp" alt="TypeScript" className="inline-block w-6 h-6 mr-2" />
                    TypeScript
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/JavaScript.png" alt="JavaScript" className="inline-block w-6 h-6 mr-2" />
                    JavaScript
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/html.png" alt="HTML/CSS" className="inline-block w-6 h-6 mr-2" />
                    HTML/CSS
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/next.jpg" alt="NextJS" className="inline-block w-6 h-6 mr-2" />
                    NextJS
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/react.png" alt="React" className="inline-block w-6 h-6 mr-2" />
                    React
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/tailwind.png" alt="Tailwind CSS" className="inline-block w-6 h-6 mr-2" />
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/node.jpg" alt="NodeJS" className="inline-block w-6 h-6 mr-2" />
                    NodeJS
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/ex.webp" alt="ExpressJS" className="inline-block w-6 h-6 mr-2" />
                    ExpressJS
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Databases</h3>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/mongo.png" alt="MongoDB" className="inline-block w-6 h-6 mr-2" />
                    MongoDB
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/neon.jpg" alt="NeonDB" className="inline-block w-6 h-6 mr-2" />
                    NeonDB
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Services and Tools</h3>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/app.png" alt="Appwrite" className="inline-block w-6 h-6 mr-2" />
                    Appwrite
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/auth.png" alt="NextAuth" className="inline-block w-6 h-6 mr-2" />
                    NextAuth
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/clerk.png" alt="Clerk" className="inline-block w-6 h-6 mr-2" />
                    Clerk
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/prisma.png" alt="Prisma" className="inline-block w-6 h-6 mr-2" />
                    Prisma
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/zod.png" alt="Zod" className="inline-block w-6 h-6 mr-2" />
                    Zod
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/shadcn.png" alt="Shadcn" className="inline-block w-6 h-6 mr-2" />
                    Shadcn
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/Redux.png" alt="Redux" className="inline-block w-6 h-6 mr-2" />
                    Redux
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/ace.png" alt="Aceternity UI" className="inline-block w-6 h-6 mr-2" />
                    Aceternity UI
                  </div>
                  <div className="p-2 bg-gray-200 rounded-md dark:bg-gray-700">
                    <img src="/daisy.png" alt="Daisy UI" className="inline-block w-6 h-6 mr-2" />
                    Daisy UI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Skills/>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Our Features</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 animate-fade-in">Discover what makes us unique</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* <!-- Feature 1 --> */}
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-700 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Feature One</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Description of feature one.</p>
              </div>
            </div>
            {/* <!-- Feature 2 --> */}
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-700 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Feature Two</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Description of feature two.</p>
              </div>
            </div>
            {/* <!-- Feature 3 --> */}
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-700 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Feature Three</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300 animate-fade-in">Description of feature three.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Top Projects</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 animate-fade-in">A showcase of my best work</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* <!-- Project 1 --> */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4 rounded-lg">
                  <Image className="rounded-lg"
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image className="rounded-xl"
                    src="/PassM2.png"
                    alt="John Doe"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Pass Manager</h3>
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

      

      <section>

      </section>


    </main>
  );
}




