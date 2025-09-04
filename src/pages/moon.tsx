import { NavLink } from "react-router-dom";
import React from "react";
import MoonImage from "../assets/destination/image-moon.png";

const Moon: React.FC = () => {
  return (
    <main
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="w-full h-full flex flex-col items-center text-white mt-5 md:items-start lg:w-[90%] lg:mt-0 ">
        <h1 className="text-[16px] uppercase font-barlow tracking-widest md:ml-8 md:mt-5 lg:ml-18">
          <span className="text-gray-500 font-bold mr-2">01</span> Pick your
          destination
        </h1>

        <div className="flex flex-col items-center mt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:mt-20 lg:ml-30">
          <img
            src={MoonImage}
            alt="Moon"
            className="w-40 h-40 md:w-70 md:h-70 lg:w-80 lg:h-80"
          />

          <div className="text-center flex flex-col justify-center items-center space-y-6 md:space-y-10 lg-w-[50%] lg:items-start lg:space-y-5 lg:ml-10">
            <div className="text-center font-barlow mt-15 space-x-6 lg:mt-0 lg:text-[10px]">
              {["moon", "mars", "europa", "titan"].map((planet) => (
                <NavLink
                  key={planet}
                  to={`/destination/${planet}`}
                  className={({ isActive }) =>
                    `uppercase pb-3 lg:pb-1 ${
                      isActive
                        ? "border-b-2 border-white"
                        : "text-custom hover:border-b-2 border-white/50"
                    }`
                  }
                >
                  {planet}
                </NavLink>
              ))}
            </div>

            <h2 className="font-bellefair text-7xl lg:text-5xl uppercase">
              Moon
            </h2>

            <p className="font-barlow text-custom text-[16px] w-[80%] leading-7 md:w-[65%] md:text-[15px] lg:w-[45%] lg:text-start lg:text-[12px] lg:leading-5">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>

            <div className="w-[80%] h-[2px] bg-gray-700 md:w-[65%] lg:w-[45%]"></div>

            <div className="flex flex-col space-y-6 md:flex-row md:space-x-35 lg:space-x-15">
              <div>
                <p className="font-barlow text-custom uppercase tracking-widest text-[16px] text-gray-400 lg:text-[8px] lg:text-start">
                  Avg. Distance
                </p>
                <p className="font-bellefair uppercase text-3xl mt-3 lg:text-[14px] ">
                  384,400 km
                </p>
              </div>
              <div>
                <p className="font-barlow text-custom uppercase tracking-widest text-[16px] text-gray-400 lg:text-[8px]">
                  Est. Travel Time
                </p>
                <p className="font-bellefair uppercase text-3xl mt-3 lg:text-[14px]">
                  3 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Moon;
