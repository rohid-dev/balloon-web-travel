import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

const ArrowButton = ({
  onClick,
  disabled,
  className,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={`w-14 h-14 rounded-full ring-4 ring-gray-200 active:bg-gradient-to-tl bg-gradient-to-br disabled:bg-none disabled:text-slate-300 from-slate-600 to-slate-900 text-white flex items-center justify-center ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowRightIcon className="w-6 h-6" />
    </button>
  );
};

export default ArrowButton;
