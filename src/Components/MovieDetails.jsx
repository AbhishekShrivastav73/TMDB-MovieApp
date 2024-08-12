import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeMovie } from "../Store/reducers/MovieSlice";
import Search from "./Partials/Search";
import Loader from "./Partials/Loader";
import Hero from "./Partials/Hero";
import { asyncLoadMovie } from "../Store/actions/MovieAction";
import Cards from "./Partials/Cards";
import Footer from "./Partials/Footer";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movie);
  console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);
  return data ? (
    <div className="w-full min-h-screen relative  tracking-tighter">
      <div className="absolute top-0 z-10 flex p-4 flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          ></i>
          <h1 className="text-3xl font-semibold flex items-end gap-4">
            Movie{" "}
          </h1>
        </div>
        <Search />
      </div>
      <Hero data={data.dets} />
      <div className="p-4">
        
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold  ">Casts</h1>
          <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
        </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {data &&
            data.credits.cast.map((data, idx) => (
              <Cards key={data.id} data={data} title="person" />
            ))}
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold  ">Recommendations</h1>
          <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
        </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {data &&
            data.recommendations.results.map((data, idx) => (
              <Cards key={data.id} data={data} title="movie" />
            ))}
        </div>
       
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
