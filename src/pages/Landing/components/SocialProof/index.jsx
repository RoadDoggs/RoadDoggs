import React from "react";

const SocialProof = () => {
  return (
    <section className="py-20 border-b border-ink/10 overflow-hidden relative">
      <div
        className="absolute -right-20 top-10 opacity-10 pointer-events-none rotate-12 parallax-scroll"
        data-speed="0.05"
      >
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path
            d="M10,10 Q50,100 10,190 M30,10 Q90,100 30,190"
            fill="none"
            stroke="#232323"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-hand text-3xl text-rust -rotate-2 block mb-2">
              Word on the street
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">
              The Co-Pilot Reports
            </h2>
          </div>
          <div
            className="border-2 border-rust p-2 px-4 rounded-sm rotate-2 opacity-90 mask-ink hover:rotate-0 transition-transform cursor-help parallax-scroll"
            data-speed="-0.02"
          >
            <div className="flex text-rust gap-1 text-xl">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star-half"></i>
            </div>
            <p className="font-mono text-[10px] text-center mt-1 uppercase tracking-widest text-rust font-bold">
              4.9/5 Avg. Rating
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <div className="relative group parallax-scroll" data-speed="0.03">
            <div className="bg-white p-6 shadow-sm border-t-8 border-dotted border-gray-300 relative rotate-1 transition-transform group-hover:rotate-0 h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-paper rounded-full border border-gray-300 shadow-inner"></div>
              <p className="font-mono text-xs mb-4 text-gray-400" data-test="social-proof-item-1">
                RECEIPT #0492 // USER: SARAH_J
              </p>
              <p className="font-serif text-xl leading-snug mb-6" data-test="social-proof-item-2">
                Finally, an app that understands I want to stop for weird
                roadside attractions, not just gas stations.
              </p>
              <div className="font-mono text-[10px] uppercase border-t border-ink/10 pt-4 flex justify-between mt-auto">
                <span>Route: Route 66</span>
                <span className="text-rust">VERIFIED</span>
              </div>
            </div>
          </div>

          <div
            className="relative group mt-8 md:mt-0 parallax-scroll"
            data-speed="-0.04"
          >
            <div className="bg-[#fcfcf0] p-6 shadow-lg -rotate-2 transition-transform group-hover:rotate-0 h-full relative">
              <div className="tape w-24 h-8 -top-3 right-10 rotate-3 opacity-80"></div>
              <p className="font-hand text-3xl leading-snug text-ink/90 mb-4 pt-4">
                "Saved us from a boring highway death. We found a campsite with
                zero cell service and 100% vibes."
              </p>
              <div className="absolute bottom-6 right-6 flex items-center gap-3">
                <div data-test="social-proof-item-3" className="font-hand text-xl text-gray-500 transform -rotate-6">
                  @Nomad_Mike
                </div>
              </div>
            </div>
          </div>

          <div className="relative group parallax-scroll" data-speed="0.06">
            <div className="tape w-20 h-6 -top-2 left-10 -rotate-12 z-20"></div>
            <div className="bg-white p-3 pb-12 shadow-xl rotate-3 transition-transform group-hover:rotate-0 h-full">
              <div className="w-full aspect-4/3 bg-gray-200 mb-4 overflow-hidden filter sepia-[.3]">
                <img
                  src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="font-hand text-2xl text-center text-ink/80 transform -rotate-1">
                "Best co-pilot ever. &lt;3"
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-dashed border-ink/30 pt-10">
          <p className="font-mono text-xs text-center mb-6 uppercase tracking-widest opacity-50">
            seen in the wild
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 grayscale mix-blend-multiply hover:opacity-80 transition-opacity duration-500">
            <span className="font-werif font-black text-3xl tracking-tight">
              OUTSIDE
            </span>{" "}
            <span className="font-mono font-bold text-2xl tracking-tighter border-2 border-ink p-1 rotate-2">
              VanLife Mag
            </span>
            <span className="font-serif font-bold text-2xl italic">
              The Drifter
            </span>
            <span className="font-sans font-black text-2xl -rotate-2">
              HUCKBERRY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
