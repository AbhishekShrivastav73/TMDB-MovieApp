import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      axios
        .get(`/search/multi?query=${query}`)
        .then((response) => {
          // console.log(response.data.results);
          setSearch(response.data.results);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [query]);
  return (
    <div className="flex text-black  items-center rounded-full bg-white  bg-opacity-80 border border-white px-4  relative">
      <i class="ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text" 
        name=""
        value={query}
        className=" bg-transparent outline-none text-black w-full px-3 py-2 rounded-md"
        placeholder="Search for movies..."
        id=""
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          class="ri-close-line absolute right-3"
        ></i>
      )}
      {query.length > 1 && (
         <div className="absolute top-full mt-2 z-30 left-0 w-full h-64 flex flex-col gap-2 overflow-auto">
         {search &&
           search.map((item, idx) => (
             <Link to={`/${item.media_type}/details/${item.id}}`} className="w-full flex items-center gap-4 px-4 py-4 bg-zinc-200 hover:bg-zinc-50 hover:text-zinc-800">
               <img
                 className="h-16 w-16 rounded-md"
                 src={`https://image.tmdb.org/t/p/w185/${item.poster_path || item.profile_path || item.backdrop_path}`}
                 alt=""
               />
               <h2>{item.title || item.name}</h2>
             </Link>
           ))}
       </div>
      )}
     
    </div>
  );
}

export default Search;
