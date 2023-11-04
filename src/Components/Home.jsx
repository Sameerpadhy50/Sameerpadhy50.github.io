import React from "react";
import { HiOutlineArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import ProfilePic from "../Assets/A30-013.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import Resume from "../Assets/Sameerkumar-padhy-Resume.pdf";
export const Home = () => {
  return (
    <div  id="home" name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] m-auto lg:mt-[150px]  pt-50 flex flex-col-reverse justify-between items-center sm:flex sm:flex-row">
        <div className=" pl-8">
          <h1 className="text-3xl sm:text-5xl text-orange-600 mt-20">Hello 👋,</h1>
          <h1   id="user-detail-name" className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] pt-4">
            I'm Sameer Kumar Padhy
          </h1>
          <h1 className=" text-3xl text-pink-400 pt-4">
            a{" "}
            <Typewriter
              words={[
                "  Full Stack Web Developer.",
                "  Programmer.",
                "  Problem Solver.",
                
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorBlinking={false}
              typeSpeed={50}
              deleteSpeed={10}
              delaySpeed={2000}
            />
          </h1>

          <div>
            <div className="pt-4 flex flex-row lg:hidden z-0">
              <Button
              id="resume-button-2"
                variant="contained"
                startIcon={<FaDownload size={20} />}
                sx={{
                  color: "white",
                  backgroundColor: "orange",
                  borderColor: "green",
                  fontWeight: "bold",
                  fontSize: "10px",
                  fontFamily: "",
                  ":hover": {
                    bgcolor: "pink",
                    color: "white",
                  },
                  width: "80px",
                  padding: "10px 40px 10px 40px",
                }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1EBpgx-1_-rFSJ3nTFfWuJ0pxqDX-YY3v/view"
                  );
                }}
              >
                <a  id="resume-link-2" href={Resume} download="Sameerkumar-Padhy-Resume.pdf">
                  Resume{" "}
                </a>
              </Button>

              <Button
                variant="contained"
                startIcon={<FaGithub size={20} />}
                sx={{
                  color: "white",
                  backgroundColor: "grey",
                  borderColor: "green",
                  fontWeight: "bold",
                  fontSize: "10px",
                  fontFamily: "",
                  ":hover": {
                    bgcolor: "dark grey",
                    color: "white",
                  },
                  width: "80px",
                  padding: "10px 40px 10px 40px",
                  margin: "0px 20px 0px 20px",
                }}
              >
                <a id="contact-github"
                  href="https://github.com/Sameerpadhy50"
                  target="_blank"
                >
                  {" "}
                  GitHub{" "}
                </a>
              </Button>

              <Button
                variant="contained"
                startIcon={<FaLinkedin size={20} />}
                sx={{
                  color: "white",
                  backgroundColor: "light blue",
                  borderColor: "green",
                  fontWeight: "bold",
                  fontSize: "10px",
                  fontFamily: "",
                  ":hover": {
                    bgcolor: "light blue",
                    color: "white",
                  },
                  width: "80px",
                  padding: "10px 40px 10px 40px",
                }}
              >
                <a  id="contact-linkedin"
                  href="https://www.linkedin.com/in/sameer-kumar-padhy-4019ba131/"
                  target="_blank"
                >
                  {" "}
                  LinkedIn{" "}
                </a>
              </Button>
            </div>
            <Link to="work" smooth={true} offset={-20} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className=" group-hover:rotate-90 duration-500">
               
                  <HiOutlineArrowNarrowRight className="ml-3 cursor-none" />{" "}
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div  className=" lg:h-[450px] rounded-md border-yellow-300">
          <img 
          
            src={ProfilePic}
            className="home-img w-[200px]  md:w-[300px]  lg:w-[350px]   lg:h-[450px] rounded-md border-yellow-300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
