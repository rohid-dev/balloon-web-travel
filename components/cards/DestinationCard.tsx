import { LocationMarkerIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";
import { DestinationType } from "../../types";
import { PlayButton } from "../buttons";

const DestinationCard = ({
  destination,
  className,
}: {
  destination: DestinationType;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-3xl flex flex-col overflow-hidden max-w-[400px] shadow-2xl ${className}`}
    >
      <div className="w-full aspect-[4/3] relative z-10">
        <img
          src={destination.coverImage}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayButton />
        </div>
        <button className="flex items-center p-1.5 rounded-full bg-gray-500/20 absolute top-4 left-4 backdrop-blur-md">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
            <StarIcon className="w-5 h-5 text-white" />
          </div>
          <p className="mx-2 text-white">{destination.rating.toFixed(1)}</p>
        </button>
        <button className="flex items-center p-1.5 rounded-full bg-gray-500/20 absolute top-4 right-4 backdrop-blur-md">
          <LocationMarkerIcon className="w-5 h-5 text-white" />
          <p className="mr-2 ml-1 text-white">{destination.location}</p>
        </button>
      </div>
      <div className="flex flex-col gap-2 bg-white backdrop-blur-md p-4">
        <h2 className="font-bold text-xl">{destination.name}</h2>
        <p className="opacity-70">
          {destination.description.slice(0, 100)}
          {destination.description.length > 100 ? "..." : ""}
        </p>
      </div>
      <div className="bg-gray-100 p-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Price</p>
          <p>
            <span className="text-2xl font-bold">
              $
              {destination.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
            <span className="opacity-50">/Person</span>
          </p>
        </div>
        <button className="bg-gradient-to-br from-indigo-400 to-indigo-600 h-10 px-4 rounded-full text-white shadow-lg shadow-indigo-500/50">
          Ticket booking
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
