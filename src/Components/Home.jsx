import React, { useEffect, useState } from "react";
import Navbar from "./Partials/Navbar";
import axios from "../utils/axios";
import Hero from "./Partials/Hero";
import Cards from "./Partials/Cards";
import Filter from "./Partials/Filter";
import Footer from "./Partials/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../Store/reducers/trendingSlice";

function Home() {
  const [wallpaper, setWallpaper] = useState([]);
  const trendingData = useSelector((state) => state.trending.data);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [upcoming, setUpcoming] = useState([]);
  const [topRatted, setTopRatted] = useState([]);

  const dispatch = useDispatch();

  const getHero = () => {
    axios
      .get(`/trending/all/day`)
      .then((response) => {
        let randomIdx =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];
        console.log(randomIdx);
        setWallpaper(randomIdx);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUpcoming = () => {
    axios
      .get(`/movie/upcoming`)
      .then((response) => {
        setUpcoming(response.data.results);
        // console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTopRatted = () => {
    axios
      .get(`/movie/top_rated`)
      .then((response) => {
        setTopRatted(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getHero();
    getUpcoming();
    getTopRatted();
    dispatch(fetchTrending({ category: category, duration: duration }));
  }, [category, duration, dispatch]);

  return wallpaper ? (
    <div className="relative text-white w-full min-h-screen">
      <Navbar />
      <Hero data={wallpaper} />
      <div className="w-full min-h-screen p-4">
        <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between mb-2 tracking-tighter">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl  font-semibold  ">Trending Now🔥</h1>
            <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
          </div>
          <div className="flex items-center gap-4">
            <Filter
              title={"Category"}
              options={["all", "tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
            <Filter
              title={"Duration"}
              options={["day", "week"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-fit py-6 md:py-5 flex items-center  gap-4 overflow-x-auto">
          {trendingData &&
            trendingData.map((data, idx) => (
              <Cards key={data.id} data={data} />
            ))}
        </div>
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold  ">Upcoming Movies</h1>
            <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
          </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {upcoming &&
            upcoming.map((data, idx) => <Cards key={data.id} data={data} title='movie' />)}
        </div>
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold  ">Top-Rated Movies</h1>
            <i class="ri-arrow-right-double-line text-2xl text-blue-500"></i>
          </div>
        <div className="w-full h-fit py-6 md:py-5  flex items-center  gap-4 overflow-x-auto">
          {topRatted &&
            topRatted.map((data, idx) => <Cards key={data.id} data={data} />)}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <h1 className="text-4xl font-semibold text-white">Loading</h1>
  );
}

export default Home;
