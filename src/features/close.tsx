import React from "react";
import closeIcon from "../assets/shared/icon-close.svg";

interface CloseProps {
  className?: string;
  onClick?: () => void;
}

const Close: React.FC<CloseProps> = ({ className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      <img src={closeIcon} alt="Close Menu" className="h-8 w-8" />
    </div>
  );
};

export default Close;
