import { StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { testimonials } from "../../data/testimonials";
import { ArrowButton } from "../buttons";

const TestimonialSection = () => {
  const [showIndex, setShowIndex] = useState(0);

  const incrementShowIndex = () => {
    setShowIndex(showIndex + 1);
  };

  const decrementShowIndex = () => {
    setShowIndex(showIndex - 1);
  };

  const isDecrementButtonEnabled = () => showIndex > 0;
  const isIncrementButtonEnabled = () => showIndex < testimonials.length - 1;

  return (
    <section className="bg-slate-100">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-14">
        <div className="flex gap-8 my-24">
          <div className="flex flex-col justify-center items-center h-full gap-4">
            <ArrowButton
              onClick={decrementShowIndex}
              disabled={!isDecrementButtonEnabled()}
              className="-rotate-90"
            />
            <ArrowButton
              onClick={incrementShowIndex}
              disabled={!isIncrementButtonEnabled()}
              className="rotate-90"
            />
          </div>
          <div className="flex-1 items-center justify-center flex">
            <div className="relative w-full rounded-xl bg-white pt-12 p-6">
              <img
                src={testimonials[showIndex].avatar}
                alt="User Avatar"
                className="w-14 h-14 rounded-full object-cover absolute left-8 -top-4 ring-8 ring-white"
              />
              <h2 className="font-bold text-2xl">
                {testimonials[showIndex].name}
              </h2>
              <div className="flex items-center gap-1 py-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  let isActive = index <= testimonials[showIndex].rating - 1;
                  return (
                    <StarIcon
                      className={`w-6 h-6 ${
                        isActive ? "text-orange-500" : "text-orange-100"
                      }`}
                    />
                  );
                })}
              </div>
              <p>
                <span className="opacity-50">"</span>
                <span>{testimonials[showIndex].comment}</span>
                <span className="opacity-50">"</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="font-black text-5xl mb-6 leading-snug">
            Testimonials BalloonKUN Customers
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            laboriosam dolore corrupti aperiam omnis possimus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
