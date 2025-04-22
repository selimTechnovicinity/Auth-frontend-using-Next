"use client";

import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { PiBell } from "react-icons/pi";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="w-full px-4 py-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        {/* Left greeting - hidden on mobile */}
        <div className="hidden md:block order-1 md:order-none">
          <h1 className="text-lg md:text-xl font-semibold">Hi, John!</h1>
          <p className="text-sm text-gray-500">Let&apos;s check your store today</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
          {/* Search Input - mobile version */}
          {isClient && (
            <>
              <div className="md:hidden flex items-center justify-end w-full order-1 ml-5">
                {/* Mobile search toggle */}
                <button
                  onClick={toggleSearch}
                  className="text-gray-500 p-2 mr-4"
                  aria-label="Search"
                >
                  {!isSearchOpen && <IoSearchOutline className="text-xl" />}
                </button>

                <div className="mx-3 relative">
                  <AiOutlineMail size={27} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
                </div>
                <div className="mx-3 relative">
                  <PiBell size={27} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
                </div>

                {/* Business Info & Icon - hidden on mobile */}
                <div className=" md:flex items-center gap-3">
                  <div className="hidden text-sm text-left">
                    <p className="font-semibold ml-5">Star Cafe Edmonton</p>
                    <p className="text-gray-500 text-xs ml-5">
                      14064 - 120 St Canada
                    </p>
                  </div>
                  <FaUserCircle className="text-3xl text-green-700 shrink-0 mr-5" />
                </div>
              </div>

              {/* Mobile search input */}
              {(isSearchOpen || !isClient) && (
                <div className="md:hidden relative w-full order-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-10 py-2 border border-gray-300 rounded-full text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  {/* Left search icon */}
                  <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400 text-lg" />

                  {/* Right close icon inside input */}
                  <button
                    onClick={toggleSearch}
                    className="absolute right-3 top-2.5 text-gray-500"
                    aria-label="Close search"
                  >
                    <IoCloseOutline className="text-lg" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Desktop search input */}
          <div className="hidden md:block relative w-full sm:w-64 order-2 sm:order-none">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400 text-lg" />
          </div>

          {/* Business Info & Icon - desktop version */}
          {isClient && (
            <div className="hidden md:flex items-center justify-between gap-3 w-full sm:w-auto order-1 sm:order-none">
              <div className="mx-3 relative">
                <AiOutlineMail size={27} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
              </div>
              <div className="mx-3 relative">
                <PiBell size={27} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
              </div>
              <div className="text-sm text-left">
                <p className="font-semibold ml-5">Star Cafe Edmonton</p>
                <p className="text-gray-500 text-xs ml-5">
                  14064 - 120 St Canada
                </p>
              </div>
              <FaUserCircle className="text-3xl text-green-700 shrink-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
