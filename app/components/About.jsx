import React from "react";
import { Experience } from "@/constants";
import { Workexperience } from "./Workexperience";

const About = () => {
  return (
    <>
    <section
      className="px-6 lg:px-20  "
    >
      <div>
        <p className="md:text-3xl text-2xl font-bold text-text-800  inline border-b-4 border-gray-300">About</p>
      </div>
      <div>
        <p className=" md:text-left   text-center text-xl sm:text-xl font-light text-text-700 font-OpenSans mt-9  "> 
        Tarang Bombale,currently pursuing an integrated MSc at SVNIT, Surat aspires to become a teacher,demonstrating a strong commitment to academic growth and a passion for education.I have completed my Intermediate Education at Somalwar High School, Ramdaspeth, Nagpur in year 2019.
       
        </p>
        <br />
        
        <p className="md:text-3xl text-2xl font-bold text-text-800  inline border-b-4 border-gray-300">Work Experience</p>
         
          
      </div>
      <div
      className="px-6 lg:px-20 mt-9 flex justify-center items-center"
      >
      <div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Experience.map((experience, index) => (
            <Workexperience key={index} index={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
   
      </section>
       </>
  )
}

export default About;