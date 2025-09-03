import React from "react";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";

interface HamburgerProps {
  className?: string;
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      <img src={hamburgerIcon} alt="Hamburger Menu" className="h-5 w-6" />
    </div>
  );
};

export default Hamburger;
