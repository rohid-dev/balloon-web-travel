import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useRef, useState } from "react";
import destinations from "../../data/destinations";
import { Card } from "../cards";
import Header from "../Header";
import { PlayIcon } from "../icons";

const HeroSection = () => {
  const heroSection = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = useState(0);

  const onScrollDownClick = () => {
    if (heroSection.current) {
      window.scrollTo(0, heroSection.current.clientHeight);
    }
  };

  const callToAction = () => {
    return (
      <section className="w-full h-full bg-gray-900 text-white relative min-h-screen lg:min-h-0">
        <div className="absolute w-[500px] h-[500px] bg-white/40 -top-[250px] -left-[250px] rounded-full blur-[500px]"></div>
        <div className="absolute inset-0 z-10 flex flex-col">
          <div className="flex justify-center flex-col flex-1 px-4 md:px-14 py-12 pt-32 items-start">
            <h2 className="font-bold text-4xl md:text-7xl leading-snug mb-8">
              <span className="block">Enjoy your vacation</span>
              <span className="block">
                With <span className="text-yellow-500">BalloonKUN</span>
              </span>
              <span className="block">Travel</span>
            </h2>
            <p className="md:text-2xl leading-snug opacity-70 mb-14">
              With BalloonKUN you can feel a new experience by riding a hot air
              balloon with a very beautiful surrounding view to spoil your eyes.
            </p>
            <div className="flex flex-col w-full md:flex-row items-center gap-8 mt-auto md:mt-0">
              <Link href="#destinations">
                <a className="bg-gradient-to-br from-yellow-300 to-yellow-600 h-14 w-full md:w-auto px-4 rounded-full flex flow-row items-center justify-center gap-4 shadow-lg shadow-yellow-500/30">
                  <p className="text-slate-900 ml-4 mr-auto">
                    View Destinations
                  </p>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900">
                    <ChevronRightIcon className="w-5 h-5" />
                  </div>
                </a>
              </Link>
              <Link href="#gallery">
                <a className="h-14 px-4 rounded-full flex flow-row items-center justify-center gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white ring-4 ring-white/20 group-hover:ring-8 group-active:ring-4 transition-all">
                    <PlayIcon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p>Our Gallery</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const featuredCards = () => {
    return (
      <div className="flex-1 w-full h-full relative overflow-hidden min-h-screen lg:min-h-0">
        {destinations.map((item, index) => (
          <img
            key={index}
            src={item.coverImage}
            className={`absolute w-full h-full inset-0 object-cover transition-all duration-300 scale-150 ${
              index === selectedCard ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute w-full h-full inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150" />
        <div className="absolute w-full h-full inset-0 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-[400px] relative h-full">
            {destinations.map((item, index) => (
              <div
                className={`absolute w-full top-20 md:top-1/2 transition-all duration-300 ease-in-out md:-translate-y-1/2 ${
                  index !== selectedCard
                    ? "scale-75 opacity-50 pointer-events-none"
                    : "scale-100 opacity-100 pointer-events-auto"
                }`}
                style={{
                  left: (index - selectedCard) * 400,
                  pointerEvents: index === selectedCard ? "auto" : "none",
                }}
                key={index}
              >
                <Card destination={item} />
              </div>
            ))}
          </div>

          <div className="absolute bottom-48 md:bottom-10 flex items-end">
            {destinations.map((_, index) => (
              <button
                className="p-2 md:p-4 group"
                onClick={() => {
                  setSelectedCard(index);
                }}
              >
                <div
                  className={`w-6 md:w-10 h-1 bg-white rounded transition-all duration-300 ${
                    index !== selectedCard
                      ? "opacity-50 group-hover:opacity-75"
                      : "opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {selectedCard > 0 && (
            <button
              onClick={() => {
                setSelectedCard(selectedCard - 1);
              }}
              className="absolute md:top-1/2 bottom-10 -translate-y-1/2 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 ring-8 ring-white/50 flex items-center justify-center"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
          )}
          {selectedCard < destinations.length - 1 && (
            <button
              onClick={() => {
                setSelectedCard(selectedCard + 1);
              }}
              className="absolute md:top-1/2 bottom-10 -translate-y-1/2 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 ring-8 ring-white/50 flex items-center justify-center"
            >
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="w-full lg:h-screen lg:max-h-[1080px] flex flex-col lg:flex-row relative overflow-hidden"
      ref={heroSection}
    >
      <div className="flex-[4]">{callToAction()}</div>
      <div className="flex-[3]">{featuredCards()}</div>
      <div className="w-full absolute top-0 text-white">
        <Header />
      </div>
      <button
        onClick={onScrollDownClick}
        className="hidden lg:flex absolute bottom-10 left-[57.14%] -translate-x-1/2 w-24 h-24 rounded-full bg-white text-white items-center justify-center bg-opacity-20"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center">
          <ArrowDownIcon className="w-8 h-8 text-white" />
        </div>
      </button>
    </div>
  );
};

export default HeroSection;
