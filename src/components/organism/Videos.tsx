"use client";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import VideoCard from "../atom/VideoCard";
const DragableCarousel = dynamic(() => import("../atom/DragableCarousel"), {
  ssr: false, // This ensures that the component is not server-side rendered
});

interface VideosProps {}

const Videos: FC<VideosProps> = ({}) => {
  return (
    <div className="w-full">
        
      <DragableCarousel>
        <VideoCard url="/video1.mp4" />
        <VideoCard url="/video2.mp4" />
        <VideoCard url="/video1.mp4" />
        <VideoCard url="/video1.mp4" />
        <VideoCard url="/video1.mp4" />
        <VideoCard url="/video1.mp4" />
        <VideoCard url="/video1.mp4" />
      </DragableCarousel>{" "}
    </div>
  );
};

export default Videos;
