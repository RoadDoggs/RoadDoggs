import React from 'react'

const TechnicalCapabilities = () => {
  return (
    <section className="py-24 bg-ink text-paper relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px),  linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-paper/20 pb-8">
          <div>
            <p className="font-mono text-rust text-xs uppercase mb-2">
              System_Check_Complete
            </p>
            <h2 className="font-serif text-5xl">
              Under the <span className="italic font-light">Hood</span>
            </h2>
          </div>

          <div className="hidden md:block transform rotate-6">
            <p className="font-hand text-2xl text-paper/70">
              "Tech that works offline"
            </p>
            <svg
              width="100"
              height="40"
              className="text-paper/70 transform rotate-180"
            >
              <path
                d="M10,20 Q50,5 90,20"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              />
              <path
                d="M15,15 L10,20 L18,25"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="border-l border-paper/20 pl-6 group">
            <div className="mb-4">
              <i className="ph ph-gas-pump text-3xl text-rust group-hover:scale-110 transition-transform inline-block"></i>
            </div>
            <h4 className="font-mono font-bold text-lg mb-2">FUEL_LOGIC</h4>
            <p className="font-mono text-xs text-paper/60 leading-relaxed">
              Algorithmic prediction of gas prices along remote routes. We know
              where the cheap fuel hides.
            </p>
          </div>

          <div className="border-l border-paper/20 pl-6 group">
            <div className="mb-4">
              <i className="ph ph-cloud-warning text-3xl text-sage group-hover:scale-110 transition-transform inline-block"></i>
            </div>
            <h4 className="font-mono font-bold text-lg mb-2">STORM_AVOID</h4>
            <p className="font-mono text-xs text-paper/60 leading-relaxed">
              Real-time rerouting based on NOAA radar data. Dodge the hail,
              chase the sun.
            </p>
          </div>

          <div className="border-l border-paper/20 pl-6 group">
            <div className="mb-4">
              <i className="ph ph-satellite text-3xl text-sand group-hover:scale-110 transition-transform inline-block"></i>
            </div>
            <h4 className="font-mono font-bold text-lg mb-2">ANALOG_CACHE</h4>
            <p className="font-mono text-xs text-paper/60 leading-relaxed">
              Downloads 50mi radius of maps automatically. Works when your bars
              hit zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalCapabilities