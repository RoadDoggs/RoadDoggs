import React from "react";
import ParallaxCollage from "./components/ParallaxCollage";
import Manifesto from "./components/Manifesto";
import SmartPOI from "./components/SmartPOI";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <div className="text-ink antialiased overflow-x-hidden selection:bg-rust selection:text-white">
      <div className="noise-layer"></div>
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-paper pointer-events-none">
        <a href="#" className="pointer-events-auto group" rel="nofollow">
          <span className="font-serif font-black text-3xl tracking-tighter">
            RoadDoggs
          </span>
          <span className="font-hand text-rust text-xl block -mt-3 ml-12 rotate-[-5deg] group-hover:rotate-0 transition-transform">
            beta vol.3
          </span>
        </a>
        <button className="pointer-events-auto bg-paper text-ink rounded-sm px-4 py-2 font-mono text-xs uppercase hover:bg-rust hover:text-white transition-colors border border-ink">
          [ Menu ]
        </button>
      </nav>
      <header className="relative min-h-[110vh] pt-32 px-6 overflow-hidden flex flex-col items-center">
        <div className="absolute top-1/4 left-10 font-hand text-6xl text-ink/10 -rotate-12 pointer-events-none select-none" data-test="hero-text-1">
          Are we there yet?
        </div>
        <div className="absolute bottom-1/4 right-10 font-hand text-6xl text-ink/10 rotate-12 pointer-events-none select-none">
          No Signal. Good.
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center mt-12 md:mt-24">
          <p className="font-mono text-xs md:text-sm text-rust uppercase tracking-[0.3em] mb-6">
            /// coordinates_unknown
          </p>
          <h1 className="font-serif font-black text-[15vw] md:text-[8rem] leading-[0.85] text-ink mix-blend-multiply relative inline-block" data-test="hero-text-2">
            GET{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #232323" }}
            >
              LOST
            </span>
            <div className="absolute -right-8 md:-right-32 top-1/2 w-24 md:w-48 transform -translate-y-1/2">
              <svg
                viewBox="0 0 100 50"
                className="w-full text-rust transform rotate-12"
              >
                <path
                  d="M10,25 Q30,5 50,25 T90,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M85,20 L95,25 L88,33"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="font-hand text-xl md:text-3xl text-ink absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                (but like, on purpose)
              </span>
            </div>
            
            
          </h1>
        </div>
        <ParallaxCollage />
      </header>
      <Manifesto />
      <SmartPOI />
      <SocialProof />
      <Features />
      <TechnicalCapabilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
