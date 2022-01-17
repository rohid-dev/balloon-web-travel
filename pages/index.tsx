import React, { Fragment } from "react";
import {
  HeroSection,
  BestDestinationsList,
  BrandsSection,
  PopularDestinationsList,
  ServicesSection,
  GallerySection,
  TestimonialSection,
} from "../components/sections";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <BrandsSection />
      <BestDestinationsList />
      <PopularDestinationsList />
      <ServicesSection />
      <GallerySection />
      <TestimonialSection />
    </Fragment>
  );
};

export default HomePage;
