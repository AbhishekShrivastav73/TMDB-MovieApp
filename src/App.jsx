import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import Person from "./Components/Persons";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </div>
  );
}

export default App;
