import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import destinations from "../../data/destinations";
import { ArrowButton } from "../buttons";
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
    <div className="grid lg:grid-cols-3 gap-8 lg:text-left text-center">
      <h2 className="font-black text-4xl md:text-5xl leading-snug">
        Most Popular Destinations
      </h2>
      <p className="text-xl leading-relaxed flex-1">
        Beberapa destinasi paling populer untuk menaiki balon udara dengan
        pemandangan yang indah.
      </p>
      <div className="flex justify-center lg:justify-end items-center gap-8">
        <ArrowButton
          onClick={decrementShowIndex}
          disabled={!isDecrementButtonEnabled()}
          className="rotate-180"
        />
        <ArrowButton
          onClick={incrementShowIndex}
          disabled={!isIncrementButtonEnabled()}
        />
      </div>
    </div>
  );

  const CardList = () => (
    <div className="gap-8 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center">
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
    <section className="mb-48" id="popular-destinations">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader />
        <div className="h-14"></div>
        <CardList />
      </div>
    </section>
  );
};

export default PopularDestinationsList;
