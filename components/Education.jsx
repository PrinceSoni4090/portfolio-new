import React from 'react';

const Education = () => {
  return (
    <section className="py-10 bg-gradient-to-b  ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Education</h2>
        <p className="text-center text-lg mb-12">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

        <div className="space-y-8">
          {/* Education 1 */}
          <div className="border border-purple-500 rounded-lg p-6  shadow-lg">
            <h3 className="text-2xl font-semibold ">
              Lakhmi Chand Institute of Technology, Bilaspur
            </h3>
            <p className="text-sm ">
              Bachelor of Technology - BTech, Computer Science and Engineering
            </p>
            <p className="text-sm ">Oct 2020 - Sep 2024</p>
            <p className="font-medium text-purple-500 mt-2">Grade: 8.4 CGPA</p>
            <p className="mt-4 text-300">
            I have completed a Bachelor's degree in Computer Science and Engineering from Lakhmi Chand Institute of Technology, Bilaspur. I have completed with a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, etc.
            </p>
          </div>

          {/* Education 2 */}
          <div className="border border-purple-500 rounded-lg p-6  shadow-lg">
            <h3 className="text-2xl font-semibold ">
              Delhi Public School, Bilaspur
            </h3>
            <p className="text-sm ">CBSE(XII), PCM</p>
            <p className="text-sm ">2014 - 2019</p>
            <p className="font-medium text-purple-500 mt-2"></p>
            <p className="mt-4 text-300">
              I completed my class 12 high school education from Delhi Public School, Bilaspur, where I studied PCM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
