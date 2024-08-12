import React from "react";
import { Link } from "react-router-dom";

function Cards({ data,title }) {
 
  return (
    <Link to={`/${data.media_type || title}/details/${data.id}`} className="w-[85%] sm:w-64 relative shrink-0 rounded-xl overflow-hidden h-fi ">
      <img className="w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${
          data.poster_path || data.backdrop_path || data.profile_path
        }`}
        alt=""
      />
      <h2 className="text-xs ml-1 font-medium text-zinc-400">{data.title || data.name}</h2>

    </Link>
  );
}

export default Cards;
