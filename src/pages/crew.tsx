import { useState } from "react";

// Import images from src/assets/crew
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const crewData: CrewMember[] = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: mark,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: victor,
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anousheh,
  },
];

const Crew: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { name, role, bio, image } = crewData[activeIdx];
  return (
    <main>
      <div className="w-full h-full flex flex-col items-center text-white mt-5 md:items-start lg:w-[90%] lg:mt-0 lg:mx-auto">
        <h1 className="text-[16px] uppercase tracking-widest md:ml-8 md:mt-3 lg:mt-5 lg:ml-18">
          <span className="text-gray-500 mr-2">02</span> Meet your crew
        </h1>

        <div className="mt-10 md:mt-12 lg:flex lg:mt-7">
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start lg:pl-18 lg:justify-end">
            <h2 className="text-[17px] uppercase font-extralight text-gray-400 md:text-[24px] md:tracking-widest lg:text-[16px]">
              {role}
            </h2>

            <h3 className="text-[22px] uppercase tracking-wide mt-1 md:text-[40px] lg:text-[28px]">
              {name}
            </h3>

            <p className="w-[85%] mt-6 flex text-center leading-6.5 md:w-[70%] md:text-[17px] md:leading-8 lg:text-start lg:text-[11px] lg:leading-5 lg:mt-4">
              {bio}
            </p>

            <div className="flex space-x-4 mt-20 md:mt-15">
              {crewData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                    idx === activeIdx
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative w-full h-[350px] flex items-end justify-center mt-10 md:mx-auto md:h-[450px] lg:mt-0 lg:w-1/2 lg:h-[360px] lg:justify-start">
            <img
              src={image}
              alt={name}
              className="h-full w-auto object-contain relative z-10"
            />

            {/* gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 md:hidden lg:block" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
