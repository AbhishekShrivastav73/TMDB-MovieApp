import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Partials/Loader";
import SeasonCard from "./Partials/SeasonCard";
import Cards from "./Partials/Cards";
import Footer from "./Partials/Footer";

function SeasonsDetails() {
  const { id, season_number } = useParams();
  const [season, setSeason] = useState();

  const getSeason = () => {
    axios
      .get(`/tv/${id}/season/${season_number}`)
      .then((response) => {
        console.log(response.data);
        setSeason(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(id, season_number);
    getSeason();
  }, [id, season_number]);
  return season ? (
    <div className="w-full min-h-screen relative  tracking-tighter">
      <div className="z-10 flex p-4 flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => history.go(-1)}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-600">{`${season.name}`}</h1>
      </div>
      <div className="p-2 px-4 w-full min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex flex-col items-center h-fit">
          <img
            className="w-64 rounded-xl "
            src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
            alt=""
          />
          <h5 className="mt-4 font-normal tracking-tighter">Release Date :  {season.air_date}</h5>
        </div>
        <div className="w-full md:w-1/2 md:h-screen overflow-auto">
          <h1 className="text-5xl mb-3 font-semibold">{season.name}</h1>
          <div className="flex flex-col gap-6">
            {season.episodes.map((episode, idx) => (
              <div key={episode.id} className="flex gap-5 flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col w-full md:w-2/3 ">
                  <p className="text-blue-500">Episode - {idx + 1}</p>
                  <h2 className="text-xl font-bold ">{episode.name}</h2>
                  <p className="font-thin">{episode.overview}</p>
                  <span className="border border-yellow-500 w-fit text-yellow-500 px-2 text-xs py-1 mt-4 rounded-xl">{episode.air_date}</span>
                </div>
                <img
                  className="w-64 rounded-xl h-32 "
                  src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader />
  );
}

export default SeasonsDetails;
