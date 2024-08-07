import React from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <Link to={`details/${data.id}`} className="w-64 shrink-0 rounded-xl overflow-hidden h-fi ">
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
