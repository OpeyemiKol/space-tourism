import { useState } from "react";

//Import images from src/assets/technology

import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";

interface Tech {
  name: string;
  description: string;
  image: string;
}

const techData: Tech[] = [
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launchVehicle,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: spaceport,
  },
  {
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: capsule,
  },
];

const Technology: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { name, description, image } = techData[activeIdx];

  return (
    <main>
      <div className="w-full h-full flex flex-col items-center text-white mt-5 md:items-start lg:mt-0">
        <h1 className="text-[16px] uppercase tracking-widest md:ml-8 md:mt-3 lg:ml-35 lg:mt-5">
          <span className="text-gray-500 mr-2">03</span> Space Launch 101
        </h1>

        <div className="w-full h-full flex flex-col items-center mt-20 lg:flex-row-reverse lg:justify-between lg:mt-20 lg:w-[89%] lg:h-[310px] lg:ml-auto">
          <div className="h-[290px]  w-full flex justify-center items-center md:h-[350px] lg:h-full lg:w-[45%]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center mt-10 md:mt-7 md:w-full lg:items-start lg:text-start lg:w-[55%] lg:flex-row">
            <div className="flex gap-4 lg:flex-col lg:gap-6 lg:w-[20%] lg:mt-15">
              {" "}
              {techData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-10 h-10 md:w-15 md:h-15 lg:w-14 lg:h-14 rounded-full border border-white flex items-center justify-center font-bold transition-colors duration-300 ${
                    idx === activeIdx
                      ? "bg-white text-black"
                      : "bg-transparent text-white hover:bg-gray-500"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center text-center lg:w-[80%] lg:items-start lg:text-start lg:mt-9">
              {" "}
              <h2 className="uppercase text-gray-500 mt-6 text-[20px] md:text-[25px] lg:text-[16px]">
                The terminology...
              </h2>
              <h3 className="uppercase mt-3 text-[26px] md:text-[35px] lg:text-[30px]">
                {name}
              </h3>
              <p className="text-[16px] mt-3 leading-7 w-[88%] md:w-[65%] md:text-[18px] md:leading-8 lg:text-[12px] lg:leading-6">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
