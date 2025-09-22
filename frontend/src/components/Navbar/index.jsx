import React, { useState } from 'react';

export default function NavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left: logo + search (search hidden on very small screens) */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              {/* logo mark */}
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-semibold shadow">
                PC
              </div>
              <span className="text-lg font-semibold text-slate-800">Pro Conect</span>
            </a>

            <div className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-72 px-3 py-2 rounded-md border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <svg className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                </svg>
              </div>
            </div>
          </div>

          {/* center: nav links (hidden on mobile) */}
          <nav className="hidden md:flex space-x-4 items-center">
            <a href="#" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Home</a>
            <a href="#" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">My Network</a>
            <a href="#" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Jobs</a>
            <a href="#" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Messaging</a>
            <a href="#" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">Notifications</a>
          </nav>

          {/* right: actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
              </svg>
              <span className="text-sm text-slate-700">Me</span>
            </button>

            {/* small action icons (always visible) */}
            <button className="p-2 rounded-md hover:bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>

            <button className="p-2 rounded-md hover:bg-slate-100 hidden sm:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </button>

            {/* profile avatar */}
            <button className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-100">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-700">PC</div>
              <span className="hidden lg:inline-block text-sm text-slate-700">You</span>
            </button>

            {/* mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center md:hidden p-2 rounded-md hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">My Network</a>
            <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Jobs</a>
            <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Messaging</a>
            <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Notifications</a>
            <div className="pt-2 border-t mt-2">
              <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Profile</a>
              <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Settings</a>
              <a href="#" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Logout</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
