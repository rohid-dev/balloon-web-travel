import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { WhatsAppIcon } from "./icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-24 md:h-32 px-4 md:px-14">
      <div className="flex-1 flex flex-row items-center gap-12 z-10">
        <Link href="/">
          <a className="text-2xl tracking-tight uppercase font-bold">
            BALLOONKUN
          </a>
        </Link>
        <div className="lg:flex gap-8 items-center hidden">
          <Link href="#destinations">
            <a className="text tracking-wide flex items-center gap-1 text-slate-300 hover:text-white">
              <p>Destinations</p>
              {/* <ChevronDownIcon className="w-4 h-4" /> */}
            </a>
          </Link>
          <Link href="#">
            <a className="text tracking-wide text-slate-300 hover:text-white">
              About Us
            </a>
          </Link>
          <Link href="#">
            <a className="text tracking-wide text-slate-300 hover:text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <button className="hidden md:flex items-center p-1 lg:p-2 rounded-full bg-gray-500/50 backdrop-blur-md">
          <p className="mx-4 lg:text-lg font-medium truncate">Jhon Doe</p>
          <div className="lg:w-10 lg:h-10 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
        </button>
        <button className="flex lg:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
