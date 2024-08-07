import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [show, setShow] = useState(false);
  

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="w-full fixed top-0  z-10 p-4 flex flex-col items-center gap-3 justify-between">
      <div className="flex items-center justify-between w-full">
        <i onClick={handleMenu} class="ri-menu-2-line text-2xl"></i>
        <h1 className="font-bold  ml-[12vw] tracking-tighter text-lg">
          TMDB - The Movie App
        </h1>
        <div className="hidden md:flex items-center">
          <Search />
        </div>
      </div>
      <div className="w-full md:hidden">
        <Search />
      </div>
      {show && (
        <div className="w-full h-screen ease-linear bg-zinc-900 bg-opacity-50 absolute top-0 left-0">
          <div className="w-[70%] md:w-1/2 relative px-4 py-6 h-screen bg-black ">
            <h1 className="font-bold font-serif mt-5">TMDB - The Movie App</h1>
            <i
              onClick={handleMenu}
              class="ri-close-line absolute top-3 text-2xl right-5"
            ></i>
            <hr className="my-4" />
            <div className="flex flex-col p-3 text-xl text-zinc-300 gap-4 text-md">
              <Link to={'/trending'} className="font-semibold">
                <i class="ri-fire-line"></i> Trending
              </Link>

              <Link to={`/popular`} className="font-semibold">
                <i class="ri-movie-2-line"></i> Popular 
              </Link>
              <Link to={'/movie'} className="font-semibold">
                <i class="ri-movie-2-line"></i> Movie
              </Link>
              <Link to={'/tv'} className="font-semibold">
                <i class="ri-movie-2-line"></i> Tv Shows
              </Link>
              <Link to={'/person'} className="font-semibold">
                <i class="ri-movie-2-line"></i> Person
              </Link>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
