import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const GallerySection = () => {
  return (
    <section className="mb-48">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-black text-5xl mb-8">Our Gallery</h2>
        <div className="flex justify-between items-center mb-14">
          <p className="max-w-2xl text-xl">
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
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-[500px] grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589402903416-2d02f303d12c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1641157140295-b477ca55ddef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
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
