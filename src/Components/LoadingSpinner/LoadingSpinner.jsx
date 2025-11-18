import React from "react";
import { Squircle } from "ldrs/react";
import "ldrs/react/Squircle.css";
const LoadingSpinner = () => {
  return (
    <div className="z-50 fixed top-0 left-0 h-screen w-full bg-white flex items-center justify-center">
      <Squircle
        size="37"
        stroke="5"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="0.9"
        color="black"
      />
    </div>
  );
};

export default LoadingSpinner;

// Default values shown
