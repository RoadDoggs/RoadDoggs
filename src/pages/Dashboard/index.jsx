import React from 'react'

const Dashboard = () => {
    const user = {
      name: "Sarah J.",
      rank: "Pro Scout",
      profilePicture: "https://i.pravatar.cc/100?img=5",
    };
  return (
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="relative">
                  <span className="font-hand text-3xl text-rust -rotate-2 block absolute -top-8 left-0">
                      Welcome back
                  </span><h1 className="font-serif text-5xl md:text-6xl text-ink leading-[0.9]">Your Logbook</h1>
                  <p className="font-mono text-xs text-gray-500 mt-4 max-w-md">Pick up where you left off or start sketching a new adventure.</p>
              </div>

              <div className="flex items-center gap-4">
                  <button type='button' className="font-mono text-xs font-bold text-gray-600 hover:text-ink hover:underline decoration-rust underline-offset-4 decoration-2">
                      Import Trip
                  </button>
                  <button type="button" className="group relative bg-rust text-white px-6 py-3 font-mono font-bold uppercase shadow-rough hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-ink">
                      <span className="flex items-center gap-2">
                          <i className="ph-bold ph-plus"></i> Create New Trip
                      </span>
                  </button>
              </div>
          </div>
     </main>
  )
}

export default Dashboard