import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { WhatsAppIcon } from "./icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-32 px-14">
      <div className="flex-1 flex flex-row items-center gap-12 z-10">
        <Link href="/">
          <a className="text-2xl tracking-tight uppercase font-bold">
            BALLOONKUN
          </a>
        </Link>
        <div className="w-4"></div>
        <Link href="/">
          <a className="text tracking-wide flex items-center gap-1">
            <p>Destinations</p>
            {/* <ChevronDownIcon className="w-4 h-4" /> */}
          </a>
        </Link>
        <Link href="/">
          <a className="text tracking-wide">About Us</a>
        </Link>
        <Link href="/">
          <a className="text tracking-wide">Contact Us</a>
        </Link>
      </div>

      <div className="flex items-center">
        <button className="flex items-center p-2 rounded-full bg-gray-500/50 backdrop-blur-md">
          <p className="mx-4 text-lg font-medium">Jhon Doe</p>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
