"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
// import Flickity from "flickity";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

interface DragableCarouselProps {
  children: ReactNode;
}

const DragableCarousel: FC<DragableCarouselProps> = ({ children }) => {
  return (
    <Flickity
      className="carousel outline-none gap-10"
      disableImagesLoaded={true}
      elementType={'div'} // default 'div'
      reloadOnUpdate // default false
      static // default false
      options={{
        draggable: true,
        initialIndex: 0,
        pageDots: true,
        contain: true,
        prevNextButtons: true,
        lazyLoad: true,
      }} // takes flickity options {}
    >
      {children}
    </Flickity>
  );
};

export default DragableCarousel;