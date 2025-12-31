import React, { useState } from "react";

const Header = () => {
  const [user, setUser] = useState({
    name: "Sarah J.",
    rank: "Pro Scout",
    profilePicture: "https://i.pravatar.cc/100?img=5",
  });
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-2 border-ink/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group" rel="nofollow">
            <div className="w-10 h-10 border-2 border-ink rounded-full flex items-center justify-center bg-rust text-white shadow-rough group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              <i className="ph-fill ph-dog text-xl"></i>
            </div>
            <span className="font-serif font-black text-xl tracking-tighter group-hover:text-rust transition-colors">
              RoadDoggs
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#"
              className="font-mono text-xls font-bold uppercase px-4 py-2 bg-ink text-paper rounded-sm transform -rotate-1 shadow-sm"
              rel="nofollow"
            >
              Trips
            </a>
            <a
              href="#"
              className="font-mono text-xs font-bold uppercase px-4 py-2 hover:bg-ink-5 rounded-sm transition-colors text-gray-500 hover:text-ink"
              rel="nofollow"
            >
              Explore
            </a>
            <a
              href="#"
              className="font-mono text-xs font-bold uppercase px-4 py-2 hover:bg-ink/5 rounded-sm transition-colors text-gray-500 hover:text-ink"
              rel="nofollow"
            >
              Community
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative group" type="button">
            <i className="ph-bold ph-bell text-xl text-ink group-hover:text-rust transition-colors"></i>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rust rounded-full border-2 border-paper"></span>
          </button>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="font-serif font-bold text-sm leading-none">
                {user.name}
              </p>
              <p className="font-mono text-[10px] text-gray-500 uppercase">
                {user.rank}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-ink overflow-hidden shadow-sm group-hover:shadow-rough transition-all">
              <img
                src={user.profilePicture}
                alt="avatar"
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>
            <i className="ph-bold ph-caret-down text-xs"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
