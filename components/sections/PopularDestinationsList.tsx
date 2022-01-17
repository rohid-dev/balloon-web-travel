import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import destinations from "../../data/destinations";
import { Card } from "../cards";

const PopularDestinationsList = () => {
  const [popularDestinations, setPopularDestinations] = useState(destinations);
  const [showIndex, setShowIndex] = useState(0);

  const incrementShowIndex = () => {
    setShowIndex(showIndex + 3);
  };

  const decrementShowIndex = () => {
    setShowIndex(showIndex - 3);
  };

  const isDecrementButtonEnabled = () => showIndex - 3 >= 0;
  const isIncrementButtonEnabled = () =>
    showIndex + 3 < popularDestinations.length;

  const SectionHeader = () => (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex items-center justify-start">
          <h2 className="font-black text-5xl leading-snug">
            Most Popular Destinations
          </h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="text-xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            odio repellendus, magni doloremque perferendis repellat.
          </p>
        </div>
        <div className="flex justify-end items-center gap-8">
          <button
            className="w-14 h-14 rounded-full ring-4 ring-gray-200 active:bg-gradient-to-tl bg-gradient-to-br disabled:bg-none disabled:text-slate-300 from-slate-600 to-slate-900 text-white flex items-center justify-center"
            onClick={decrementShowIndex}
            disabled={!isDecrementButtonEnabled()}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button
            className="w-14 h-14 rounded-full ring-4 ring-gray-200 active:bg-gradient-to-tl bg-gradient-to-br disabled:bg-none disabled:text-slate-300 from-slate-600 to-slate-900 text-white flex items-center justify-center"
            onClick={incrementShowIndex}
            disabled={!isIncrementButtonEnabled()}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );

  const CardList = () => (
    <div className="flex justify-center items-center flex-col md:flex-row gap-8 content-center justify-items-center">
      {popularDestinations.slice(showIndex, showIndex + 3).map((item) => (
        <Card
          key={item.id}
          destination={item}
          className="shadow-none hover:shadow-xl transition-shadow duration-300"
        />
      ))}
    </div>
  );
  return (
    <section className="mb-48">
      <SectionHeader />
      <div className="h-14"></div>
      <CardList />
    </section>
  );
};

export default PopularDestinationsList;