import React from "react";

const Features = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="font-hand text-4xl text-rust -rotate-2 inline-block">
            Curated Vibes
          </span>
          <h3 className="font-serif text-6xl mt-2">Tools for Drift.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-ink transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <div className="relative bg-paper border-2 border-ink p-8 h-full">
              <div className="flex justify-between items-start mb-8">
                <i className="ph ph-paint-brush text-4xl text-rust"></i>
                <span className="font-mono text-xs border border-ink px-2 py-1 rounded-full">
                  REL 1.0
                </span>
              </div>
              <h4 className="font-serif text-3xl mb-4" data-test="feature-title-1">Route Painter</h4>
              <p className="font-mono text-sm text-gray-600 mb-8 max-w-xs">
                Don't just pick a destination. Pick a mood. Scenic, haunted, or
                "barely a road."
              </p>

              <div
                className="bg-ink p-4 -mx-4 -mb-4 rotate-1 group-hover:rotate-0 transition-transform parallax-scroll"
                data-speed="0.04"
              >
                <div className="h-2 w-full bg-rust mb-2"></div>
                <div className="flex justify-between font-mono text-[10px] text-paper/60 uppercase">
                  <span>Start: Boring</span>
                  <span>End: Epic</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group mt-12 md:mt-0">
            <div className="absolute inset-0 bg-sage transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <div className="relative bg-white border-2 border-ink p-8 h-full">
              <div className="flex justify-between items-start mb-8">
                <i className="ph ph-users-three text-4xl text-ink"></i>
                <span className="font-mono text-xs border border-ink px-2 py-1 rounded-full">
                  BETA
                </span>
              </div>
              <h4 className="font-serif text-3xl mb-4" data-test="feature-title-2">Pack Planning</h4>
              <p className="font-mono text-sm text-gray-600 mb-8 max-w-xs">
                A shared canvas for the whole crew. Drag, drop, and vote on
                where to sleep.
              </p>

              <div
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 rotate-90 md:rotate-0 parallax-scroll"
                data-speed="-0.03"
              >
                <span className="font-hand text-2xl text-ink bg-sand px-2">
                  "No more group texts"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
