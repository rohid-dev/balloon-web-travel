import React from "react";
import { PlayIcon } from "../icons";

const PlayButton = ({
  className,
  onClick,
  disabled,
}: {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`w-14 h-14 rounded-full flex items-center justify-center bg-white ring-4 hover:ring-8 active:ring-4 transition-all ring-white/25 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <PlayIcon className="w-12 h-12 text-yellow-500" />
    </button>
  );
};

export default PlayButton;
