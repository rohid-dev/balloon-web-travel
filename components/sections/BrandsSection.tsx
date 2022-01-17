import React from "react";

const BrandsSection = () => {
  return (
    <section className="bg-gray-100 mb-48">
      <div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto">
        <img
          src="/images/brand1.png"
          alt="Brand Image"
          className="max-h-[32px] w-full h-full object-contain my-10"
        />
        <img
          src="/images/brand4.png"
          alt="Brand Image"
          className="max-h-[32px] w-full h-full object-contain my-10"
        />
        <img
          src="/images/brand3.png"
          alt="Brand Image"
          className="max-h-[32px] w-full h-full object-contain my-10"
        />
        <img
          src="/images/brand2.png"
          alt="Brand Image"
          className="max-h-[32px] w-full h-full object-contain my-10"
        />
      </div>
    </section>
  );
};

export default BrandsSection;
