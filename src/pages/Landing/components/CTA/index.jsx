import React from "react";

const CTA = () => {
  return (
    <section className="py-24 bg-rust relative overflow-hidden flex items-center justify-center text-paper border-b-8 border-ink">
      <div className="absolute inset-0 noise-layer mix-blend-multiply opacity-20"></div>
      <svg
        class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M-10 100 Q 50 -20 110 100"
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
      </svg>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <div className="inline-block border border-paper px-4 py-1 mb-8 rounded-full -rotate-2 hover:rotate-0 transition-transform cursor-crosshair">
          <span className="font-mono text-xs uppercase tracking-widest">
            Limited Beta Access // Vol. 3
          </span>
        </div>
        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9]">
          Don't just drive. <br />
          <span className="italic opacity-80">Roam.</span>
        </h2>
        <p className="font-mono text-sm md:text-base mb-10 opacity-90 max-w-lg mx-auto leading-relaxed">
          Join 10,000+ early adopters finding the routes that dont show up on
          standard GPS.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-paper text-ink px-10 py-5 font-mono font-bold uppercase hover:bg-ink hover:text-paper transition-all shadow-[6px_6px_0px_0px_rgba(35,35,35,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none relative group">
            Start Your Engine
          </button>
          <a
            href="#"
            className="font-hand text-3xl text-paper hover:text-ink transition-colors rotate-3 hover:rotate-0"
            rel="nofollow"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
