import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Partials/Loader";
import Cards from "./Partials/Cards";
import Footer from "./Partials/Footer";

function Episode() {
  const { id, season_number, epNumber } = useParams();
  const [epDetails, setDetails] = useState();

  function getEpisodeDetails() {
    axios
      .get(`/tv/${id}/season/${season_number}/episode/${epNumber}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch(() => {
        console.log("Error fetching episode details");
      });
  }

  useEffect(() => {
    getEpisodeDetails();
  }, [id, season_number, epNumber]);
  return epDetails ? (
    <div className="w-full min-h-screen relative  tracking-tighter">
      <div className="z-10 flex p-4 flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => history.go(-1)}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-600">{`${epDetails.name}`}</h1>
      </div>

      <div className="w-full p-4 md:flex md:gap-5">
        <img
          className="w-full md:w-1/2 rounded-xl "
          src={`https://image.tmdb.org/t/p/original/${epDetails.still_path}`}
          alt=""
        />
        <div className="my-4 flex flex-col gap-2 mt-3">
          <div className="flex gap-3">
            <span className="border border-yellow-500 w-fit text-yellow-500 px-2 text-xs py-1  rounded-xl">
              Season Number : {epDetails.season_number}
            </span>
            <span className="border border-yellow-500 w-fit text-yellow-500 px-2 text-xs py-1  rounded-xl">
              Episode Number : {epDetails.episode_number}
            </span>
          </div>
          <p className="text-blue-500">Air Date: {epDetails.air_date}</p>
          <h2 className="text-2xl font-bold">{epDetails.overview}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-semibold  ">Guest Stars</h1>
        <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
      </div>
      <div className="w-full h-fit py-6 md:py-5 px-4 flex items-center  gap-4 overflow-x-auto">
        {epDetails &&
          epDetails.guest_stars.map((data, idx) => (
            <Cards key={data.id} data={data} title="person" />
          ))}
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
}

export default Episode;
