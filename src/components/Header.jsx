import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header id="header" className="relative z-20 ">
        <nav className="fixed top-0 left-0 right-0 z-30 px-4">
          <div className="max-w-5xl mx-auto mt-4 flex items-center justify-between px-8 py-4 rounded-full text-white bg-[linear-gradient(180deg,_rgba(18,25,43,0.81)_1%,_rgba(232,241,244,0.24)_150%)]">
            <a href="/">
              {" "}
              <img src="logo.svg" alt="Logo" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#welcome"
                className="text-lightgrey hover:text-teal transition-opacity"
              >
                Welcome to Cyber62
              </a>
              <a
                href="/#events"
                className="text-lightgrey hover:text-teal transition-opacity"
              >
                Events
              </a>
              <a
                href="/#community"
                className="text-lightgrey hover:text-teal transition-opacity"
              >
                Our Community
              </a>
              <a
                href="/faq"
                className="text-lightgrey hover:text-teal transition-opacity"
              >
                FAQ
              </a>
            </div>

            <button
              onClick={() => (window.location.href = "#community")}
              className="hidden md:block bg-darkblue font-semibold hover:outline-teal hover:outline transition-all hover:text-teal text-white px-6 py-2 rounded-full"
            >
              Join the club
            </button>

            {/* Mobile menu button - hidden on desktop */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Mobile menu - shown when menu is open */}
            {isMenuOpen && (
              <div className="md:hidden fixed inset-0 z-50 bg-[rgba(18,25,43,0.95)] pt-20">
                <div className="flex flex-col items-center gap-8 p-8">
                  <a
                    href="#welcome"
                    className="text-lightgrey hover:text-teal transition-opacity text-xl"
                    onClick={toggleMenu}
                  >
                    Welcome to Cyber62
                  </a>
                  <a
                    href="#events"
                    className="text-lightgrey hover:text-teal transition-opacity text-xl"
                    onClick={toggleMenu}
                  >
                    Events
                  </a>
                  <a
                    href="#community"
                    className="text-lightgrey hover:text-teal transition-opacity text-xl"
                    onClick={toggleMenu}
                  >
                    Our Community
                  </a>
                  <a
                    href="/faq"
                    className="text-lightgrey hover:text-teal transition-opacity text-xl"
                    onClick={toggleMenu}
                  >
                    FAQ
                  </a>
                  <button
                    onClick={() => (window.location.href = "/join")}
                    className="bg-darkblue font-semibold hover:outline-teal hover:outline transition-all hover:text-teal text-white px-6 py-2 rounded-full mt-4"
                  >
                    Join the club
                  </button>
                  <button
                    className="absolute top-8 right-8 text-white"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
