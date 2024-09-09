import React, { useEffect } from "react";
import { asyncLoadTv } from "../Store/actions/TvActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeTv } from "../Store/reducers/TvSlice";
import Search from "./Partials/Search";
import Hero from "./Partials/Hero";
import Loader from "./Partials/Loader";
import Cards from "./Partials/Cards";
import Footer from "./Partials/Footer";
import SeasonCard from "./Partials/SeasonCard";

function TvDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.tv);
  console.log(data);

  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return data ? (
    <div className="w-full min-h-screen relative  tracking-tighter">
      <div className="absolute top-0 z-10 flex p-4 flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          ></i>
          <h1 className="text-3xl font-semibold flex items-end gap-4">Tv </h1>
        </div>
        <Search />
      </div>
      <Hero data={data.dets} />
      <div className="p-4">

      <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold  ">Seasons</h1>
          <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
        </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {data &&
            data.dets.seasons.map((detail, idx) => (
              <SeasonCard key={detail.id} data={detail} series={data.dets} title="tv" />
            ))}
        </div>


      <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold  ">Recommendations</h1>
          <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
        </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {data &&
            data.recommendations.results.map((data, idx) => (
              <Cards key={data.id} data={data} title="tv" />
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader />
  );
}

export default TvDetails;
