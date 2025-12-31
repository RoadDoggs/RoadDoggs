import React from "react";

const LogIn = () => {
  return (
    <div className="text-ink antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="noise-layer"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-5 transform scale-150"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 Q 100 0 200 50 T 400 50"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
          <path
            d="M0 100 Q 100 50 200 100 T 400 100"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
          <path
            d="M0 150 Q 100 100 200 150 T 400 150"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute top-20 left-10 md:left-12 w-48 bg-white p-3 pb-8 shadow-2xl rotate-6 float-slow hidden md:block">
          <div className="tape w-16 h-6 -top-2 left-12 -rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            className="w-full h-32 object-cover filter sepia-[.3]"
          />
          <p className="font-hand text-xl text-center mt-2 opacity-80">
            Last Trip. . .
          </p>
        </div>

        <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 rounded-full border-[20px] border-sand/30 mix-blend-multiply blur-sm"></div>
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        <div className="w-full transform -rotate-1 mb-4 relative z-0 hidden">
          <div className="bg-sage text-white p-3 pt-8 pb-3 shadow-md mx-4 rounded-t-sm border-x border-t border-ink/10 relative top-2">
            <div className="flex items-center justify-center gap-2">
              <i className="ph-bold ph-paper-plane-tilt"></i>
              <p className="font-mono text-xs font-bold uppercase tracking-wide">
                Login to view shared trip
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-8 sm:p-12 shadow-paper-floating border border-black/5 relative z-10 transition-shadow duration-500 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.15)]">
          <div className="tape w-32 h-8 -top-4 left-1/2 -translate-x-1/2 rotate-1 opacity-90"></div>
          <div className="text-center mb-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 mb-2 group"
              rel="nofollow"
            >
              <span className="font-serif font-black text-2xl tracking-tighter group-hover:text-rust transition-colors">
                RoadDoggs
              </span>
            </a>
            <h1 className="font-serif text-4xl mb-2 text-ink">Welcome Back</h1>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              Identify yourself, wanderer.
            </p>
          </div>

          <div className="hidden mb-6 bg-alert/10 border-l-4">
            <div className="flex items-start gap-2">
              <i className="ph-fill ph-warning-circle text-alert mt-0.5"></i>
              <div>
                <p className="font-mono text-[10px] text-alert font-bold uppercase">
                  Login Failed
                </p>
                <p className="font-sans text-xs text-alert/80">
                  Incorrect email or password. Try again.
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="font-mono text-[10px] uppercase font-bold text-gray-400"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="emal"
                autoComplete="email"
                required
                className="hand-input appearance-none block w-full px-0 py-2 border-b-2 border-gray-300 bg-transparent placeholder-gray-300 text-ink focus:z-10 font-serif text-lg transition-colors"
                placeholder="you@roaddoggs.com"
              />
            </div>

            <div className="space-y-1 relative">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="font-mono text-[10px] uppercase font-bold text-gray-400"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="hand-input appearance-none block w-full px-0 py-2 border-b-2 border-gray-300 bg-transparent placeholder-dots text-ink focus:z-10 font-serif text-lg transition-colors padding-right-10"
                  placeholder="Password"
                />

                <button
                  type="button"
                  className="absolute right-0 top-2 text-gray-400 hover:text-ink transition-colors focus:outline-none"
                >
                  <i className="ph-bold ph-eye text-xl"></i>
                </button>
              </div>
              <p className="hidden text-[10px] font-mono text-alert font-bold mt-1 text-right">
                Password is required
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-rust focus:ring-rust border-gray-300 rounded cursor-pointer accent-rust"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs font-mono text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-mono text-xs text-ink hover:text-rust border-b border-transparent hover:border-rust transition-all"
                  rel="nofollow"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold font-mono uppercase text-paper bg-ink hover:bg-rust focus:outline-none transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="relative mt-10 mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 border-dashed"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white font-hand text-2xl text-gray-400 pt-1">
                or continue with
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center px-4 py-2.5 border-2 border-gray-200 hover:border-ink bg-white text-xs font-mono font-bold text-ink transition-colors group">
              <i className="ph-bold ph-google-logo text-lg mr-2 group-hover:text-rust transition-colors"></i>{" "}
              Google
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2.5 border-2 border-gray-200 hover:border-ink bg-white text-xs font-mono font-bold text-ink transition-colors group">
              <i className="ph-bold ph-apple-logo text-lg mr-2 group-hover:text-rust transition-colors"></i>{" "}
              Apple
            </button>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <p className="font-mono text-xs text-gray-600">
              New to the pack?
              <a
                href="/auth/signup"
                className="font-bold text-ink border-b-2 border-rust/30 hover:border-rust transition-all ml-1"
                rel="nofollow"
              >
                Create an account
              </a>
            </p>
            <div className="absolute bottom-6 right-8 opacity-40 rotate-15 hidden sm:block">
              <svg width="40" height="20" viewBox="0 0 50 30" className="text-rust">
                <path
                  d="M40,5 Q20,25 0,15"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M5,10 L0,15 L8,18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
              </div>
              <p className="mt-8 font-hand text-xl text-ink/40 rotate-1">"Not all who wander are lost... some just forgot their password."</p>
      </div>
    </div>
  );
};

export default LogIn;
