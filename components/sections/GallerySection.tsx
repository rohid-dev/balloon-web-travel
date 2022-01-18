import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { PlayButton } from "../buttons";

const GallerySection = () => {
  return (
    <section id="gallery" className="mb-48 scroll-m-10">
      <div className="container mx-auto max-w-7xl px-4 text-center md:text-left">
        <h2 className="font-black text-4xl md:text-5xl mb-8">Our Gallery</h2>
        <div className="flex flex-col md:flex-row gap-4  justify-between items-center mb-14">
          <p className="max-w-2xl text-xl flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            temporibus saepe voluptatum modi fugiat odit odio nostrum quos
            maiores ut!
          </p>
          <Link href="#">
            <a className="flex gap-2 items-center text-blue-500">
              <p className="text-xl">View All</p>
              <ArrowRightIcon className="w-6 h-6" />
            </a>
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:h-[500px] grid md:grid-cols-2 gap-4">
            <div className="h-[300px] md:h-full md:col-span-2 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589402903416-2d02f303d12c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[300px] md:h-full rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1641157140295-b477ca55ddef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Image"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayButton />
              </div>
            </div>
            <div className="h-[300px] md:h-full rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1640608178753-a56a4fa34b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
