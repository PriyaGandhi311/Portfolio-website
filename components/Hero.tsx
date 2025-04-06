import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href =
    'https://drive.google.com/drive/folders/1vv3aqKFzZRYDD2oEB6t7cAhPNqcsNLbV';
  // link.download = "Priya_Gandhi_Resume.pdf";
  link.click();
};
const Hero = () => {
  return (
    <div id="about" className="pb-20 pt-36 h-screen">
     
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 pt-8">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
         

          <div className="flex items-center justify-center mb-4">
            <img
              src="/Priya_Gandhi.png"
              alt="Priya Gandhi"
              className="rounded-full w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52"
            />
          </div>
          <TextGenerateEffect
            words="Hi, I'm Priya Gandhi!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            A dynamic Engineer who thrives on collaboration,
            innovation, and transforming ideas into reality. Currently pursuing
            Masters of Computer Science from North Carolina State University.
          </p>
          <div className="flex items-center md:gap-6 gap-6 ">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-34 h-34 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social media icon for ${info.id}`}
                >
                  <img src={info.img} alt="icons" width={30} height={30} />{" "}
                </a>
              </div>
            ))}
          </div>
          <a href="#about">
            <MagicButton
              title="Download my Resume"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleDownload}
              otherClasses="!bg-[#161A31]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
