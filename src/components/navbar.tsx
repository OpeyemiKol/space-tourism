import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "../features/hamburger";
import Logo from "../features/logo";
import Close from "../features/close";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { id: "00", name: "Home", path: "/" },
    { id: "01", name: "Destination", path: "/destination" },
    { id: "02", name: "Crew", path: "/crew" },
    { id: "03", name: "Technology", path: "/technology" },
  ];

  return (
    <>
      <nav className="relative flex items-center h-[88px] md:h-[96px] lg:h-[96px] px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Logo />

        {/* Divider (desktop only) */}
        <div className="hidden lg:block absolute left-[150px] right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gray-500 z-0"></div>

        {/* Links (tablet + desktop) */}
        <div
          className="hidden md:flex font-barlow gap-8 md:gap-15
         md:absolute lg:absolute right-0 
            md:top-0 lg:top-4
            h-[96px] lg:h-[70px] items-center justify-center
          backdrop-blur-lg bg-white/5 
          md:w-[650px] lg:w-[700px] px-10 lg:px-20
          z-10"
        >
          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`uppercase tracking-widest md:text-[14px] lg:text-[11px] text-white flex items-center gap-2 h-full border-b-2 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                <span className="font-bold">{link.id}</span>
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Hamburger menu (mobile only) */}
        <div className="ml-auto md:hidden">
          <Hamburger
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Sidebar (mobile only) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 backdrop-blur-lg z-50 flex flex-col pl-6 pt-6 pb-6 pr-0 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <Close
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-4 mb-8 cursor-pointer"
        />

        {/* Nav links */}
        <div className="flex flex-col mt-30 gap-10">
          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                end={link.path === "/"}
                className="inline-flex items-center gap-2 uppercase tracking-widest text-white"
              >
                <span
                  className={`flex items-center justify-between w-full ${
                    isActive
                      ? "border-r-4 border-white"
                      : "border-r-4 border-transparent hover:border-gray-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold">{link.id}</span>
                    <span>{link.name}</span>
                  </span>
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Dark overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 lg:hidden"
        />
      )}
    </>
  );
}

export default Navbar;
