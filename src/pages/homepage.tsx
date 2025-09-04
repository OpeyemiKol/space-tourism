import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <main className="flex flex-col md:gap-20 lg:flex-row items-center lg:items-start lg:gap-80 w-full px-6 md:px-12 lg:px-20 text-white mt-10">
      {/* Left side: text content */}
      <div className="text-center md:max-w-lg lg:text-left lg:max-w-md lg:mt-20 lg:ml-10">
        <p className="font-barlow font-normal text-custom tracking-widest text-[16px] md:text-[20px] md:mt-10 lg:mt-20 lg:text-[16px]">
          SO, YOU WANT TO TRAVEL TO
        </p>

        <h1 className="flex items-center justify-center text-[80px] h-[92px] mt-10 font-bellefair md:text-[120px] md:mb-10 lg:justify-start lg:text-[80px] lg:mt-2 lg:mb-0">
          SPACE
        </h1>

        <p className="lg:w-[380px] text-[16px] text-custom md:text-[16px] lg:text-[12px] leading-8 md:leading-7 mt-8 lg:mt-2">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* Right side: explore button */}
      <div className="flex justify-center mt-40 md:mt-0 lg:justify-start lg:mt-50">
        <Link
          to="/destination/moon"
          className="font-bellefair h-[144px] w-[144px] md:h-[250px] md:w-[250px] lg:h-40 lg:w-40 rounded-full bg-white text-black text-[18px] md:text-[28px]
          flex items-center justify-center cursor-pointer lg:font-normal lg:text-[20px]
          hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)] transition-shadow duration-500"
        >
          EXPLORE
        </Link>
      </div>
    </main>
  );
};

export default Homepage;
