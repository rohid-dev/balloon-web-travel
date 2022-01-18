import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import destinations from "../../data/destinations";
import { Card } from "../cards";

enum ShortOption {
  Recommended = "Recommended",
  Rating = "Rating",
  FrequentlyVisited = "Frequently Visited",
}

const BestDestinationsList = () => {
  const [selectedShortItem, setSelectedShortItem] = useState<ShortOption>(
    ShortOption.Recommended
  );
  const [bestDestinations, setBestDestinations] = useState(
    destinations.slice(0, 3)
  );

  useEffect(() => {
    switch (selectedShortItem) {
      case ShortOption.Recommended:
        setBestDestinations([
          destinations[0],
          destinations[2],
          destinations[4],
        ]);
        break;

      case ShortOption.Rating:
        setBestDestinations([
          destinations[3],
          destinations[1],
          destinations[2],
        ]);
        break;
      case ShortOption.FrequentlyVisited:
        setBestDestinations([
          destinations[2],
          destinations[3],
          destinations[1],
        ]);
        break;

      default:
        break;
    }
  }, [selectedShortItem]);

  const RenderShortingButtons = () => (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 bg-slate-100 p-1 rounded-full overflow-hidden">
        <button
          className={`px-3 md:px-8 py-2 md:h-12 text-sm md:text-lg rounded-full truncate ${
            selectedShortItem === ShortOption.Recommended
              ? "bg-gradient-to-br from-yellow-300 to-yellow-500"
              : "text-slate-600"
          }`}
          onClick={() => {
            setSelectedShortItem(ShortOption.Recommended);
          }}
        >
          {ShortOption.Recommended}
        </button>
        <button
          className={`px-3 md:px-8 py-2 md:h-12 text-sm md:text-lg rounded-full ${
            selectedShortItem === ShortOption.Rating
              ? "bg-gradient-to-br from-yellow-300 to-yellow-500"
              : "text-slate-600"
          }`}
          onClick={() => {
            setSelectedShortItem(ShortOption.Rating);
          }}
        >
          {ShortOption.Rating}
        </button>
        <button
          className={`px-3 md:px-8 py-2 md:h-12 text-sm md:text-lg overflow-hidden rounded-full truncate ${
            selectedShortItem === ShortOption.FrequentlyVisited
              ? "bg-gradient-to-br from-yellow-300 to-yellow-500"
              : "text-slate-600"
          }`}
          onClick={() => {
            setSelectedShortItem(ShortOption.FrequentlyVisited);
          }}
        >
          {ShortOption.FrequentlyVisited}
        </button>
      </div>
    </div>
  );

  const CardList = () => (
    <div className="gap-8 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {bestDestinations.map((item) => (
        <Card
          key={item.id}
          destination={item}
          className="shadow-none hover:shadow-xl transition-shadow duration-300"
        />
      ))}
    </div>
  );

  return (
    <section id="destinations" className="mb-48 scroll-m-10">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-center font-bold text-4xl md:text-5xl mb-6">
          Best Place Destinations
        </h2>
        <p className="text-center md:text-xl max-w-lg mx-auto mb-6">
          We provide several spot options for those of you who want to ride a
          balloon
        </p>
        <RenderShortingButtons />
        <div className="my-12">
          <CardList />
        </div>
        <div className="flex items-center justify-center">
          <Link href="#">
            <a className="flex gap-2 text-blue-500">
              <p className="text-xl">View All</p>
              <ArrowRightIcon className="w-6 h-6" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestDestinationsList;
