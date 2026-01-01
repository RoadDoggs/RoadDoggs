import React from "react";

const Filter = () => {
  return (
    <div className="bg-white border-2 border-ink p-4 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] relative">
      <div className="tape w-24 h-6 -top-3 left-10 -rotate-2"></div>
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
        <div className="relative w-full lg:w-1/3">
          <i className="ph-bold ph-magnifying-glass absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full bg-transparent border-b-2 border-gray-200 py-2 pl-8 font-mono text-sm focus:outline-none focus:border-rust transition-colors placeholder-gray-400 text-ink"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center">
          <button className="px-3 py-1 font-mono text-[10px] font-bold uppercase bg-ink text-paper border border-ink rounded-full">
            All Trips
          </button>
          <button className="px-3 py-1 font-mono text-[10px] font-bold uppercase bg-transparent text-gray-500 border border-gray-300 hover:border-ink hover:text-ink rounded-full transition-colors">
            Upcoming
          </button>
          <button className="px-3 py-1 font-mono text-[10px] font-bold uppercase bg-transparent text-gray-500 border border-gray-300 hover:border-ink hover:text-ink rounded-full transition-colors">
            Past
          </button>
          <button className="px-3 py-1 font-mono text-[10px] font-bold uppercase bg-transparent text-gray-500 border border-gray-300 hover:border-ink hover:text-ink rounded-full transition-colors">
            Shared
          </button>
          <div className="w-px h-6 bg-gray-300 mx-2 hidden md:block"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-gray-400 uppercase">
            Sort:
          </span>
          <select className="bg-transparent font-serif font-bold text-sm focus:outline-none cursor-pointer">
            <option>Latest Updates</option>
            <option>Start Date</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
