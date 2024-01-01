import React from "react";
import tutor from "../../public/assets/tutor.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className ="  h-auto w-full px-6 lg:px-20">
        
        <div className="max-w-screen-lg   flex flex-col items-center justify-center mt-9  md:flex-row" >
          <div className="md:w-1/2 h-full mt-9">
            <h2 className="text-center md:text-left text-text-700 font-bold md:text-[50px] sm:text-[40px] text-[40px] font-OpenSans mt-8 ">Hii, <br />This is <span className="bg-gradient-to-br from-[rgb(66,48,48)] to-[rgb(101,93,58)] text-transparent bg-clip-text"> Tarang </span></h2>
            <p className="text-center text-text-700 md:text-left mt-3 font-semibold md:text-[25px] sm:text-[20px] text-[20px] font-OpenSans  max-w-md">
              A dedicated private tutor having 2 years of experience in providing personalized education.
            </p>
            <div class="text-center lg:text-left">
              <button class="inline-block lg:float-left w-fit px-6 py-3 my-2 rounded-xl bg-gradient-to-r from-background-700 to-background-400 mt-4  hover:from-background-400 hover:to-background-700 transition-all duration-300 mb-4">
               See Demo
              </button>
</div>


          </div>
          
          <div className="md:w-1/2 w-full p-2 md:mb-4 h-auto mt-8">
          
            <Image layout="responsive" className=" mx-auto w-2/3 md:w-full   md:h-auto "  src={tutor} alt="Image"  />
          </div>

      
           </div>
      </div>
      
    </>
  );
};

export default Hero;
