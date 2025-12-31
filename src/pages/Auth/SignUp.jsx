import React from "react";

const SignUp = () => {
  return (
    <div
      id="signup"
      className="text-ink antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="noise-layer"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M-10 20 Q 50 80 110 40"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <path
            d="M-10 80 Q 50 10 110 60"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>

        <div className="absolute top-10 left-10 w-48 aspect-3/4 bg-white p-2 shadow-lg -rotate-6 filter sepia-[.2]">
          <div className="tape w-16 h-6 -top-2 left-10 rotate-[-10deg]"></div>
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-10 right-10 w-40 aspect-square bg-white p-2 shadow-lg rotate-12 filter grayscale">
          <div className="tape w-12 h-6 -top-2 right-4 rotate-[45deg] opacity-79"></div>
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="relative bg-[#fcfcf0] p-4 mb-8 shadow-md transform rotate-1 mx-4 sm:mx-0">
          <div className="tape w-24 h-8 -top-3 left-1/2 -translate-x-1/2 -rotate-1 opacity-90"></div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 border border-ink overflow-hidden shrink-0">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Gabe"
                className="w-full h-full object-cover filter contrast-125"
              ></img>
            </div>
            <div>
              <p className="font-hand text-2xl leading-none mb-1">
                Gape invited you!
              </p>
              <p className="font-mono text-xs text-gray-500">
                You're joining "Highway 1 Drift"
              </p>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 w-12 h-12 text-ink transform rotate-12 opacity-80">
            <svg viewBox="0 0 50 50">
              <path
                d="M10,10 Q25,25 10,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5,35 L10,40 L18,34"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="w-full bg-white p-8 sm:p-12 shadow-paper-floating border border-black/5 relative z-10 transition-shadow duration-500 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.15)]">
          <div className="tape w-32 h-8 -top-4 left-1/2 translate-x-1/2 rotate-1 opacity-90"></div>

          <div className="text-center mb-8">
            <a
              href="#"
              className="inline-block font-black text-2xl tracking-tighter"
            >
              RoadDoggs
            </a>
            <h2 className="font-serif text-4xl mb-2">Create Account</h2>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-wide">
              Start your logbook today.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="hand-input appearance-none relative block w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent placeholder-gray-400 text-ink focus:z-10 font-mono text-sm transition-colors"
                />
                <span className="absolute right-0 top-3 text-gray-300 pointer-events-none font-hand text-xl">
                  Display Name
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address{" "}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="hand-input appearance-none relative block w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent placeholder-gray-400 text-ink focus:z-10 font-mono text-sm transition-colors"
              />
              <p className="hidden mt-1 text-[10px] font-mono text-alert font-bold uppercase">
                * Please enter a valid email
              </p>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="hand-input appearance-none relative block w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent placeholder-gray-400 text-ink focus:z-10 font-mono text-sm transition-colors"
              />
            </div>
            <div className="flex items-start gap-3 mt-4">
              <label
                htmlFor="newsletter"
                className="checkbox-wrapper relative flex items-center cursor-pointer"
              >
                <input id="newsletter" type="checkbox" className="sr-only" />
                <div className="w-4 h-4 border-2 border-ink bg-transparent transition-colors relative"></div>
              </label>
              <span className="font-mono text-xs text-gray-500 leading-tight pt-0.5">
                Send me travel guides & specialized route suggestions. (No spam,
                we promise).
              </span>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold font-mono uppercase text-paper bg-ink hover:bg-rust focus:outline-none transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(200,85,61,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="relative mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 border-dashed"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white font-hand text-2xl text-gray-500">
                or
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border-2 border-gray-200 hover:border-ink bg-white text-sm font-mono font-bold text-ink transition-colors group">
              <i className="ph-bold ph-google-logo text-lg mr-2 group-hover:text-rust transition-colors"></i>{" "}
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border-2 border-gray-200 hover:border-ink bg-white text-sm font-mono font-bold text-ink transition-colors group">
              <i className="ph-bold ph-apple-logo text-lg mr-2 group-hover:text-rust transition-colors"></i>{" "}
              Apple
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="font-mono text-[10px] text-gray-400 leading-relaxed">
              By joining, you agree to our{" "}
              <a
                href="#"
                className="border-b border-gray-400 hover:text-rust hover:border-rust transition-colors"
                rel="nofollow"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="border-b border-gray-400 hover:text-rust hover:border-rust transition-colors"
                rel="nofollow"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="font-mono text-xs text-gray-600">
                Already have a logbook?{" "}
                <a
                  href="/auth/login"
                  className="font-bold text-ink border-b-2 border-rust/50 hover:border-rust transition-colors"
                  rel="nofollow"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 opacity-80 pointer-events-none rotate-[-15deg] mix-blend-multiply">
            <div className="border-4 border-rust p-2 px-4 rounded-lg">
              <span className="font-mono font-bold text-rust text-xs tracking-widest uppercase block text-center">
                Approved
              </span>
              <span className="font-mono font-bold text-rust text-[10px] tracking-widest uppercase block text-center">
                Traveler
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
