import React from "react";
import Pear from "../Assets/Pear_pic.png";
import Medihub from "../Assets/Medihub_pic.png";
import FurnitureTry from "../Assets/FurnitureTry_pic.png";
import FatSecret from "../Assets/FatSecret_pic.png";
import Portfolio from "./Portfolio";
export const Work = () => {
  return (
    <div id="projects" name="work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md: text-center">
          <p
            className="text-4xl font-bold inline border-b-4 border-pink-600 
                    "
          >
            MY PROJECTS
          </p>
          <p className="pt-4 pb-4">//Checkout some of my recent works</p>
        </div>

        <div className=" grid  md:grid-cols-2 gap-4 " >
          <div
            
            style={{ backgroundImage: `url(${Pear})` }}
            className=" project-card shadow-lg shadow-[#7bc95c] group container rounded-md flex justify-center px-4 mx-auto content-div project-card "
          >
            
            <div className="opacity-0 group-hover:opacity-100 " >
              <span>
                <p
                
                  className="project-title text-2xl font-bold pb-2 text-white tracking-wider "
                >
                  Pear Website
                </p>
                <p
                  
                  className="project-description sm: text-[13.5px] md:text-sm lg:text-lg text-gray-400 pt-2 "
                >
                  Pear is built with the reference website "apple.com". It is an
                  ecommerce website for electronic products with an eye-catching
                  UI where the users can buy various electronic items, with
                  customizable design selections.
                </p>

                <div className="flex flex-row sm:mt-1 md:mt-2">
                  <p
                    class="project-tech-stack"
                    className="md:text-xl text-orange-400"
                  >
                    Teck Stack:-
                  </p>
                  <p className="project-tech-stack md:text-lg text-black-500 ml-3 ">
                    React.js | Firebase | Redux | Chakra UI
                  </p>
                </div>
              </span>
              <div className=" pt-2 text-center">
                <a
                  className="project-deployed-link"
                  href="https://pear-website.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/himanku/Pear-website"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

         

          <div
            
            style={{ backgroundImage: `url(${Medihub})` }}
            className="project-card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center px-4 mx-auto content-div "
          >
           
            <div className="opacity-0 group-hover:opacity-100 ">
              <span>
                <p
                  
                  className="project-title text-2xl font-bold pb-2 text-white tracking-wider "
                >
                  MediHub
                </p>
                <img  className=""src="" alt="" />
                <p
                  
                  className="project-description sm: text-[15.5px] md:text-lg lg:text-lg text-gray-400 pt-2 "
                >
                  Medihub is E-commerce medicine site ,which deliver all kinds of medicines including Ayurveda and Medical eqiptments.
                </p>

                <div className="flex flex-row sm:mt-1 md:mt-2">
                  <p

                    className="md:text-xl text-orange-400"
                  >
                    Teck Stack:-
                  </p>
                  <p className= "project-tech-stack md:text-lg text-black-500 ml-3 ">
                    React.js | Node.js | Express.js | MongoDB
                  </p>
                </div>
              </span>
              <div className=" pt-2 text-center">
                <a
                  className="project-deployed-link"
                  href="https://frontend-amit9675.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/amit9675/eight-club-5364"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
          
            style={{ backgroundImage: `url(${FurnitureTry})` }}
            className="project-card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center px-4 mx-auto content-div "
          >
           
            <div className="opacity-0 group-hover:opacity-100">
              <span>
                <p
                 
                  className="project-title text-2xl font-bold pb-2 text-white tracking-wider "
                >
                  FurnitureTry
                </p>
                <p
                  
                  className="project-description sm: text-[13.5px] md:text-sm lg:text-lg text-gray-400 pt-2 "
                >
                  FurnitureTry an Indian online marketplace for furniture and home décor.
                </p>

                <div className="flex flex-row sm:mt-1 md:mt-2">
                  <p
                    
                    className="md:text-xl text-orange-400"
                  >
                    Teck Stack:-
                  </p>
                  <p className="project-tech-stack md:text-lg text-black-500 ml-3 ">
                  React.js | Firebase | Redux | Chakra UI
                  </p>
                </div>
              </span>
              <div className=" pt-2 text-center">
                <a
                  className="project-deployed-link"
                  href="https://furnituretry-official.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/prateek-bka/lazy-hose-3359"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
           
            style={{ backgroundImage: `url(${FatSecret})` }}
            className="project-card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center px-4 mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span>
                <p
                  
                  className="project-title text-2xl font-bold pb-2 text-white tracking-wider "
                >
                  FatSecret
                </p>
                <p
                  
                  className=" project-description sm: text-[13.5px] md:text-sm lg:text-lg text-gray-400 pt-2 "
                >
                  this is a clone of fatsecret which is Health and food caring website where you get food and helth related tips.
                </p>

                <div className="flex flex-row sm:mt-1 md:mt-2">
                  <p
                    
                    className="md:text-xl text-orange-400"
                  >
                    Teck Stack:-
                  </p>
                  <p project-tech-stack className="md:text-lg text-black-500 ml-3 ">
                  HTML | CSS | JavaScript
                  </p>
                </div>
              </span>
              <div className=" pt-2 text-center">
                <a
                  className="project-deployed-link"
                  href="https://deluxe-crisp-eed89d.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  className="project-github-link"
                  href=""
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
