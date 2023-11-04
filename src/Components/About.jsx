import React from "react";

export const About = () => {
  return (
    <div id="about"   className="about section w-full h-screen bg-[#12343b] text-yellow-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="sm: text-center pb-8 pl-4">
            <p
              className="text-4xl font-bold inline border-b-4 border-pink-600
                    "
            >
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-6">
          <p  id="user-detail-intro" className=" text-justify text-xl lg:text-4xl">
            A Fullstack Web Developer with an interest in HTML, CSS, JavaScript, React Data Structures, Algorithms
            and problem-solving. Looking forward to an opportunity where I can
            utilize my professional skills that offers challenge and
            professional growth while being ingenious and pliable.
          </p>
        </div>
      </div>
    </div>
  );
};
