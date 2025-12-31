import React from "react";

const Blog = () => {
  return (
    <section data-test="field-notes-section" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <h2 className="font-serif text-6xl">Field Notes</h2>
          <span className="absolute top-0 right-70 font-hand text-3xl text-rust -rotate-6 hidden md:block">
            Stories from the road
          </span>
        </div>

        <div className="columns-1 md:columns-3 gap-8 space-7-8">
          <div className="break-inside-avoid relative group cursor-pointer">
            <div className="tape w-32 h-8 -top-3 left-1/2 -translate-x-1/2 z-10"></div>
            <div className="bg-white p-4 pb-8 shadow-lg rotate-1 transition-transform group-hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sbyUyMHRyYXZlbGVyfGVufDB8fDB8fHww"
                className="w-full aspect-4/3 object-cover filter sepia-[.3] mb-4"
              />
              <h3 data-test="article-title-1" className="font-serif text-2xl mb-2">The Van Life Lie?</h3>
              <p className="font-mono text-xs text-gray-500 mb-4">
                Oct 12 - 4 min read
              </p>
              <p className="font-sans text-sm line-clamp-3">
                It's not all about sunsets and perfectly brewed coffee.
                Sometimes it's a flat tire in Nevada.
              </p>
            </div>
          </div>

          <div className="break-inside-avoid relative group cursor-pointer pt-6">
            <div className="bg-rust text-paper p-8 shadow-lg -rotate-2 transition-transform group-hover:rotate-0">
              <i className="ph ph-quotes text-4xl opacity-50 mb-4"></i>
              <h3 className="font-serif text-3xl leading-tight mb-4">
                "I found a diner in Utah that serves pie better than my
                grandmother's."
              </h3>
              <div className="font-mono text-xs border-t border-paper/30 pt-4 uppercase">
                Location: [Redacted]
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group cursor-pointer">
            <div className="tape w-20 h-6 -top-2 -right-2 rotate-12 z-10 opacity-70"></div>
            <div className="bg-white p-4 pb-8 shadow-lg rotate-2 transition-transform group-hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="w-full aspect-square object-cover filter grayscale mb-4"
              />
              <h3 data-test="article-title-2" className="font-serif text-2xl mb-2">
                Dog Friendly Route 66
              </h3>
              <p className="font-sans text-sm">
                A complete guide to the Mother Road with your four-legged best
                friend.
              </p>
            </div>
          </div>
          <div className="break-inside-avoid relative group cursor-pointer">
            <div className="bg-sage/20 border border-sage p-6 shadow-md -rotate-1 hover:rotate-0 transition-transform">
              <span className="font-mono text-[10px] bg-sage text-white px-2 py-1 mb-2 inline-block">
                GUIDE
              </span>
              <h3 className="font-serif text-xl mb-2">
                Packing for 2 Weeks Off-Grid
              </h3>
              <ul className="font-hand text-xl list-disc pl-5 mt-4 space-y-1 text-ink/80">
                <li>Solar charger</li>
                <li>Extra kibble</li>
                <li>Real paper maps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
