import { Button } from "@mui/material";
import React, { useState } from "react";
import Resume from "../Assets/Sameerkumar-padhy-Resume.pdf";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const initialState = {
  email: "",
  name: "",
  message: "",
};

export const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [right, setRigt] = useState(false);
  const handleSubmit = () => {
    if (values.email === "" || values.name === "" || values.message === "") {
      setRigt(false);
      alert("Please enter all fields");
      window.location.reload();
      return;
    }
    setRigt(true);
  };
  return (
    <div
    id="contact"
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 mt-10"
    >
      <form
        action={
          right
            ? "https://getform.io/f/957f4ec2-e54d-46e7-acd8-35b6f3e2c1e9"
            : ""
        }
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col max-w-[600px] w-full
        "
        target="_blank"
        
      >
        <div className="mt-20 pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Sumbit the form below or Email me at{" "}
            <span  id="contact-email" className="text-pink-300">
              {" "}
              sameerpadhy50@gmail.com{" "}
            </span>{" "}
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Connect me via whatsapp or call :{" "}
            <span  id="contact-phone" className="text-pink-300"> +917978467210 </span>{" "}
          </p>
        </div>
        <div className="pb-8 m-auto flex flex-row lg:hidden z-0">
          <Button
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
            <a id="resume-link-1"
              href={Resume}
              download="Sameerkumar-Padhy-Resume.pdf"
            >
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
            <a  href="https://github.com/Sameerpadhy50" target="_blank">
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
            <a
              href="https://www.linkedin.com/in/sameer-kumar-padhy-4019ba131/"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
          </Button>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"

          type="email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email"
          name="name"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          value={values.message}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, message: e.target.value }))
          }
          required
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};
