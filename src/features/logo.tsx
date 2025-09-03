import React from "react";
import LogoIcon from "../assets/shared/logo.svg";

const Logo: React.FC = () => {
  return (
    <div>
      <img src={LogoIcon} alt="Logo" className="h-10 w-10 lg:h-9 lg:w-9" />
    </div>
  );
};

export default Logo;
