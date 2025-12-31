import React from "react";
import { motion, spring } from "motion/react";
import El1 from "./elements/El1";
import El2 from "./elements/El2";
import El3 from "./elements/El3";
import El4 from "./elements/El4";
import { useNavigate } from "react-router";

function ParallaxCollage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full max-w-7xl mx-auto h-175 mt-12 md:mt-0 pb-32">
      <El1 />

      <El2 />

      <El3 />

     <El4 />

      <div
        className="absolute right-0 md:right-20 top-80 md:top-60 w-56 bg-sand p-6 shadow-lg rotate-3 parallax-el text-ink z-20"
        data-speed="0.08"
      >
        <div className="w-4 h-4 rounded-full bg-red-800/80 mx-auto mb-4 border border-ink/20 shadow-inner"></div>
        <p className="font-hand text-3xl leading-tight">
          Stop looking at the ETA and start looking out the window.
        </p>
        <button data-test="plan-trip-button" className="mt-6 w-full border border-ink py-2 uppercase font-mono text-xs hover:bg-ink hover:text-paper transition-colors cursor-pointer" onClick={() => navigate('/auth/signup')}>
          Plan Trip
        </button>
      </div>
    </div>
  );
}

export default ParallaxCollage;
