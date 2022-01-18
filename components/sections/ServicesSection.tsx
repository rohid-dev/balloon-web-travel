import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="mb-48">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 px-4">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <h2 className="font-black text-4xl md:text-5xl leading-snug">
            Get Experience Which are fun
          </h2>
          <p className="md:text-xl leading-relaxed">
            Bersama BalonKUN kamu bisa mendapatkan pengalaman menaiki balon
            udara yang sangat menyenangkan.
          </p>
          <div className="relative overflow-hidden aspect-[16/9] rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="Image"
              className="object-cover w-full h-full"
            />
            <button className="flex items-center p-1.5 rounded-full bg-white/20 absolute top-4 left-4 backdrop-blur-md">
              <LocationMarkerIcon className="w-5 h-5 text-white" />
              <p className="mr-2 ml-1 text-white">Turkey</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-evenly">
          <div className="flex items-start gap-6 md:gap-8">
            <img
              src="/svg/Wallet.svg"
              alt="Wallet"
              className="md:w-20 md:h-20 w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Affordable prices
              </h3>
              <p className="md:text-xl">
                Kami Menyediakan beberapa harga yang sangat terjangkau di
                bandingkan yang lainya.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6 md:gap-8">
            <img
              src="/svg/User.svg"
              alt="Wallet"
              className="md:w-20 md:h-20 w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Unforgettable experience
              </h3>
              <p className="md:text-xl">
                Kami memberikan pengalaman manaiki balon udara yang sangat tak
                terlupakan.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6 md:gap-8">
            <img
              src="/svg/Heart.svg"
              alt="Wallet"
              className="md:w-20 md:h-20 w-16 h-16 object-contain"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Very Friendly Service
              </h3>
              <p className="md:text-xl">
                Kami akan memberikan pelayanan yang sangat baik dan ramah demi
                pelanggan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
