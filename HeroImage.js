import React from 'react';
import Container from './Container.js';
import styles  from './Hero.module.css'


 const HeroImage =()=>{
     return(
      <div className="relative h-96	 md:h-2/5 bg-auto bg-center bg-contain">
      <img
        src="./traditionalfood.jpg"
        alt="Example"loading="lazy"
        className="w-full h-full opacity-75"
      />
      <div className="absolute  md:top-[40px] left-0 right-0 top-[10px] md:z-40 	flex items-center md:justify-center brightness-125">
        <div className="flex flex-col gap-2 md:gap-5">
            <div>
              <h1 className="text-sm md:text-4xl font-bold bg-gradient-to-r from-[#00df9a] to-[#008080]   mb-0 md:mb-2  text-black  px-3 py-2 md:px-5 md:py-2.5">We Serve Our Best Quality Food</h1>
            </div>
          
              <div>

                <button type="button" class="text-white bg-[#008080] hover:bg-[#00df9a] hover:text-black border-none font-medium rounded-lg text-sm px-3 py-2 md:px-5 md:py-2.5 text-center mb-2">Order Online</button>

              </div>

        </div>
      </div>
      <div className="absolute md:bottom-[50px] h-[350px] bottom-[10px] w-[100%]">

            <div className={`container mx-auto md:px-4 px-10 md:overflow-hidden` }>

                <Container/>

            </div>
              


        </div>


      </div>

     );
 }
 export default HeroImage;