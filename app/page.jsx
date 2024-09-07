import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Prince Soni
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            a Full Stack Developer skilled in Next JS, React JS, typeScript. My expertise includes building responsive, high-quality web applications and managing databases. I have a strong foundation in deploying live projects, writing clean code, and following best practices. Currently, I’m seeking new opportunities to contribute to a dynamic team and deliver outstanding web solutions.

          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/HeroImage1.jpg"
            alt="John Doe"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto border-2 border-purple-500 rounded-full"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-white dark:bg-gray-800">
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


      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in">Top Projects</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 animate-fade-in">A showcase of my best work</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* <!-- Project 1 --> */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
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
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
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
                    <a href="https://deployed-project1.com">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/username/project1">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-500 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
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
                    <a href="https://deployed-project1.com">View live app</a>
                  </Button>
                  <Button className="mx-1 gap-3" variant="outline">
                    <a href="https://github.com/username/project1">View Code</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}




