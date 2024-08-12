import React from "react";
import { Link } from "react-router-dom";

function Hero({ data }) {
  return (
    <div className="w-full h-screen relative">
      <img
        className="md:w-full h-[90%] md:h-[100%] object-cover object-top"
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        }`}
        alt=""
      />
      <div className="overlay absolute w-full h-[90%] gap-4 md:h-[100%] items-center   top-0 bg-gradient-to-b from-transparent to-black  flex flex-col justify-center md:justify-center p-4">
        <h1 className="text-6xl text-center mt-5 md:mt-0   md:text-6xl font-bold tracking-tighter">
          {data.title || data.name}
        </h1>
        <p className="text-md text-center w-full md:w-[70%] tracking-tighter">
          {data.overview ? data.overview.slice(0, 200) : ""}...
          <Link className="text-blue-500">Read more.</Link>
        </p>
        <div className="flex items-center gap-4 ">
          {data.media_type ? (
            <p className=" border bg-orange-500 hover:text-white font-bold text-sm border-white px-4 py-2 rounded-full">
              Type : {data.media_type}
            </p>
          ) : (
            ""
          )}
          {data.release_date ? (
            <p className=" border bg-orange-500 hover:text-white font-bold text-sm border-white px-4 py-2 rounded-full">
              Release Date : {data.release_date}
            </p>
          ) : (
            ""
          )}
        </div>
        {data.genres ? (
          <div className="flex items-center gap-4 flex-wrap">
          { data.genres.map((elem)=>(
            <span key={elem.id} className="px-4 py-1 text-sm border-orange-500 tracking-tighter font-medium border-2 rounded-full">{elem.name}</span>
          ))}
      </div>
        ) : ''}
        
        <Link className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-full ">
          {" "}
          <i class="ri-tv-2-line mr-2"></i> Watch Trailer
        </Link>
      </div>

        

    </div>
  );
}

export default Hero;
