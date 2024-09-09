import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import Person from "./Components/Persons";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";
import SeasonsDetails from "./Components/SeasonsDetails";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/tv/details/:id/season/:season_number" element={<SeasonsDetails />} />
        <Route path="/person" element={<Person />}></Route>
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
