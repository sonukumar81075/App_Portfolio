import React from "react";
import {
  HeroSectionData,
  icons,
  Socialicons,
} from "../DynamicData/HeroSection";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="section-shell flex items-center justify-center sm:pt-0">
        <div className="container lg:px-12 w-full flex flex-col md:flex-row items-center"> 
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left md:order-0 order-2">
            <p className="text-sm app-text-secondary py-3 tracking-wide uppercase">
              {HeroSectionData.Welcome}
            </p>
            <h1 className="text-[34px] sm:text-3xl 2xl:text-5xl leading-[1.2] font-bold mt-2 mb-2">
              {HeroSectionData.titlestart}{" "}
              <span className="text-[var(--accent)]">
                {HeroSectionData.titlecenter}
              </span>{" "}
              <br />
              <span className="app-text-primary">
                <Typewriter
                  options={{
                    strings: [
                      "a Designer",
                      "a Professional Coder.",
                      "a React Developer.",
                      "a Node Developer.",
                      "a Mern Stack Developer.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                    cursor: "_",
                  }}
                />
              </span>
            </h1>
            <p className="app-text-secondary text-[14px] sm:text-base leading-[1.45] 2xl:mt-4 mt-2 py-2 sm:py-3 2xl:text-lg">
              {HeroSectionData.description}
            </p>

            {/* Social & Skills */}
            <div className="py-4 sm:py-6 2xl:mt-16 md:mt-4 items-center flex flex-col md:flex-row md:gap-28 md:space-y-0 space-y-4 sm:space-y-6">
              {/* Social Icons */}
              <div>
                <p className="app-text-secondary text-sm text-start mb-4">
                  {HeroSectionData.facebookicon}
                </p>
                <div className="flex md:gap-6 gap-3 sm:gap-5">
                  {Socialicons.map((icon) => (
                    <Link
                      key={icon.id}
                      target="_blank"
                      to={icon.to}
                      className="app-card-soft hover:text-[var(--accent)] p-3 2xl:p-4 rounded-xl sm:rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]"
                    >
                      {icon.svg}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Best Skills */}
              <div>
                <p className="app-text-secondary text-start text-sm mb-4">
                  {HeroSectionData.figmaicon}
                </p>
                <div className="flex md:gap-6 gap-3 sm:gap-5">
                  {icons.map((icon, index) => (
                    <Link
                      key={index}
                      to={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="app-card-soft hover:text-[var(--accent)] 
                 p-3 sm:p-4 rounded-xl sm:rounded-lg transition-transform duration-300 
                 transform hover:-translate-y-1 2xl:w-14 w-12 2xl:h-14 h-12 
                 flex items-center justify-center"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="w-6 h-6 object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-end md:mt-0 2xl:mt-8 md:py-24 py-4 sm:py-6">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-yellow-600 overflow-hidden shadow-xl shadow-amber-400 animate-move-up-down">
              <img
                src="/images/right_image.png"
                alt="John Lee"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] items-center bg-[var(--surface)] flex justify-center">
        <div className="h-[0.5px] bg-[var(--border)] w-7xl"></div>
      </div>
    </>
  );
};
export default HeroSection;
