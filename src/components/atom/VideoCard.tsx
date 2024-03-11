"use client";
import ReactPlayer from "react-player";
import React, { FC, useState } from "react";

interface VideoCardProps {
  url: string;
}

const VideoCard: FC<VideoCardProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-64 h-80  mx-10 overflow-hidden cursor-default rounded-2xl group relative top-0 select-none">
      <ReactPlayer
        className={" absolute top-0 -left-48 flex w-64 overflow-hidden h-96 justify-center items-center rounded-2xl"}
        controls={false} // Hide default controls
        url={url}
        playing={isPlaying ? true : false}
      />
      <div className="absolute w-full h-full top-0 bg-opacity-25 rounded-2xl overflow-hidden ease-in-out duration-300 transform transition-all group-hover:translate-y-0 translate-y-full bg-black text-white flex justify-center items-center">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
